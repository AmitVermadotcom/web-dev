const fs = require("fs");

// let promise = new Promise(function (resolve,reject){
//     if(fs.existsSync("12.txt")){
//         resolve("file exist");
//     }
//     else{
//         reject("file doesn't exist");
//     }
// });

// function abc(val){
//     console.log(val);
// }
// function error (err){
//     console.log(err);
// }
// promise.then(abc).catch(error);



// function callback(data){
//     console.log("1st then ka 2nd file run");
// }
// let readfile = fs.promises.readFile("abc.txt","utf-8");
// readfile.then(function(data){
//     console.log(data);
//     fs.readFile("1.txt","utf-8",callback);
//     console.log("1st then");
// }).catch(function(err){
//     console.log(err);
// })
// readfile.then(function(data){
//     console.log("2nd then");
// })

// createfile();
//parallely
// let n = process.argv[2];
// let fileNumber = 1;
// function printFilenumber(fileNumber) {
//     console.log("You just created file number", fileNumber);
// }
// function createfile(filenumber) {
//     let numberOfLines = Math.floor(Math.random() * 101);
//     let arr = [];
//     for(let i = 0; i < numberOfLines; i++) {
//         arr.push(Math.floor(Math.random() * 101));
//     }
//     let writeData = arr.join("\r\n");
//     fs.writeFile(fileNumber + ".txt", writeData, function(){
//         printFilenumber(filenumber);
//     });
// }

// for(let i = 0; i < n; i++) {
//     createfile(fileNumber);
//     fileNumber += 1;
// }


// let promise = new Promise(function(resolve,reject) {
//     if(fs.existsSync("8.txt")) {
//         console.log("hello");
//         resolve();
//     } else {
//         reject("file doesn't exist");
//     }
// });

// function abc (val){
//     console.log(val);
// }

// function error (err) {
//     console.log(err);
// }
// console.log(promise);
// promise.then(abc).catch(error)

// promise.then(function(val){
//     console.log(val + " new callback");
// })

// promise.then(function(val){
//     console.log(val);
// })
// function callback(data) {
//     console.log("2nd file read");
// }
// let readfile = fs.promises.readFile("1.txt","utf-8");
// readfile.then(function(data){
//     console.log(data);
//     fs.readFile("2.txt","utf-8",callback);
//     console.log("hello");
// }).catch(function(err){
//     console.log(err);
// });

// readfile.then(function(data) {
//     console.log(data);
// })

// let promise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("promise1 completed");
//     },2000)
// })

// let promise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("promise2 completed");
//     },2000)
// })
// console.log(promise1,promise2);
// promise2.then(function(data){
//     console.log("promise part 2")
//     throw new Error("error");
// }).catch(function(data) {
//     console.log("error occured");
//     return ("hello");
// })
// promise1.then(function(data){
//     console.log(data);
// })

// promise2.then(function(data){
//     console.log(data);
// })



// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(false);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);
// });

// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .then(function(data) {
//     if (data != 'victory') {
//         return 'Defeat';
//     }

//     return job(true);
// })

// .then(function(data) {
//     console.log(data);
// })

// .catch(function(error) {
//     console.log(error);

//     return job(false);
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return new Error('test');
// })

// .then(function(data) {
//     console.log('Success:', data.message);
// })

// .catch(function(data) {
//     console.log('Error:', data.message);
// });

// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject('We are all going to die');
//     }, 2000);
// });

// promise.then(function success(data) {
//     console.log(data + ' 1');
// }).catch( function error(data) {
//     console.error(data + ' 1');
// });

// promise.then(function success(data) {
//     console.log(data + ' 2');
// }).catch(function error(data) {
//     console.error(data + ' 2');
// });

// promise.then(function success(data) {
//     console.log(data + ' 3');
// }).catch(function error(data) {
//     console.error(data + ' 3');
// });







// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('hello world 1');
//         resolve('hello world 2');
//         resolve('hello world 3');
//         resolve('hello world 4');
//     }, 1000);
// });

// promise.then(function success(data) {
//     console.log(data);
// });

// let promise1 = fs.promises.readFile("1.txt","utf-8").then(function(data){
//     console.log("first file reading completed");
// });

// let promise2 = fs.promises.readFile("2.txt","utf-8").then(function(data){
//     console.log("second file reading completed");
// });

// let promise3 = fs.promises.readFile("3.txt","utf-8").then(function(data){
//     console.log("third file reading completed");
// });
// let promise4 = fs.promises.readFile("4.txt","utf-8").then(function(data){
//     console.log("fourth file reading completed");
// });
// let promise5 = fs.promises.readFile("5.txt","utf-8").then(function(data){
//     console.log("fifth file reading completed");
// });
// let promise6 = fs.promises.readFile("6.txt","utf-8").then(function(data){
//     console.log("sixth file reading completed");
// });
// let promise7 = fs.promises.readFile("7.txt","utf-8").then(function(data){
//     console.log("seventh file reading completed");
// });
// let promise8 = fs.promises.readFile("8.txt","utf-8").then(function(data){
//     console.log("eighth file reading completed");
// });

// Promise.all([promise1,promise2,promise3,promise4,promise5,promise6,promise7,promise8]).then(function(data){
//     console.log("Reading all file completed");
// })

// Promise.race([promise1,promise2,promise3,promise4,promise5,promise6,promise7,promise8]).then(function(data){
//     console.log("Reading one file completed");
// })


// function delay(time) {
//     return new Promise(function(resolve) {
//         setTimeout(function(){
//             resolve('success ' + time);
//         }, time );
//     });
// }

// Promise.race([delay(500), delay(100)]).then(function(data) {
//     console.log(data);
// });

// Question Practice
// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/its-time-to-pratice-with-promises
// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/more-pratice-with-promises
// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/chaining-the-promises
// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/some-pratice
// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/quick-quiz
// 'https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/the-last-challenge