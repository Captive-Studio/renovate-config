<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=# Captive Renovate configuration _(${name})_) -->
# Captive Renovate configuration _(@captive/renovate-config)_
<!-- AUTO-GENERATED-CONTENT:END -->

[![License][license-image]][license-url]

<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=> ${description}&unknownTxt= ) -->
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
  * When project is following semantic-versionning and well maintained
* 🚄 Focus on productivity
  * The configuration should not overburden the team by creating a great amount of PR, it should be a safe way to automate and save time
* ✓ Main Supported Technologies
  * Ruby
  * NodeJS
  * Docker
* 🗓️ Scheduled to run outside working hours (night and weekend)

## Usage

### PHASE 1: Onboarding and trial (~ 1 day to 1 week)

1. Extend Shared configuration in your project

    `renovate.json`

    **Application** (dashboard, static website generator):

    ```jsonc
    // renovate.json
    {
        "extends": [
            // Dependencies will be pinned
            "github>Captive-Studio/renovate-config:application"
        ]
    }
    ```

    **Library** :

    ```jsonc
    // renovate.json
    {
        "extends": [
            // Dependencies will not be pinned
            "github>Captive-Studio/renovate-config:library"
        ]
    }
    ```

2. Ensure `CODEOWNERS` is setup ( [example](./CODEOWNERS) )
    _⚠️ If not set, pull request will not be automatically assigned. The consequence is often that nobody cares about maintenance_

    ✓ Prefer email (`xxx.xxx@captive.fr`) or team reference `@TeamName` for owners

3. Limit Pull request maximum concurrency (Optional)

    _⚠️ only for old/not maintained projects_

    ```diff
    {
    "extends": [
        "github>Captive-Studio/renovate-config:...",
    -
    +  "github>Captive-Studio/renovate-config:temp-limited"
    ],
    
    ```

    _This configuration will limit arbitrarily concurrent PR to 6 (to avoid excess of PR)_

4. After each Pull Request creation

    1. Add checks / tests / end to end tests that would enable `automerge` (if possible)
    2. For the concerned package, enable `automerge` into the project -OR- into this shared configuration
    3. Do not merge manually, check that automerge is working

### PHASE 2: Regular maintenance

Ensure that Renovate will update every possible packages.

```diff
{
  "extends": [
    "github>Captive-Studio/renovate-config:...",
-  "github>Captive-Studio/renovate-config:temp-limited"
+
  ],

}
```

> [Read the documentation](https://docs.renovatebot.com/configuration-options/) to improve your configuration.

## License
<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=[${license}][license-url] © ${author}) -->
[MIT][license-url] © Captive Studio
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- VARIABLES -->

<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=[package-version-svg]: https://img.shields.io/npm/v/${name}.svg?style=flat-square) -->
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=[package-url]: https://www.npmjs.com/package/${name}) -->
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=[license-image]: https://img.shields.io/badge/license-${license}-green.svg?style=flat-square) -->
[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
[license-url]: ../../LICENSE
