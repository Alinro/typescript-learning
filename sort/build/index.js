"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([1000, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection);
var charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(5);
linkedList.sort();
linkedList.print();
