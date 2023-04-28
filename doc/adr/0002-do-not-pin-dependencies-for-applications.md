# 2. Do not pin dependencies for applications

Date: 2023-04-28

## Status

Accepted

## Context

This renovate-config was forked from a previous version used by Julien Polo at his former work at Koober.
The provided configuration are pinning versions :

`application.json`

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "description": "Default configuration for an application",
  "extends": [
    "github>Captive-Studio/renovate-config:base",
    ":pinAllExceptPeerDependencies"
  ]
}

```

For example, `:pinAllExceptPeerDependencies` will always transform "~> 1.0.0" to "1.0.0"
This seems to be a good practice to be explicit, but it has not always de the consensus (among all developers, and among Captive).

## Decision

It has been decided that constraints are necessary

```ruby
# NOT OK :
gem "my-gem" # Dangerous and cannot be processed by Renovate

# OK
gem "my-gem" "1.0.0" # Exact constraint

# OK
gem "my-gem" "~> 1.0.0" # Range constraint
```

## Consequences

What becomes easier or more difficult to do and any risks introduced by the change that will need to be mitigated.
