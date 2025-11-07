## Recent Commits

{::nomarkdown}
<div style="margin: 1.5rem 0;">
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
    <!-- Edge Branch -->
    <div>
      <h4 style="color: #ffcc00; margin-bottom: 0.75rem; font-size: 1.1em;">
        <sl-icon name="git"></sl-icon> Edge Branch
      </h4>
      <div id="edge-commits-compact" style="font-size: 0.9em;">
        <sl-spinner style="font-size: 1.5rem;"></sl-spinner>
        <span style="margin-left: 0.5rem; color: #888;">Loading...</span>
      </div>
    </div>

    <!-- Master Branch -->
    <div>
      <h4 style="color: #ffcc00; margin-bottom: 0.75rem; font-size: 1.1em;">
        <sl-icon name="git"></sl-icon> Master Branch
      </h4>
      <div id="master-commits-compact" style="font-size: 0.9em;">
        <sl-spinner style="font-size: 1.5rem;"></sl-spinner>
        <span style="margin-left: 0.5rem; color: #888;">Loading...</span>
      </div>
    </div>
  </div>
</div>

<script>
// Compact version - shows only 5 commits per branch
function formatRelativeTimeCompact(dateString) {
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

async function fetchCommitsCompact(branch, containerId) {
  const container = document.getElementById(containerId);

  try {
    const response = await fetch(
      `https://api.github.com/repos/Smoothieware/Smoothieware/commits?sha=${branch}&per_page=5`
    );

    if (!response.ok) {
      throw new Error(`API error ${response.status}`);
    }

    const commits = await response.json();

    let html = '<div style="display: flex; flex-direction: column; gap: 0.5rem;">';

    commits.forEach(commit => {
      const sha = commit.sha.substring(0, 7);
      const message = commit.commit.message.split('\n')[0];
      // Truncate long messages
      const displayMessage = message.length > 50 ? message.substring(0, 50) + '...' : message;
      const author = commit.commit.author.name;
      const date = commit.commit.author.date;
      const commitUrl = commit.html_url;

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
            <a href="${commitUrl}"
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
              ${displayMessage}
            </span>
          </div>
          <div style="font-size: 0.75em; color: #888; margin-top: 0.25rem;">
            ${author} • ${formatRelativeTimeCompact(date)}
          </div>
        </div>
      `;
    });

    html += '</div>';

    container.innerHTML = html;

  } catch (error) {
    container.innerHTML = `
      <div style="color: #ff6b6b; font-size: 0.85em;">
        Failed to load. <a href="https://github.com/Smoothieware/Smoothieware/commits/${branch}"
        target="_blank" style="color: #ffcc00; text-decoration: underline;">View on GitHub</a>
      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchCommitsCompact('edge', 'edge-commits-compact');
  fetchCommitsCompact('master', 'master-commits-compact');
});
</script>
{:/nomarkdown}

View the [full commit history →](latest-firmware)
