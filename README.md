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

## Usage

### Renovate Configuration

`renovate.json`

**JavaScript application** (dashboard, static website generator):

```json
{
  "extends": [
    "github>Captive-Studio/renovate-config:application"
  ]
}
```

**JavaScript library** :

```json
{
  "extends": [
    "github>Captive-Studio/renovate-config:library"
  ]
}
```

> [Read the documentation](https://docs.renovatebot.com/configuration-options/) to improve your configuration.

## License
<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=[${license}][license-url] © ${author}) -->
[MIT][license-url] © Captive Studio
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- VARIABLES -->

<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=[package-version-svg]: https://img.shields.io/npm/v/${name}.svg?style=flat-square) -->
[package-version-svg]: https://img.shields.io/npm/v/@captive/renovate-config.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=[package-url]: https://www.npmjs.com/package/${name}) -->
[package-url]: https://www.npmjs.com/package/@captive/renovate-config
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=[license-image]: https://img.shields.io/badge/license-${license}-green.svg?style=flat-square) -->
[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
[license-url]: ../../LICENSE
