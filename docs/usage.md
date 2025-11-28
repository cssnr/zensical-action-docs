---
icon: lucide/notebook-pen
---

# :lucide-notebook-pen: Usage

[![Zensical Action](assets/images/logo.png){ align=right width=96 }](https://github.com/cssnr/zensical-action?tab=readme-ov-file#readme)

With no inputs the workflow reference is checked out, built, uploaded, and deployed to Pages.

You can disable or customize any of these steps with the [Inputs](#inputs).
Deploying to GitHub Pages requires specific [Permissions](#permissions).
The [Outputs](#outputs) include the `page_url` and more.

## Inputs

**All Inputs are Optional.**

| Input                   | Default&nbsp;Value | Description&nbsp;of&nbsp;the&nbsp;Input                                                          |
| :---------------------- | :----------------: | :----------------------------------------------------------------------------------------------- |
| **version**             |      _Latest_      | Zensical Version                                                                                 |
| **python-version**      |     _Default_      | Python Version (see [setup-uv](https://github.com/astral-sh/setup-uv?tab=readme-ov-file#inputs)) |
| **uv-version**          |      _Latest_      | UV Version (see [setup-uv](https://github.com/astral-sh/setup-uv?tab=readme-ov-file#inputs))     |
| **directory**           |        `.`         | Build Directory (relative to root)                                                               |
| **path**                |       `site`       | Site Path (relative to root)                                                                     |
| **checkout**            |       `true`       | Runs: [actions/checkout](https://github.com/actions/checkout)                                    |
| [upload](#upload)       |   `github-pages`   | Upload: [`github-pages`,`artifact`,`false`]                                                      |
| [name](#name)           |     `artifact`     | Artifact Name if [upload](#upload) is `artifact`                                                 |
| [deploy](#deploy)       |       `true`       | Deploy to Pages (see [deploy](#deploy))                                                          |
| [prepare](#preparepost) |         -          | Prepare script (before build)                                                                    |
| [post](#preparepost)    |         -          | Post script (after build)                                                                        |
| **summary**             |       `true`       | Add Job Summary to Workflow                                                                      |

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

#### prepare/post

Prepare runs after install but before build. Post runs after the build.

The paths are relative to the specified `directory`.

Additional Environment Variables available in these scripts.

| Variable           | Description           |
| ------------------ | --------------------- |
| `ZENSICAL_VERSION` | Zensical Version Used |

## Permissions

If you are deploying to GitHub Pages you need these permissions.

```yaml
permissions:
  pages: write
  id-token: write
```

Permissions reference for [Workflows](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/controlling-permissions-for-github_token), [Actions](https://docs.github.com/en/actions/security-for-github-actions/security-guides/automatic-token-authentication), and [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Outputs

The following outputs are available.

| Output       | Description                                                                    |
| :----------- | :----------------------------------------------------------------------------- |
| **page_url** | Pages URL from [actions/deploy-pages](https://github.com/actions/deploy-pages) |
| **version**  | Zensical Version Used for Build                                                |
| **path**     | Site Path Used for Artifact                                                    |
| **name**     | Artifact [name](#name) from [upload](#upload) step                             |

The `path` will always be `site` or what you set for the input `path`.

Example Outputs.

```yaml
- name: 'Zensical Action'
  id: zensical
  uses: cssnr/zensical-action@v1

- name: 'Echo Output'
  run: |
    echo "GitHub page_url: ${{ steps.zensical.outputs.page_url }}"
    echo "Zensical version: ${{ steps.zensical.outputs.version }}"
    echo "Site path: ${{ steps.zensical.outputs.path }}"
    echo "Artifact name: ${{ steps.zensical.outputs.name }}"
```

See the [Examples](examples.md) for more...

&nbsp;

!!! question

    If you need **help** getting started or run into any issues, [support](support.md) is available!
