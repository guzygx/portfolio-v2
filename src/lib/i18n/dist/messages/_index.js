// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from "../runtime.js"
import * as en from "./en.js"
import * as fr from "./fr.js"
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "fr" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const about = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.about(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("about", locale)
	if (locale === "en") return en.about(inputs)
	if (locale === "fr") return fr.about(inputs)
	return "about"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "fr" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const echosystem = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.echosystem(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("echosystem", locale)
	if (locale === "en") return en.echosystem(inputs)
	if (locale === "fr") return fr.echosystem(inputs)
	return "echosystem"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "fr" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ghostsong = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ghostsong(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ghostsong", locale)
	if (locale === "en") return en.ghostsong(inputs)
	if (locale === "fr") return fr.ghostsong(inputs)
	return "ghostsong"
};