const glob = require("glob");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const sourcePath = "images/places/**/*.{jpg,jpeg,JPEG,JPG,png,PNG}";
const targetPath = "images_webp/places";

glob(sourcePath, (error, files) => {
  if (error) {
    console.error("Error while getting the file list: ", error);
  } else {
    console.log("Found", files.length, "files");

    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath, { recursive: true });
    }

    files.forEach((file) => {
      let targetFile = file.replace(/\.(jpeg|JPEG|jpg|JPG|png|PNG)$/, ".webp").replace("images/", "images_webp/");
      let targetDir = path.dirname(targetFile);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      sharp(file)
        .toFormat("webp")
        .toFile(targetFile)
        .then(() => {
          console.log("Converted", file, "to", targetFile);
        })
        .catch((error) => {
          console.error("Error while converting", file, ":", error);
        });
    });
  }
});
