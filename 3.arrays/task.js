function compareArrays(arr1, arr2) {
	compare = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
	return compare;
}

function getUsersNamesInAgeRange(users, gender) {
	let userAge = users.filter(users => users.gender === gender).map(users => users.age);
	

	if (!users.length) {
		return 0;
	} else if (gender !== "мужской" && gender !== "женский") {
		return 0;
	} else {
		return (userAge.reduce((sumAge, ageValue) => sumAge + ageValue, 0)) / userAge.length;
	}
}
