// Create a class called group that functions like 'set' it has 'add', 'delete', and 'has' methods.
// Example from other student in class helped tremendously in structuring and example on how to work the problem
class group {
    constructor () {
        this.array = [];
    }

    add(object) {
        let array = this.array;
        let included = false;
        for(let i = 0; i < array.length; i++) {
        if(array[i] == object) {
            included = true;
        }
    } if(included = false) {
        console.log(object + " is already in the array");
    } else {
        array.push(object)
    }
    } 

    delete(object) {
        let array = this.array;
        let included = false;
        for (let i = 0; i < this.array.length; i++) {
            if(array[i] == object) {
                included = true;
            }
        } if(included = true) {
            array = array.filter( elem => elem !== object );
        } else {
            console.log(object + " doesn't exist in the array")
        }
    }

    has(object) {
        let array = this.array;
        let included = false;
        for (let i = 0; i < this.array.length; i++) {
            if (array[i] == object) {
                included = true;
            }
        }
        return included;
    }

    static from(object) {
        let newGroup = new group;
        for(let current of object) {
            newGroup.add(current);
        }
        return newGroup;
    }
}


let Group = group.from([10, 20]);
console.log(Group.has(10));
// → true
console.log(Group.has(30));
// → false
Group.add(10);
Group.delete(10);
console.log(Group.has(10));
// → false
