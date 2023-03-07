const fs = require('fs');
const utils = require('../src/utils');

const testPath = '../assets/test/test.json';

const couponsMock = {
	coupons: [{ name: 'zara', discount: 50 }],
};

describe('Get Coupons data', () => {
	test('read a file', () => {
		expect(utils.getCouponsData('assets/test/test.json')).toEqual(
			couponsMock.coupons
		);
	});
});
