---
layout: default
title: Latest Smoothie Commits
---

# Latest Smoothie Commits

{::nomarkdown}
<a href="/images/oshw-logo.png">
  <img src="/images/oshw-logo.png" alt="Smoothieware Logo" style="width: 150px; height: 150px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  The following is a list of the latest commits to the Smoothieware project on GitHub for the <code>edge</code> and <code>master</code> branches.
</sl-alert>

## Recent Commits

{::nomarkdown}
<div style="margin-bottom: 2rem;">
  <h3 style="color: #ffcc00; margin-bottom: 1rem;">
    <sl-icon name="git"></sl-icon> Edge Branch
    <span style="font-size: 0.8em; color: #888; font-weight: normal;"> - Development branch with latest features</span>
  </h3>
  <div id="edge-commits" style="margin-bottom: 2rem;">
    <sl-spinner style="font-size: 2rem; --track-width: 4px;"></sl-spinner>
    <span style="margin-left: 1rem; color: #888;">Loading commits...</span>
  </div>

  <h3 style="color: #ffcc00; margin-bottom: 1rem;">
    <sl-icon name="git"></sl-icon> Master Branch
    <span style="font-size: 0.8em; color: #888; font-weight: normal;"> - Stable release branch</span>
  </h3>
  <div id="master-commits" style="margin-bottom: 2rem;">
    <sl-spinner style="font-size: 2rem; --track-width: 4px;"></sl-spinner>
    <span style="margin-left: 1rem; color: #888;">Loading commits...</span>
  </div>
</div>

<script>
// Function to format date as relative time
function formatRelativeTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    if (interval >= 1) {
      return `${interval} ${unit}${interval !== 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
}

// Function to fetch and display commits for a branch
async function fetchCommits(branch, containerId) {
  const container = document.getElementById(containerId);

  try {
    const response = await fetch(
      `https://api.github.com/repos/Smoothieware/Smoothieware/commits?sha=${branch}&per_page=10`
    );

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`);
    }

    const commits = await response.json();

    // Build the HTML for commits
    let html = '<div style="display: flex; flex-direction: column; gap: 1rem;">';

    commits.forEach(commit => {
      const sha = commit.sha.substring(0, 7);
      const message = commit.commit.message.split('\n')[0]; // First line only
      const author = commit.commit.author.name;
      const authorUrl = commit.author ? commit.author.html_url : '#';
      const date = commit.commit.author.date;
      const commitUrl = commit.html_url;

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
                <a href="${commitUrl}"
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
                <a href="${authorUrl}"
                   target="_blank"
                   style="color: #888; text-decoration: none;"
                   onmouseover="this.style.color='#ffcc00'"
                   onmouseout="this.style.color='#888'">
                  ${author}
                </a>
                <span style="margin: 0 0.5rem;">•</span>
                <sl-icon name="clock" style="font-size: 1em;"></sl-icon>
                ${formatRelativeTime(date)}
              </div>
            </div>
          </div>
        </div>
      `;
    });

    html += '</div>';

    // Add link to see all commits
    html += `
      <div style="margin-top: 1.5rem; text-align: center;">
        <a href="https://github.com/Smoothieware/Smoothieware/commits/${branch}"
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
    container.innerHTML = `
      <sl-alert variant="danger" open>
        <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
        <strong>Failed to load commits</strong><br>
        ${error.message}. Please visit the
        <a href="https://github.com/Smoothieware/Smoothieware/commits/${branch}" target="_blank" style="color: inherit; text-decoration: underline;">
          GitHub commits page
        </a> directly.
      </sl-alert>
    `;
  }
}

// Load commits when page loads
document.addEventListener('DOMContentLoaded', () => {
  fetchCommits('edge', 'edge-commits');
  fetchCommits('master', 'master-commits');
});
</script>

<style>
/* Additional styling for better appearance */
#edge-commits, #master-commits {
  min-height: 100px;
}
</style>
{:/nomarkdown}

For more information about getting the firmware, see the [Getting Smoothie](getting-smoothie) page.
