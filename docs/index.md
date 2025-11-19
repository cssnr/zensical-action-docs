---
icon: lucide/rocket
---

[![Zensical Action](assets/images/logo.png){ align=right width=96 }](https://github.com/cssnr/zensical-action?tab=readme-ov-file#readme)

[![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/zensical-action?sort=semver&filter=!v*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/zensical-action/tags)
[![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/zensical-action?sort=semver&filter=!v*.*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/zensical-action/releases)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/zensical-action?logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/zensical-action/releases/latest)
[![Action Run Using](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fraw.githubusercontent.com%2Fcssnr%2Fzensical-action%2Frefs%2Fheads%2Fmaster%2Faction.yml&query=%24.runs.using&logo=githubactions&logoColor=white&label=runs)](https://github.com/cssnr/zensical-action/blob/master/action.yml)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/cssnr/zensical-action?logo=bookstack&logoColor=white&label=repo%20size)](https://github.com/cssnr/zensical-action?tab=readme-ov-file#readme)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/zensical-action?logo=github&label=updated)](https://github.com/cssnr/zensical-action/pulse)
[![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/cssnr/zensical-action?logo=github)](https://github.com/cssnr/zensical-action/issues)
[![GitHub Discussions](https://img.shields.io/github/discussions/cssnr/zensical-action?logo=github)](https://github.com/cssnr/zensical-action/discussions)
[![GitHub Forks](https://img.shields.io/github/forks/cssnr/zensical-action?style=flat&logo=github)](https://github.com/cssnr/zensical-action/forks)
[![GitHub Repo Stars](https://img.shields.io/github/stars/cssnr/zensical-action?style=flat&logo=github)](https://github.com/cssnr/zensical-action/stargazers)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&label=org%20stars)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-72a5f2?logo=kofi&label=support)](https://ko-fi.com/cssnr)

# :lucide-rocket: Get Started

Zensical GitHub Action to checkout, build, upload, and deploy [Zensical Docs](https://github.com/zensical/zensical) to GitHub Pages.

- https://github.com/cssnr/zensical-action
- https://github.com/marketplace/actions/zensical-action

## Features

- Build Docs
- Upload Artifact
- Deploy to Pages

You can customize or disable each step with the [Inputs](usage.md#inputs).

## Workflow

Add the step to an existing workflow or create a new one.

If creating a [new workflow](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows#about-workflows), place it in the `.github/workflows` directory.

```yaml
name: 'Docs'

on:
  workflow_dispatch:
  push:
    branches: ['master']

jobs:
  docs:
    name: 'Docs'
    runs-on: ubuntu-latest

    permissions:
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.zensical.outputs.page_url }}

    steps:
      - name: 'Zensical Action'
        id: zensical
        uses: cssnr/zensical-action@v1
```

See the [Usage](usage.md) for more options or check out additional [Examples](examples.md).
