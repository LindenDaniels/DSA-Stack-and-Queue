class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {

        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }


        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
 
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    peek() {
        if(!this.top) {
            console.log('Stack is empty!');
        } 
        console.log(this.top.value);
    }
}

// let starTrek = new Stack();
// starTrek.push('Kirk');
// starTrek.push('Spock');
// starTrek.push('McCoy');
// starTrek.push('Scotty');

// starTrek.pop('McCoy');

 
// function is_palindrome(s) { // a word, phrase or number that's the same backwards & forwards
//     s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
//     // Your code goes here
//     let newStack = new Stack();
//     s.split('').foEach((char) => {
//         newStack.push(char); // add each character to the stack after splitting
//     });
//     let reverseString = ''; // start with empty string
//     let count = 0;
//     while (count < s.length) {
//         count++;
//         reverseString += newStack.pop(); // pop out each character
//     }
//     return s = reverseString;
// }

// // True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));