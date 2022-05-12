function hourglassSum(arr) {
	let sum = 0;
	const sumArr = [];

	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			sum = 0;
			sum += arr[i][j];
			sum += arr[i][j + 1];
			sum += arr[i][j + 2];
			sum += arr[i + 1][j + 1];
			sum += arr[i + 2][j];
			sum += arr[i + 2][j + 1];
			sum += arr[i + 2][j + 2];
			sumArr.push(sum);
		}
	}
	return sumArr.sort((a, b) => b - a)[0];
}

const arr = [
	[-9, -9, -9, 1, 1, 1],
	[0, -9, 0, 4, 3, 2],
	[-9, -9, -9, 1, 2, 3],
	[0, 0, 8, 6, 6, 0],
	[0, 0, 0, -2, 0, 0],
	[0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(arr));
