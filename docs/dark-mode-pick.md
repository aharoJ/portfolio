# Angel's dark-mode pick (verbatim, 2026-10-18)
> "I got it for dark mode but not for light mode since I have favoritism for dark mode so light mode gets a touch up whenevers in the future"

```
Article style · round 3
palette: Kanagawa / dark
tree: terminal · font: ui
comments: wide · frame: full
page: #12120f
block: #16161d
glyphs: #9cabca
names: #c4b28a
private: #d27e99
public: #7aa89f
command: #c34043
comments: #625e5a
roots: #a3a39a
headings: #7aa89f
body: #5f5f6a
links: #7aa89f
url: http://127.0.0.1:4313/#v=1&palette=kanagawa&mode=dark&tree=terminal&font=ui&comments=wide&frame=full&element=headings&d.page=12120f&d.block=16161d&d.glyphs=9cabca&d.names=c4b28a&d.private=d27e99&d.public=7aa89f&d.command=c34043&d.comments=625e5a&d.roots=a3a39a&d.headings=7aa89f&d.body=5f5f6a&d.links=7aa89f
```
Light mode: not picked; Angel will touch it up later.

## Where it's applied

The pick is applied on `demo/first-article` in commit `ef2ae8e306e3fba6425d60d241a48ae49cf9f66c`. The branch tip `93f156633aba6ab1dd9b127076b16cc87f716d24` has the same tree.

- `frontend/src/styles/global.css` holds the dark page background, body/muted text, headings and links.
- The `<style>` in `frontend/src/content/articles/how-to-navigate-my-dotfiles.md` holds block, glyphs, names (inherited from the block), private, public, command, comments and roots/title-bar colors.

The recorded low-contrast ratios were deliberately left as Angel picked them:

| Role | Text | Background | Contrast |
| --- | --- | --- | --- |
| Commands | `#c34043` | `#16161d` | 3.544:1 |
| Comments | `#625e5a` | `#16161d` | 2.801:1 |
| Body/muted text | `#5f5f6a` | `#12120f` | 2.977:1 |

Source: [RESULT-R4.md](/Users/aharoj/desk/tmp/portfolio/first-article-demo/RESULT-R4.md), “Exact colors and measured contrast.”
