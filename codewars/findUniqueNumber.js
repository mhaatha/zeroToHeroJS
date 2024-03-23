// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

const findUnique = (arr) => {
	const objContainer = {};
	for (let i = 0; i < arr.length; i++) {
		if (objContainer[arr[i]] === undefined) {
			objContainer[arr[i]] = 1;
		} else {
			objContainer[arr[i]]++;
		}
	}
	const toArray = Object.entries(objContainer);
	const filtered = toArray.filter(([key, value]) => value === 1);
	return Number(filtered[0][0]);
};

console.log(findUnique([1, 1, 1, 1, 2, 1]));
