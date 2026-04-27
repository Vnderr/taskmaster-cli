const fs = require('fs');
const PATH = './data/tasks.json';

function readTask(){
    return JSON.parse(fs.readFileSync(PATH, 'utf8'));
}

function writeTask(task) {
    fs.writeFileSync(PATH, JSON.stringify(task, null, 2));
}

module.exports = { readTask, writeTask};