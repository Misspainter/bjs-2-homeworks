function compareArrays(arr1, arr2) {
	compare = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
	return compare;
}

function getUsersNamesInAgeRange(users, gender) {
	let filtetUser = users.filter(user => user.gender === gender);
	let userAge = filtetUser.map(user => user.age);
	let result = userAge.reduce((sumAge, ageValue) => {
		(sumAge + ageValue) / userAge.length;
	}, 0);

	if (!users.length) {
		return 0;
	} else if (gender !== "мужской" || gender !== "женский") {
		return 0;
	} else {
		return result;
	}
}
