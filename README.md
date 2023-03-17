<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=# Captive Renovate configuration _(${name})_) -->
# Captive Renovate configuration _(@captive/renovate-config)_
<!-- AUTO-GENERATED-CONTENT:END -->

[![License][license-image]][license-url]

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=> ${description}&unknownTxt= ) -->
> Renovate configuration presets
<!-- AUTO-GENERATED-CONTENT:END -->

## Getting Started - App Installation

* [for GitHub](https://docs.renovatebot.com/install-github-app/)
* [for GitLab](https://docs.renovatebot.com/install-gitlab-app/)
  * go to [Renovate Dashboard](https://app.renovatebot.com/dashboard) to add your project,
  * accept Renovate Bot PR

## Features

* ✅ Automerge only when safe
  * When dev dependency that is self validated by CI
  * When project is following semantic-versioning and well maintained
* 🚄 Focus on productivity
  * The configuration should not overburden the team by creating a great amount of PR, it should be a safe way to automate and save time
* ✓ Main Supported Technologies
  * Ruby
  * NodeJS
  * Docker
* 🗓️ Scheduled to run outside working hours (night and weekend)

## Usage

### Requirements

* ✓ Renovate bot instance is already configured and has the permissions to access the repository

### PHASE 1: Configuration

_⏱️ ~ 5min - 1 day, depending on the type of Renovate schedule_

> 🎯 Intention
>
> * Configure Renovate bot to be able Pull Request on a given repository
> * Limit Renovate bot to not create more Pull Request that the team can handle
> * Schedule in the `renovate.json` so that it does not interfere with daily work

1. Extend Shared configuration in your project

    **Application**

    A repository that will never be used as dependency.

    ```jsonc
    // renovate.json
    {
        "$schema": "https://docs.renovatebot.com/renovate-schema.json",
        "extends": [
            // Dependencies will be pinned
            "github>Captive-Studio/renovate-config:application"
        ]
    }
    ```

    **Library** :

    A repository that will be reused by others.

    ```jsonc
    // renovate.json
    {
        "$schema": "https://docs.renovatebot.com/renovate-schema.json",
        "extends": [
            // Dependencies will not be pinned
            "github>Captive-Studio/renovate-config:library"
        ]
    }
    ```

2. Ensure `CODEOWNERS` is setup ( [example](./CODEOWNERS) )

    _⚠️ If not set, pull request will not be automatically assigned. The consequence is often that nobody cares about maintenance_

    ✓ Use person (`@first_name.last_name`) or team reference `@TeamName` for owners

3. Limit Pull request maximum concurrency (Optional)

    _⚠️ only for old/not maintained projects_

    ```diff
    {
    "extends": [
        "github>Captive-Studio/renovate-config:...",
    -
    +  "github>Captive-Studio/renovate-config:rate-limited"
    ],
    
    ```

    _This configuration will limit arbitrarily concurrent PR to 6 (to avoid excess of PR)_

4. Check for "Dependency Dashboard" issue in Github/Gitlab (after few minutes)

5. 🎉 Renovate bot will create pull requests on the next schedule !

### PHASE 2: Automation and Noise reduction

_⏱️ ~ 1 day to 1 week_

> 🎯 Intention
>
> * Automate as much as possible (`automerge: true`)
> * Ownership : do not let unmerged PR stay more than 24 hours in the repository
> * Safety first, do not automate if there is a risk of critical regression

After each manual Pull Request creation, improve automation :

1. Add checks / tests / end to end tests that would enable `automerge` (if possible)
2. Enable `automerge` into the project -OR- into this shared configuration, for the PR package
3. Trigger a PR rebase from renovate, and check that Automerge is enabled in the updated PR description

### PHASE 3: Regular maintenance

> 🎯 Intention
>
> * Keep the number of outdated packages to 0 most of the time

Requirements :

* ✓ The stock of outdated packages was reduced by phase 2 and is low
* ✓ The team can handle all PR if they were created

Ensure that Renovate will update every possible packages, as soon as possible.

```diff
{
  "extends": [
    "github>Captive-Studio/renovate-config:...",
-  "github>Captive-Studio/renovate-config:rate-limited"
+
  ],

}
```

> [Read the documentation](https://docs.renovatebot.com/configuration-options/) to improve your configuration.

## License
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[${license}][license-url] © ${author}) -->
[MIT][license-url] © Captive Studio
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- VARIABLES -->

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-version-svg]: https://img.shields.io/npm/v/${name}.svg?style=flat-square) -->
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-url]: https://www.npmjs.com/package/${name}) -->
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[license-image]: https://img.shields.io/badge/license-${license}-green.svg?style=flat-square) -->
[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
[license-url]: ../../LICENSE
