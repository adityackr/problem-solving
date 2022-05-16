/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = function (s) {
	const sObj = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let output = 0;

	for (let i = 0; i < s.length; i++) {
		const cur = sObj[s[i]];
		const next = sObj[s[i + 1]];

		if (cur < next) {
			output += next - cur;
			i++;
		} else {
			output += cur;
		}
	}
	return output;
};

console.log(romanToInt('IX'));
