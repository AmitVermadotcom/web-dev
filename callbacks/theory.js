const fs = require("fs");

// function callback(err,data){
//     if(err){
//         console.log("unable to read file");
//     }
//     else{
//         console.log(data);
//     }
// }

// fs.readFile("abc.txt","utf-8",callback);

// function callback(data){
//     console.log(data);
// }
// setTimeout(function() {
//     callback("hello");
// },3000);

// setTimeout(callback,2000);
// let cond=true;
// setTimeout(function() {
//     cond=false;
// },3000);
// while(cond){
//     console.log("hello");
// }

// better way solution ================================||
// let count=1;
// function readfile(filename){
//     if(filename == undefined){
//         filename = count-1+".txt";
//     }
//     fs.readFile(filename,"utf-8",writefile);
// }

// function writefile(err,data){
//     let lines = data.split("\r\n");
//     if(lines.length > 1){
//         lines = lines.splice(1);
//         let writeData=lines.join("\r\n");
//         fs.writeFile((count)+".txt",writeData,readfile);
//         count+=1;
//     }
// }
// readfile("abc.txt");



// count ki value pehle badh jayegi isliye -1 kra count me line 67=============================== uppar wala better solution h||
// let count=1;
// function readfile(filename){
//     if(filename == undefined){
//         filename = count-1+".txt";
//     }
//     fs.readFile(filename,"utf-8",writefile);
// }

// function writefile(err,data){
//     let lines = data.split("\r\n");
//     if(lines.length > 1){
//         lines = lines.splice(1);
//         let writeData=lines.join("\r\n");
//         // console.log(count+".txt");
//         fs.writeFile((count)+".txt",writeData,function(){
//             readfile((count-1)+".txt");
//         });
//         count+=1;
//     }
// }
// readfile("abc.txt");


// setinterval baar baat exceute ho rha h isliye 4 baar chalega 5 baar se pehle a=false ho jayega=============
// let a=true;
// setInterval(() => {

//     if(a)console.log("hello");
// }, 200);

// setTimeout(() => {
//     a=false;
// }, 1000);


// question - https://www.hackerrank.com/contests/javascript-week2/challenges/js-callbacks/submissions/code/1331774169

// function myFilter(my_array, callback){
//     //Enter your code here
//     let arr = [];
//    for(let ele of my_array) {
//        if(callback(ele)) {
//            arr.push(ele);
//        }
//    }
//     return arr;
  
  
  
// }

// function callback(element) {
//     return element % 2 == 0;
// }

// function processData(inputArray) {
//     //In blank write anonymous function, which takes one parameter and returns true if its even or false if its odd.
//     console.log(myFilter(inputArray, callback));   
// } 