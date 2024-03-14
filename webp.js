const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const inputDir = './images'; // Directory with JPG images

fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error('Error reading input directory:', err);
        return;
    }

    files.filter(file => path.extname(file).toLowerCase() === '.jpg').forEach(file => {
        const inputFile = path.join(inputDir, file);
        const outputFile = path.join(inputDir, `${path.parse(file).name}.webp`);

        sharp(inputFile)
            .toFormat('webp')
            .toFile(outputFile)
            .then(() => {
                console.log(`${file} has been compressed and saved as ${path.parse(file).name}.webp`);
            })
            .catch(err => {
                console.error('Error processing file', file, err);
            });
    });
});