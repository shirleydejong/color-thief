import quantize from 'quantize/dist/index.mjs';
import core from './core.js';
import { handler as getPixels } from 'get-pixels-ts';

function getColor(img, quality) {
	return new Promise((resolve, reject) => {
		getPalette(img, 5, quality)
			.then(palette => {
				resolve(palette[0]);
			})
			.catch(err => {
				reject(err);
			})
	});

}

function getPalette(img, colorCount = 10, quality = 10) {
	const options = core.validateOptions({
		colorCount,
		quality
	});

	return new Promise((resolve, reject) => {
		getPixels(img)
			.then(imgData => {
				const pixelCount = imgData.shape[0] * imgData.shape[1];
				const pixelArray = core.createPixelArray(imgData.data, pixelCount, options.quality);

				const cmap = quantize(pixelArray, options.colorCount);
				const palette = cmap? cmap.palette() : null;

				resolve(palette);
			})
			.catch(err => {
				reject(err);
			})
	});
}

export {
	getPalette,
	getColor
};

