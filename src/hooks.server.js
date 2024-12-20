import { sequence } from '@sveltejs/kit/hooks';
import { i18n } from '$lib/i18n';
const handleParaglide = i18n.handle();

// Fix some content-type error during initial hydratation
const contentTypeResolver = async ({ event, resolve }) => {
  return resolve(event, {
    // you can also seralize other headers here if needed
    filterSerializedResponseHeaders: (name, value) => name === 'content-type'
  });
}

export const handle = sequence(contentTypeResolver, handleParaglide);