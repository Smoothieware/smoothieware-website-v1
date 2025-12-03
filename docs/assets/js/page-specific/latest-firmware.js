// src/site/page-specific/latest-firmware.ts
var V1_REPO = "Smoothieware/Smoothieware";
var V2_REPO = "Smoothieware/SmoothieV2";
function format_relative_time(date_string) {
  const date = new Date(date_string);
  const now = new Date;
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const intervals = {
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
      return `${interval} ${unit}${interval !== 1 ? "s" : ""} ago`;
    }
  }
  return "just now";
}
async function fetch_commits_compact(repo, branch, container_id) {
  const container = document.getElementById(container_id);
  if (!container) {
    return;
  }
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/commits?sha=${branch}&per_page=5`);
    if (!response.ok) {
      throw new Error(`API error ${response.status}`);
    }
    const commits = await response.json();
    let html = '<div style="display: flex; flex-direction: column; gap: 0.5rem;">';
    for (const commit of commits) {
      const sha = commit.sha.substring(0, 7);
      const message = commit.commit.message.split(`
`)[0];
      const display_message = message.length > 50 ? message.substring(0, 50) + "..." : message;
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
    html += "</div>";
    container.innerHTML = html;
  } catch (error) {
    container.innerHTML = `
            <div style="color: #ff6b6b; font-size: 0.85em;">
                Failed to load. <a href="https://github.com/${repo}/commits/${branch}"
                target="_blank" style="color: #ffcc00; text-decoration: underline;">View on GitHub</a>
            </div>
        `;
  }
}
async function fetch_commits_full(repo, branch, container_id) {
  const container = document.getElementById(container_id);
  if (!container) {
    return;
  }
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/commits?sha=${branch}&per_page=10`);
    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`);
    }
    const commits = await response.json();
    let html = '<div style="display: flex; flex-direction: column; gap: 1rem;">';
    for (const commit of commits) {
      const sha = commit.sha.substring(0, 7);
      const message = commit.commit.message.split(`
`)[0];
      const author = commit.commit.author.name;
      const author_url = commit.author?.html_url ?? "#";
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
    html += "</div>";
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
    const error_message = error instanceof Error ? error.message : "Unknown error";
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
function init_compact_commits() {
  fetch_commits_compact(V1_REPO, "edge", "v1-edge-commits-compact");
  fetch_commits_compact(V1_REPO, "master", "v1-master-commits-compact");
  fetch_commits_compact(V2_REPO, "master", "v2-master-commits-compact");
  fetch_commits_compact(V1_REPO, "edge", "edge-commits-compact");
  fetch_commits_compact(V1_REPO, "master", "master-commits-compact");
}
function init_full_commits() {
  fetch_commits_full(V1_REPO, "edge", "v1-edge-commits");
  fetch_commits_full(V1_REPO, "master", "v1-master-commits");
  fetch_commits_full(V2_REPO, "master", "v2-master-commits");
  fetch_commits_full(V1_REPO, "edge", "edge-commits");
  fetch_commits_full(V1_REPO, "master", "master-commits");
}
function init() {
  const has_compact = document.getElementById("v1-edge-commits-compact") || document.getElementById("edge-commits-compact");
  const has_full = document.getElementById("v1-edge-commits") || document.getElementById("edge-commits");
  if (has_compact) {
    init_compact_commits();
  }
  if (has_full) {
    init_full_commits();
  }
}
document.addEventListener("DOMContentLoaded", init);
