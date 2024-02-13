const fs = require('fs')
// fs.writeFileSync("perkenalkan.txt", "Perkenalkan saya Sahrul")
// console.log(fs)

// const perkenalan = fs.readFileSync("perkenalkan.txt")
// console.log(perkenalan.toString())

// writteFileSystem
// readFileSystem
// unlinkFileSync
try {
    fs.mkdirSync('pertemuan100124');
    console.log('Delete file succes')
} catch (error) {
    console.log(error);
}

// mkdirSync