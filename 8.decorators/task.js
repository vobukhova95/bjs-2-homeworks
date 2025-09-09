"use strict";

//Задача № 1
function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		const hash = md5(args.join(","))
		let objectInCache = cache.find((item) => item.hash === hash);
		if (objectInCache) {
			console.log("Из кеша: " + objectInCache.result);
			return "Из кеша: " + objectInCache.result;
		}

		let result = func(...args);
		cache.push({
			hash,
			result
		});
		if (cache.length > 5) {
			cache.shift();
		}
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	}
	return wrapper;
}


//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutId = null;
	let isFirstCall = true;

	function wrapper(...args) {
		wrapper.allCount++;

		if (isFirstCall) {
			func(...args);
			wrapper.count++;
			isFirstCall = false;
			return;
		}

		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		timeoutId = setTimeout(() => {
			func(...args);
			wrapper.count++;
		}, delay);
	}

	wrapper.count = 0;
	wrapper.allCount = 0;

	return wrapper;
}