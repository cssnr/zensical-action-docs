---
icon: lucide/notebook-pen
---

[![Zensical Action](assets/images/logo.png){ align=right width=96 }](https://github.com/cssnr/zensical-action?tab=readme-ov-file#readme)

# Usage

Zensical Action [Inputs](#inputs), [Permissions](#permissions) and [Outputs](#outputs).

## Inputs

**All Inputs are Optional.**

By default, the workflow reference is checked out, built, uploaded, and deployed to Pages.

| Input              | Default&nbsp;Value | Description&nbsp;of&nbsp;the&nbsp;Input                                                          |
| :----------------- | :----------------: | :----------------------------------------------------------------------------------------------- |
| **version**        |      _Latest_      | Zensial Version                                                                                  |
| **python-version** |     _Default_      | Python Version (see [setup-uv](https://github.com/astral-sh/setup-uv?tab=readme-ov-file#inputs)) |
| **uv-version**     |      _Latest_      | UV Version (see [setup-uv](https://github.com/astral-sh/setup-uv?tab=readme-ov-file#inputs))     |
| **directory**      |        `.`         | Build Directory (relative to root)                                                               |
| **path**           |       `site`       | Site Path (relative to root)                                                                     |
| **checkout**       |       `true`       | Runs: [actions/checkout](https://github.com/actions/checkout)                                    |
| [upload](#upload)  |   `github-pages`   | Upload: [`github-pages`,`artifact`,`none`]                                                       |
| [name](#name)      |     `artifact`     | Artifact Name if [upload](#upload) is `artifact`                                                 |
| [deploy](#deploy)  |       `true`       | Deploy Pages (upload: `github-pages`)                                                            |
| **summary**        |       `true`       | Add Job Summary                                                                                  |

#### upload

Determines the type of artifact uploaded. For a normal artifact use `artifact`.

Default: `github-pages`

#### name

Artifact Name if [upload](#upload) is set to `artifact`.

Default: `artifact`

#### deploy

This runs [actions/deploy-pages](https://github.com/actions/deploy-pages). Set to `false` to skip this.  
Make sure you have the required [permissions](#permissions).

If you set [upload](#upload) to anything except `github-pages` this step will be skipped.

Default: `true`

## Permissions

If you are deploying to GitHub Pages you need these permissions.

```yaml
permissions:
  pages: write
  id-token: write
```

## Outputs

The following outputs are available.

| Output       | Description                                                                    |
| :----------- | :----------------------------------------------------------------------------- |
| **page_url** | Pages URL from [actions/deploy-pages](https://github.com/actions/deploy-pages) |
| **version**  | Zensical Version Used for Build                                                |
| **path**     | Site Path Used for Artifact                                                    |
| **name**     | Artifact Name if `upload` is `artifact`                                        |

The `path` will always be `site` or what you set for the input `path`.

The `name` will always be `artifact` or what you set for the input [name](#name).

```yaml
- name: 'Zensical Action'
  id: zensical
  uses: cssnr/zensical-action@v1

- name: 'Echo Output'
  run: |
    echo "page_url: ${{ steps.zensical.outputs.page_url }}"
    echo "version: ${{ steps.zensical.outputs.version }}"
    echo "path: ${{ steps.zensical.outputs.path }}"
    echo "name: ${{ steps.zensical.outputs.name }}"
```

See the [Examples](examples.md) for more...
