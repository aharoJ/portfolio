# Angel's light-mode pick (verbatim, 2026-10-19)
> "done I got the light mode variant"

```
Article style · light
palette: Kanagawa / light
tree: terminal · font: ui
comments: wide · frame: full
page: #dcd7ba
block: #0d0c0c
glyphs: #8992a7
names: #c4b28a
private: #b35b79
public: #7aa89f
command: #9bf8d0
comments: #727169
roots: #d7e3d8
headings: #0d0c0c
body: #181820
links: #181820
url: http://127.0.0.1:4313/#v=1&palette=kanagawa&mode=light&tree=terminal&font=ui&comments=wide&frame=full&element=links&l.page=dcd7ba&l.block=0d0c0c&l.glyphs=8992a7&l.names=c4b28a&l.private=b35b79&l.public=7aa89f&l.command=9bf8d0&l.comments=727169&l.roots=d7e3d8&l.headings=0d0c0c&l.body=181820&l.links=181820&d.page=12120f&d.block=16161d&d.glyphs=9cabca&d.names=c4b28a&d.private=d27e99&d.public=7aa89f&d.command=c34043&d.comments=625e5a&d.roots=a3a39a&d.headings=7aa89f&d.body=5f5f6a&d.links=7aa89f
```
Picked in the hosted playground https://claude.ai/artifact/PEn1embJU3VR7WhcpShXru (source ~/desk/tmp/portfolio/first-article-demo/playground-light/index.html). The dark (d.*) values in the url equal docs/dark-mode-pick.md.

## Where it's applied

The pick is applied on `demo/first-article` in commit `4d8208b57772516767071c74875512039e8c96ec`.

- `frontend/src/styles/global.css` holds the light page background, body/muted text, headings, links and footer rule.
- The `<style>` in `frontend/src/content/articles/how-to-navigate-my-dotfiles.md` holds block, glyphs, names (inherited from the block), private, public, command, comments and roots/title-bar colors. The card border and title-bar rule use the playground's Kanagawa light border, `#d5cea3`.
- The existing dark color blocks are unchanged.

Contrast calculated from the exact selected hex values; every color is retained as picked. Private text and comments are below 4.5:1.

| Role | Text | Background | Contrast |
| --- | --- | --- | --- |
| Glyphs | `#8992a7` | `#0d0c0c` | 6.263:1 |
| Names | `#c4b28a` | `#0d0c0c` | 9.379:1 |
| Private | `#b35b79` | `#0d0c0c` | 4.362:1 |
| Public | `#7aa89f` | `#0d0c0c` | 7.376:1 |
| Commands | `#9bf8d0` | `#0d0c0c` | 15.564:1 |
| Comments | `#727169` | `#0d0c0c` | 3.983:1 |
| Roots/title bars | `#d7e3d8` | `#0d0c0c` | 14.761:1 |
| Headings | `#0d0c0c` | `#dcd7ba` | 13.463:1 |
| Body/muted text | `#181820` | `#dcd7ba` | 12.158:1 |
| Links | `#181820` | `#dcd7ba` | 12.158:1 |
