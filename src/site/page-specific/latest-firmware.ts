/**
 * latest-firmware.ts
 *
 * Page-specific functionality for the latest firmware commit display
 * Works on both /latest-firmware and pages that include the compact version
 *
 * Features:
 * - Fetches recent commits from GitHub API
 * - Displays commits for V1 (edge/master) and V2 (master) branches
 * - Supports both full and compact display modes
 */

// GitHub repository information
const V1_REPO = 'Smoothieware/Smoothieware';
const V2_REPO = 'Smoothieware/SmoothieV2';

// GitHub commit data types
interface GitHubCommit {
    sha: string;
    html_url: string;
    commit: {
        message: string;
        author: {
            name: string;
            date: string;
        };
    };
    author?: {
        html_url: string;
    };
}

/**
 * Formats a date string as a relative time (e.g., "2 days ago")
 */
function format_relative_time(date_string: string): string {

    const date = new Date(date_string);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals: Record<string, number> = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    };

    for (const [unit, seconds_in_unit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / seconds_in_unit);

        if (interval >= 1) {
            return `${interval} ${unit}${interval !== 1 ? 's' : ''} ago`;
        }
    }

    return 'just now';
}

/**
 * Fetches and displays commits in compact mode (5 commits, minimal UI)
 */
async function fetch_commits_compact(repo: string, branch: string, container_id: string): Promise<void> {

    const container = document.getElementById(container_id);

    // Guard: container might not exist if version is switched
    if (!container) {
        return;
    }

    try {
        // Fetch commits from GitHub API
        const response = await fetch(
            `https://api.github.com/repos/${repo}/commits?sha=${branch}&per_page=5`
        );

        // Guard against API errors
        if (!response.ok) {
            throw new Error(`API error ${response.status}`);
        }

        const commits: GitHubCommit[] = await response.json();

        // Build HTML for commits
        let html = '<div style="display: flex; flex-direction: column; gap: 0.5rem;">';

        for (const commit of commits) {
            const sha = commit.sha.substring(0, 7);
            const message = commit.commit.message.split('\n')[0];

            // Truncate long messages
            const display_message = message.length > 50
                ? message.substring(0, 50) + '...'
                : message;

            const author = commit.commit.author.name;
            const date = commit.commit.author.date;
            const commit_url = commit.html_url;

            html += `
                <div style="
                    background-color: #2a2a2a;
                    border-left: 3px solid #444;
                    padding: 0.5rem 0.75rem;
                    transition: border-color 0.2s ease;
                "
                onmouseover="this.style.borderLeftColor='#ffcc00'"
                onmouseout="this.style.borderLeftColor='#444'">
                    <div>
                        <a href="${commit_url}"
                           target="_blank"
                           style="
                               color: #ffcc00;
                               text-decoration: none;
                               font-family: monospace;
                               font-size: 0.85em;
                           "
                           onmouseover="this.style.textDecoration='underline'"
                           onmouseout="this.style.textDecoration='none'">
                            ${sha}
                        </a>
                        <span style="color: #e0e0e0; margin-left: 0.4rem; font-size: 0.9em;">
                            ${display_message}
                        </span>
                    </div>
                    <div style="font-size: 0.75em; color: #888; margin-top: 0.25rem;">
                        ${author} • ${format_relative_time(date)}
                    </div>
                </div>
            `;
        }

        html += '</div>';
        container.innerHTML = html;

    } catch (error) {
        // Show error with fallback link
        container.innerHTML = `
            <div style="color: #ff6b6b; font-size: 0.85em;">
                Failed to load. <a href="https://github.com/${repo}/commits/${branch}"
                target="_blank" style="color: #ffcc00; text-decoration: underline;">View on GitHub</a>
            </div>
        `;
    }
}

/**
 * Fetches and displays commits in full mode (10 commits, detailed UI)
 */
async function fetch_commits_full(repo: string, branch: string, container_id: string): Promise<void> {

    const container = document.getElementById(container_id);

    // Guard: container might not exist if version is switched
    if (!container) {
        return;
    }

    try {
        // Fetch commits from GitHub API
        const response = await fetch(
            `https://api.github.com/repos/${repo}/commits?sha=${branch}&per_page=10`
        );

        // Guard against API errors
        if (!response.ok) {
            throw new Error(`GitHub API returned ${response.status}`);
        }

        const commits: GitHubCommit[] = await response.json();

        // Build HTML for commits
        let html = '<div style="display: flex; flex-direction: column; gap: 1rem;">';

        for (const commit of commits) {
            const sha = commit.sha.substring(0, 7);
            const message = commit.commit.message.split('\n')[0];
            const author = commit.commit.author.name;
            const author_url = commit.author?.html_url ?? '#';
            const date = commit.commit.author.date;
            const commit_url = commit.html_url;

            html += `
                <div style="
                    background-color: #2a2a2a;
                    border: 1px solid #444;
                    border-radius: 8px;
                    padding: 1rem;
                    transition: all 0.3s ease;
                "
                onmouseover="this.style.borderColor='#ffcc00'; this.style.backgroundColor='#333'"
                onmouseout="this.style.borderColor='#444'; this.style.backgroundColor='#2a2a2a'">
                    <div style="display: flex; justify-content: space-between; align-items: start; gap: 1rem;">
                        <div style="flex: 1;">
                            <div style="margin-bottom: 0.5rem;">
                                <a href="${commit_url}"
                                   target="_blank"
                                   style="
                                       color: #ffcc00;
                                       text-decoration: none;
                                       font-weight: 600;
                                       font-family: monospace;
                                   "
                                   onmouseover="this.style.textDecoration='underline'"
                                   onmouseout="this.style.textDecoration='none'">
                                    ${sha}
                                </a>
                                <span style="color: #e0e0e0; margin-left: 0.5rem;">
                                    ${message}
                                </span>
                            </div>
                            <div style="font-size: 0.85em; color: #888;">
                                <sl-icon name="person-circle" style="font-size: 1em;"></sl-icon>
                                <a href="${author_url}"
                                   target="_blank"
                                   style="color: #888; text-decoration: none;"
                                   onmouseover="this.style.color='#ffcc00'"
                                   onmouseout="this.style.color='#888'">
                                    ${author}
                                </a>
                                <span style="margin: 0 0.5rem;">•</span>
                                <sl-icon name="clock" style="font-size: 1em;"></sl-icon>
                                ${format_relative_time(date)}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        html += '</div>';

        // Add link to see all commits
        html += `
            <div style="margin-top: 1.5rem; text-align: center;">
                <a href="https://github.com/${repo}/commits/${branch}"
                   target="_blank"
                   style="
                       display: inline-block;
                       color: #ffcc00;
                       text-decoration: none;
                       padding: 0.5rem 1rem;
                       border: 1px solid #ffcc00;
                       border-radius: 6px;
                       transition: all 0.3s ease;
                   "
                   onmouseover="this.style.backgroundColor='rgba(255, 204, 0, 0.1)'"
                   onmouseout="this.style.backgroundColor='transparent'">
                    View all ${branch} commits on GitHub →
                </a>
            </div>
        `;

        container.innerHTML = html;

    } catch (error) {
        // Show error with fallback link
        const error_message = error instanceof Error ? error.message : 'Unknown error';
        container.innerHTML = `
            <sl-alert variant="danger" open>
                <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
                <strong>Failed to load commits</strong><br>
                ${error_message}. Please visit the
                <a href="https://github.com/${repo}/commits/${branch}" target="_blank" style="color: inherit; text-decoration: underline;">
                    GitHub commits page
                </a> directly.
            </sl-alert>
        `;
    }
}

/**
 * Initializes the compact commit display
 * Used in included files like latest-firmware-compact-for-include.md
 */
function init_compact_commits(): void {

    // V1 commits (Smoothieware/Smoothieware)
    fetch_commits_compact(V1_REPO, 'edge', 'v1-edge-commits-compact');
    fetch_commits_compact(V1_REPO, 'master', 'v1-master-commits-compact');

    // V2 commits (Smoothieware/SmoothieV2)
    fetch_commits_compact(V2_REPO, 'master', 'v2-master-commits-compact');

    // Original IDs for backward compatibility
    fetch_commits_compact(V1_REPO, 'edge', 'edge-commits-compact');
    fetch_commits_compact(V1_REPO, 'master', 'master-commits-compact');
}

/**
 * Initializes the full commit display
 * Used on /latest-firmware page
 */
function init_full_commits(): void {

    // V1 commits (Smoothieware/Smoothieware)
    fetch_commits_full(V1_REPO, 'edge', 'v1-edge-commits');
    fetch_commits_full(V1_REPO, 'master', 'v1-master-commits');

    // V2 commits (Smoothieware/SmoothieV2)
    fetch_commits_full(V2_REPO, 'master', 'v2-master-commits');

    // Original IDs for backward compatibility
    fetch_commits_full(V1_REPO, 'edge', 'edge-commits');
    fetch_commits_full(V1_REPO, 'master', 'master-commits');
}

/**
 * Main initialization function
 * Detects which containers exist and initializes appropriately
 */
function init(): void {

    // Check for compact containers (included via latest-firmware-compact-for-include.md)
    const has_compact = document.getElementById('v1-edge-commits-compact') ||
                        document.getElementById('edge-commits-compact');

    // Check for full containers (on /latest-firmware page)
    const has_full = document.getElementById('v1-edge-commits') ||
                     document.getElementById('edge-commits');

    // Initialize appropriate displays
    if (has_compact) {
        init_compact_commits();
    }

    if (has_full) {
        init_full_commits();
    }
}

// Run on DOMContentLoaded
document.addEventListener('DOMContentLoaded', init);
