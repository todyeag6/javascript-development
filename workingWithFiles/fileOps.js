const fs = require("fs")//importing fs
const fsPromise = require("fs").promises
//const buf = new Buffer.allocUnsafe(1024);
//open file manually
// fd = file descriptor refernces the opened file
// fs.open ("workingWithFiles/sample.txt", "r+", (error, fd) =>{
//     if (error) return console.error(error); 

// //read file contents
// fs.read(fd, buf, 0, buf.length, 0, (err, bytes)=>{
//     if (err) console.log(err);

//     if(bytes > 0) {
//         console.log(buf.slice(0, bytes).toString());
        
//     }
//     // MUST CLOSE FILE MANUALLY
//     fs.close(fd, (err) => {
//         if (err) console.log(err);
//         console.log("closed");
//     })
//   });
// });
//


//
// 

//use readFile to read file contents---async
// fs.readFile("workingWithFiles/sample.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);    
//  })

//async/await style
// const readFileWithPromis= async () => {
//     try {
//         const data = await fsPromise.readFile("workingWithFiles/sample.txt", {encoding: "utf8"})
//     console.log(data);
//     }catch (error) {
//         console.log(error);
//  } 
// }
// readFileWithPromis();

//read file synchronously
// try {
//     const data= fs.readFileSync("workingWithFiles/sample.txt", "utf8")
//     console.log(data);
    
// } catch (error) {
//     console.log(error);
        




//creates file with fs
// fs.open("workingWithFiles/sample2.txt", "w", (err, file) => {
//     if (err) throw err;
//     console.log(file);
//     console.log("file created");
    
    
// })


//create and write into a file
// /fs.writeFile("workingWithFiles/sample3.txt", "This is too much work to create and write into a file", (err)  => {
//     if (err) console.log("Program Failure");
//     console.log("Success");
//     });

// //appen the file manually...adds to the end
// fs.appendFile("workingWithFiles/sample3.txt", ". Hello world", (err) => {
//     if (err) throw err;
//     console.log("DONE");
// })

// fs.rename("workingWithFiles/sample.txt", "workingWithFiles/sample34.txt", (err) => {
//     if (err) throw err;
//     console.log("DONE");
    
// })


//delete files
fs.unlink("workingWithFiles/sample3.txt", (err) => {
    if (err) {
    console.log("DONE");
    return;
    }
    console.log(gone);
    
})