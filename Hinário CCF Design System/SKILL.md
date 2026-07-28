---
name: hinario-ccf-design
description: Use this skill to generate well-branded interfaces and assets for Hinário CCF (the hymnal app for Comunidade Cristã em Fortaleza), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick orientation:
- `styles.css` is the single CSS entry point (design tokens + fonts). Link it and use the custom properties — brand orange is `--l1`/`--brand`, neutrals are `--c1`…`--c9`, fonts are `--font-display` (Ysabeau Office) and `--font-body` (Figtree).
- Components live in `components/` (React, styled via the tokens); the interactive app recreation is in `ui_kits/hinario/`.
- Brand bitmaps are in `assets/brand/`; the SVG icon set is in `assets/icons/` (`Icon` component + `Icon.d.ts` name list).
- Everything is Brazilian Portuguese, one accent color, no emoji, no gradients — keep it calm and legible.
