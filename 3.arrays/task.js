"use strict";

function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
	const filtered = users.filter(user => user.gender === gender);
	if (filtered.length === 0) {
		return 0;
	}
	const totalAge = filtered.reduce((acc, user) => acc + user.age, 0);
	return totalAge / filtered.length;
}