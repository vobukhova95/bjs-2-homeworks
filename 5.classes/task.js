"use strict";

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state *= 1.5;
	}

	set state(value) {
		if (value < 0) {
			this._state = 0;
		} else if (value > 100) {
			this._state = 100;
		} else {
			this._state = value;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}


class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		let result = this.books.find(book => book[type] === value);
		if (!result) {
			return null;
		}
		return result;
	}

	giveBookByName(bookName) {
		let result = this.findBookBy("name", bookName);
		if (!result) {
			return null;
		}
		return this.books.splice(this.books.indexOf(result), 1)[0];
	}
}
class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (mark >= 2 && mark <= 5) {
			if (!this.marks[subject]) {
				this.marks[subject] = [];
			}
			this.marks[subject].push(mark);
		}
	}


	getAverageBySubject(subject) {
		if (!this.marks[subject]) {
			return 0;
		}
		let sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
		return sum / this.marks[subject].length;
	}

	getAverage() {
		let subjects = Object.keys(this.marks);
		if (subjects.length === 0) {
			return 0;
		}
		let sum = subjects.reduce(
			(acc, subject) => acc + this.getAverageBySubject(subject),
			0
		);
		return sum / subjects.length;
	}
}