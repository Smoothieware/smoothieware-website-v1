---
permalink: /github
---


{% include developers/contributing-for-include.md %}

# How to submit a pull request to the Smoothieware Github project



{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  We use edge as our stable branch (master is no longer maintained). We do not have an unstable branch, so this is why we only allow very well tested PRs into edge.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  V2 development uses the master branch as the stable branch. We do not have an unstable branch, so this is why we only allow very well tested PRs into master.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



## Fork the original repository



{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

Create a Fork in your GitHub of [Smoothieware V1 repository](https://github.com/Smoothieware/Smoothieware.git) by clicking the Fork button.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Create a Fork in your GitHub of [Smoothieware V2 repository](https://github.com/Smoothieware/SmoothieV2.git) by clicking the Fork button.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



<a href="/images/github-1.png">
  <img src="/images/github-1.png" alt="Fork button"/>
</a>

You will now have a forked repository in your list of repositories.

<a href="/images/github-2.png">
  <img src="/images/github-2.png" alt="Forked repository"/>
</a>

## Clone the forked repository

You can get the URL for cloning that repository by clicking the copy URL button.

<a href="/images/github-3.png">
  <img src="/images/github-3.png" alt="Copy URL button"/>
</a>

On your local workstation clone the repository: `git clone <your GitHub fork of Smoothie>`

## Create a new branch for your bugfix / feature

Create a fix branch with a descriptive name: `git checkout -b fix/some-error`

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>NOTE only one feature/bug fix per branch please</strong>
</sl-alert>
{:/nomarkdown}

Edit the file to fix the error.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Please</strong>
  <ul>
    <li>Check the fix!!!</li>
    <li>Make sure your changes are coincide with our <a href="coding-standards.md">coding standards</a>! (use 4 spaces per indent and not tabs, etc.)</li>
  </ul>
</sl-alert>
{:/nomarkdown}

## Commit your changes and push it back on GitHub

Commit the changes: `git commit -am 'introduced lots of bugs'`

Push the branch to your GitHub: `git push origin fix/some-error`

## Submit your pull request

In GitHub, there should be a button that says pull request for that branch, click it.

<a href="/images/github-4.png">
  <img src="/images/github-4.png" alt="Pull request button"/>
</a>



{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

Select edge as the destination branch, add comments.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Select master as the destination branch, add comments.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



<a href="/images/github-5.png">
  <img src="/images/github-5.png" alt="Selecting branch"/>
</a>

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Please</strong>
  <ul>
    <li>Check the Files Changed Tab in GitHub to make sure only the files you want to change are listed.</li>
    <li>Check that only the lines you want changed are changed.</li>
  </ul>
</sl-alert>
{:/nomarkdown}

Finally, submit the pull request.

## Want to learn Git?

Try [this game](http://pcottle.github.io/learnGitBranching/).
