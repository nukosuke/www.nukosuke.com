// file initialized by the Paraglide-SvelteKit CLI - Feel free to edit it
import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server';

const paraglideHandle: Handle = ({ event, resolve }) => {
  return paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
    event.request = localizedRequest;
    return resolve(event, {
      transformPageChunk: ({ html }) => {
        return html.replace('%lang%', locale);
      },
    });
  });
};

// add your own hooks as part of the sequence here
export const handle: Handle = sequence(paraglideHandle);
