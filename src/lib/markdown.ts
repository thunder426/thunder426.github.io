import { marked } from 'marked';

// For the short **bold** / `code` snippets in src/data. Only our own text goes through here.
export function inline(markdown: string): string {
  return marked.parseInline(markdown, { async: false });
}
