import { getPalette, getColor } from "../src/color-thief-node.js";
import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

const img = './examples/img/image-1.jpg';

	describe('getColor()', function() {
		it('returns valid color', function() {
			return expect(getColor(img)).to.eventually.have.lengthOf(3);
		});
	});

	describe('getPalette()', function() {
		it('returns 5 colors when colorCount set to 5', function() {
			return expect(getPalette(img, 5)).to.eventually.have.lengthOf(5);
		});

		it('returns 9 colors when colorCount set to 9', function() {
			return expect(getPalette(img, 9)).to.eventually.have.lengthOf(9);
		});
	});
