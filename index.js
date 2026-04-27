const { readTask} = require('./task');
const [,, cmd] = process.argv;

if (!cmd) {
    console.log('TaskMaster CLI -usa: node index.js <comando>');
}