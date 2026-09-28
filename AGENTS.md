<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Centralize all business copy, contact placeholders, and catalogue entries in `src/data/site.ts` so non-technical content updates remain isolated.
- Keep shared corporate navigation and footer in the root layout, while each major content area remains a distinct route for discoverability.
