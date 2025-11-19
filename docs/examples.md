---
icon: simple/githubactions
---

[![Zensical Action](assets/images/logo.png){ align=right width=96 }](https://github.com/cssnr/zensical-action?tab=readme-ov-file#readme)

# Examples

Zensical Action example [Workflows](#workflows) and [Repositories](#repositories).

## Workflows

💡 _Click on an example heading to expand or collapse the example._

<details open><summary>Build and Deploy to GitHub Pages</summary>

```yaml
name: 'Docs'

on:
  workflow_dispatch:
  push:
    branches: [master]
    paths:
      - '.github/workflows/docs.yaml'
      - 'zensical.toml'
      - 'docs/**'

jobs:
  docs:
    name: 'Docs'
    runs-on: ubuntu-latest
    timeout-minutes: 5

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

</details>
<details><summary>Build and Deploy a Normal Artifact</summary>

```yaml
name: 'Docs'

on:
  workflow_dispatch:
  push:
    branches: [master]
    paths:
      - '.github/workflows/docs.yaml'
      - 'zensical.toml'
      - 'docs/**'

jobs:
  build:
    name: 'Build'
    runs-on: ubuntu-latest
    timeout-minutes: 5
    steps:
      - name: 'Zensical Action'
        uses: cssnr/zensical-action@v1
        with:
          upload: 'artifact'

  deploy:
    name: 'Deploy'
    uses: cssnr/workflows/.github/workflows/deploy-static.yaml@master
    needs: build
    with:
      name: github-pages
      url: https://dev-static.cssnr.com/
      robots: true
    secrets:
      host: ${{ secrets.DEV_DEPLOY_HOST }}
      port: ${{ secrets.DEV_DEPLOY_PORT }}
      user: ${{ secrets.DEV_DEPLOY_USER }}
      pass: ${{ secrets.DEV_DEPLOY_PASS }}
      webhook: ${{ secrets.DISCORD_WEBHOOK }}
    permissions:
      contents: read
```

</details>
<details><summary>Only Build the Site</summary>

```yaml
name: 'Docs'

on:
  workflow_dispatch:
  push:
    branches: [master]
    paths:
      - '.github/workflows/docs.yaml'
      - 'zensical.toml'
      - 'docs/**'

jobs:
  docs:
    name: 'Docs'
    runs-on: ubuntu-latest
    timeout-minutes: 5

    steps:
      - name: 'Zensical Action'
        id: zensical
        uses: cssnr/zensical-action@v1
        with:
          upload: false

      - name: 'Build Tree'
        run: |
          tree "${{ steps.zensical.outputs.path }}"
```

</details>

For more examples, you can check out other projects using this action:  
https://github.com/cssnr/zensical-action/network/dependents

## Repositories

Example repositories using this action to deploy to GitHub Pages.

| Repository&nbsp;Link                                                        |                                               Pages                                                |                                             Preview                                              | Website&nbsp;Link                                               |
| :-------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: | :-------------------------------------------------------------- |
| [cssnr/zensical-action-docs](https://github.com/cssnr/zensical-action-docs) | [docs.yaml](https://github.com/cssnr/zensical-action-docs/blob/master/.github/workflows/docs.yaml) | [dev.yaml](https://github.com/cssnr/zensical-action-docs/blob/master/.github/workflows/dev.yaml) | [zensical-action.cssnr.com](https://zensical-action.cssnr.com/) |
| [cssnr/actions-tools](https://github.com/cssnr/actions-tools)               |    [docs.yaml](https://github.com/cssnr/actions-tools/blob/master/.github/workflows/docs.yaml)     |    [dev.yaml](https://github.com/cssnr/actions-tools/blob/master/.github/workflows/dev.yaml)     | [actions-tools.cssnr.com](https://actions-tools.cssnr.com/)     |
