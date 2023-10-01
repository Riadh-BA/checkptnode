const http=require("http")

// tawa bech nasn3o il serveur web libech na5dmo 3lih ama HADHi BECH TARI9A LI9DIMA

http.createServer((request,Response)=>{
    Response.end("hello Node")
}).listen((3000))

console.log("the server is runnig at http://localhost:3000/")

// require file system

const fs=require("fs")

// create new file with fs

fs.writeFile("welcom.txt","hello Node",function(error){
    if (error) throw (error)
    console.log("file created successfly")
})

fs.readFile("welcom.txt","utf-8",function(error,data){
    if(error){
    console.log(error)
    }
    return(console.log(data))
})