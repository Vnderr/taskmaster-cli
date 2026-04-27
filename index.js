const { readTask, writeTask} = require('./tasks');
const [,, cmd] = process.argv;

if (cmd === 'list' ) {
    const tasks = readTask();
    if (tasks.length === 0) {
        console.log('No hay tareas. ');
    } else {
        tasks.forEach((t, i) => {
            const icon = t.done ?  '✓' : 'o';
            console.log(`\${icon} [\${i+1}] \${t.title}` );  
        });
    }
}