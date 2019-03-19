var update = require('immutability-helper')
 
console.log(update)

const state1 = [{"a": "a"},{"b": "bee"}];
const state2 = update(state1, {$push: ['y']});

const state3 = update(state2, {[1]: {$set: 'z'} })
const state4 = update(state1, {$push: [{"c": "cee"}]});

console.log(state1)
console.log(state2)
console.log(state3)
console.log(state4)

