import * as sitemap from 'super-sitemap';
import type { RequestHandler } from '@sveltejs/kit';
import { localizeHref } from '$lib/paraglide/runtime';

export const prerender = true;

export const GET: RequestHandler = async () => {
  return await sitemap.response({
    origin: 'https://www.nukosuke.com',
    excludeRoutePatterns: ['^/career.*'],
    processPaths: (paths) => {
      return paths.map(({ path, ...rest }) => {
        const defaultLocPath = localizeHref(path, { locale: 'ja' });
        const alternates = ['en'].map((loc) => {
          const locPath = localizeHref(path, { locale: loc });
          return { lang: loc, path: trimTrailingSlash(locPath) };
        });

        return {
          ...rest,
          path: defaultLocPath,
          alternates,
        };
      });
    },
  });
};

function trimTrailingSlash(path) {
  return path.replace(/\/$/, '');
}
