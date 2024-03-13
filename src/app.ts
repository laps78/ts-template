interface Book {
    name: string;
    isbn: string;
}

const book: Book = {
    name: "book name",
    isbn: "2132139823092"
};

let max: [number,number];
max = [1,2];

enum Season { Winter, Spring, Summer, Autumn };
let current: Season = Season.Summer;

let person = {name:"tom", age: 23}

interface PrintedItem {
    name: string;
    isbn: string;
    pagesCount: number;
    hasHardCover: boolean;
}

class simpleBook implements PrintedItem {
    name: string;
    isbn: string;
    pagesCount: number;
    hasHardCover: true;
}

class ComicsBook implements PrintedItem {
    name: string;
    isbn: string;
    pagesCount: number;
    hasHardCover: false;
}

type ColorType = string | number;
let primaryColor: ColorType = "green";
let secondaryColor: ColorType = 0x8e8e8e;

let data: any = "Ivan";
const strLength: number =(<string>data).toString().length;

interface FullNameBuilder {
    (name: string, surname: string): string;
}

let simpleBuilder: FullNameBuilder = function (name: string, surname: string):string {
    return "Mr " + name + " " + surname;
}

let fullName = simpleBuilder("Bob", "Simpson");
console.log(fullName);

