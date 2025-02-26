import index from './index.js';

console.log(index.addAccount(["Alan", "Turing", "aturing@w3c.com", 58]));
console.log(index.addAccount(["Alan", "Turing", "aturing@w3ccom", 58]));
console.log(index.addAccount(["Alan", "Turing"]));
console.log(index.addAccount(["Tim", "Berners-Lee", "tim@w3c.com", 25]));
console.log(index.addAccount(["Tim", null, "tim@w3c.com", 25]));
console.log(index.addAccount(["Ted", "Nelson", "n@w3c.com", 43]));
console.log(index.addAccount(["Ted", "Nelson", "n@w3c.com", 4]));