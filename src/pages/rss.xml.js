import rss from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Astro tutorial blog',
    description: 'My journey learning Astro',
    site: 'https://astro-playground-blog.netlify.app',
    items: import.meta.glob('./**/*.md'),
    customData: `<language>en-us</language>`,
  });
}
