// npm i jquery --save
// import $ from 'jquery'

// import something from './my-file.js'
import summery from './functions.js'

const nisevarHello = 'hello';

const sum = (a, b) => a + b

class NewClass {
    constructor() {
        this.name = 'name'
    }

    add(a, b) {
        console.log(a + b)
    }
}

const newClass = new NewClass

newClass.add(8, 8)

console.log(summery(1,2,4))
