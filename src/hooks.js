import { deLocalizeUrl } from '$lib/i18n/dist/runtime';

export const reroute = (request) => {
	// console.log(request.url)
	// return request.url.pathname;
	return deLocalizeUrl(request.url).pathname;
};



// import { paraglideMiddleware } from '$lib/i18n/dist/server';

// const paraglideHandle = ({ event, resolve }) => {
// 	console.log('azi')
// 	return paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
// 		event.request = localizedRequest;
// 		return resolve(event, {
// 			transformPageChunk: ({ html }) => {
// 				return html.replace('%lang%', locale);
// 			}
// 		});
// 	});
// }
// export const handle = paraglideHandle;