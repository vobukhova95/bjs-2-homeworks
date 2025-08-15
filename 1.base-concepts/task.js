"use strict";

function solveEquation(a, b, c) {
	const d = b ** 2 - 4 * a * c;

	if (d < 0) {
		return [];
	}

	if (d === 0) {
		return [-b / (2 * a)];
	}

	const sqrtD = Math.sqrt(d);
	const root1 = (-b + sqrtD) / (2 * a);
	const root2 = (-b - sqrtD) / (2 * a);
	return [root1, root2];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = Number(percent);
	contribution = Number(contribution);
	amount = Number(amount);
	countMonths = Number(countMonths);

	if (
		isNaN(percent) ||
		isNaN(contribution) ||
		isNaN(amount) ||
		isNaN(countMonths)
	) {
		return false;
	}

	const monthlyPercentage = (percent / 100) / 12;
	const creditAmount = amount - contribution;

	const monthlyPayment = creditAmount *
		(monthlyPercentage + (monthlyPercentage / (((1 + monthlyPercentage) ** countMonths) - 1)));

	return Number((monthlyPayment * countMonths).toFixed(2));
}