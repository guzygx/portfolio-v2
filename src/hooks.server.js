import { i18n } from '$lib/i18n';
const handleParaglide = i18n.handle();
export const handle = handleParaglide;

// Fix some content-type error during initial hydratation
export function handle({ event, resolve }) {
	return resolve(event, {
		// you can also seralize other headers here if needed
		filterSerializedResponseHeaders: (name, value) => name === 'content-type'
	});
}