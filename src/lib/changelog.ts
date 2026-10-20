import { marked } from 'marked';

export interface Release {
  version: string;
  html: string;
}

// Copies of each addon's CHANGELOG.md, made by `npm run sync`.
const files = import.meta.glob<string>('../content/changelogs/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

// Every "## <version>" section of an addon's changelog, newest first.
export function releases(slug: string): Release[] {
  const text = files[`../content/changelogs/${slug}.md`];
  if (!text) throw new Error(`No changelog for ${slug}. Run npm run sync.`);
  return text
    .split(/^## /m)
    .slice(1)
    .map((section) => {
      const [heading, ...body] = section.split('\n');
      return {
        version: heading.trim(),
        html: marked.parse(body.join('\n'), { async: false }),
      };
    });
}

export function latestVersion(slug: string): string {
  return releases(slug)[0].version;
}
