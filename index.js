const fs = require('fs');
const path = require('path');

const writeableStream = fs.createWriteStream('./stream/output.txt');
const readableStream = fs.createReadStream((path.resolve(__dirname, 'input.txt')), {
    highWaterMark: 15
});

readableStream.on('readable', () => {
    try {
        const msg = `${readableStream.read()}\n`;
        writeableStream.write(msg);
        console.log(msg);
    } catch (error) {
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => {
    console.log('Done');
});