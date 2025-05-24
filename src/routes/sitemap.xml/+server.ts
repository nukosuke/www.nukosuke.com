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
          return { lang: loc, path: localizeHref(path, { locale: loc }) };
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
