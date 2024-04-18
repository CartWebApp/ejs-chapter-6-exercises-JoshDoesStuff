/* 
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

// Your code here (and the code from the previous exercise)


class Group {
  constructor(array) {
 this.array = array;
};

static has(number) {
 return this.array.includes(number);
};

static add(adder) {
 if (!this.array.includes(adder)) {
   this.array.push(adder);
 };
};

static delete(target) {
 this.array = this.array.filter((word) => word != target);
};

static from(arraySetter) {
 this.array = arraySetter;
 return this;
};

static [Symbol.iterator] () {

 let i = 0;

 return {
   next: () => {
     if (i < this.array.length) {
       return {value: this.array[i++], done: false}
     }
     else {{return {done: true}}}
   }
 }
}

}



// Tests:
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c