---
permalink: /latest-firmware
layout: default
title: Latest Smoothie Commits
---

# Latest Smoothie Commits

{::nomarkdown}
<a href="/images/oshw-logo.png">
  <img src="/images/oshw-logo.png" alt="Smoothieware Logo" style="width: 150px; height: 150px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

{::nomarkdown}

<versioned orientation="horizontal">
<v1>
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  The following is a list of the latest commits to the <strong>Smoothieware V1</strong> project on GitHub for the <code>edge</code> and <code>master</code> branches.
</sl-alert>
</v1>
<v2>
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  The following is a list of the latest commits to the <strong>Smoothieware V2</strong> project on GitHub for the <code>master</code> branch.
</sl-alert>
</v2>
</versioned>

{:/nomarkdown}

{::nomarkdown}

<h2>Recent Commits</h2>

<versioned orientation="vertical">
<v1>
<div style="margin-bottom: 2rem;">
  <h3 style="color: #ffcc00; margin-bottom: 1rem;">
    <sl-icon name="git"></sl-icon> V1 Edge Branch
    <span style="font-size: 0.8em; color: #888; font-weight: normal;"> - Development branch with latest features</span>
  </h3>
  <div id="v1-edge-commits" style="margin-bottom: 2rem;">
    <sl-spinner style="font-size: 2rem; --track-width: 4px;"></sl-spinner>
    <span style="margin-left: 1rem; color: #888;">Loading commits...</span>
  </div>

  <h3 style="color: #ffcc00; margin-bottom: 1rem;">
    <sl-icon name="git"></sl-icon> V1 Master Branch
    <span style="font-size: 0.8em; color: #888; font-weight: normal;"> - Stable release branch</span>
  </h3>
  <div id="v1-master-commits" style="margin-bottom: 2rem;">
    <sl-spinner style="font-size: 2rem; --track-width: 4px;"></sl-spinner>
    <span style="margin-left: 1rem; color: #888;">Loading commits...</span>
  </div>
</div>
</v1>
<v2>
<div style="margin-bottom: 2rem;">
  <h3 style="color: #ffcc00; margin-bottom: 1rem;">
    <sl-icon name="git"></sl-icon> V2 Master Branch
    <span style="font-size: 0.8em; color: #888; font-weight: normal;"> - Primary development branch</span>
  </h3>
  <div id="v2-master-commits" style="margin-bottom: 2rem;">
    <sl-spinner style="font-size: 2rem; --track-width: 4px;"></sl-spinner>
    <span style="margin-left: 1rem; color: #888;">Loading commits...</span>
  </div>
</div>
</v2>
</versioned>


<style>
/* Additional styling for better appearance */
#edge-commits, #master-commits,
#v1-edge-commits, #v1-master-commits,
#v2-master-commits {
  min-height: 100px;
}
</style>
{:/nomarkdown}

For more information about getting the firmware, see the [Getting Smoothie](getting-smoothie) page.
