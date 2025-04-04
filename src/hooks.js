import { deLocalizeUrl } from '$lib/i18n/dist/runtime';

export const reroute = (request) => {
	return deLocalizeUrl(request.url).pathname;
};
