import { deLocalizeUrl } from './i18n/dist/runtime';

export const reroute = (request) => {
	return deLocalizeUrl(request.url).pathname;
};