//Async/await
const fs = require('fs').promises;

const readFile = async () => {
    try {
        const data = await fs.readFile('input.txt', 'utf8');
        console.log(data); 
    }
    catch (error) {
        console.error(error); 
    }
}; 
readFile();