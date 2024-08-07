const http=require("http")
const url=require("url")


// const myserver=http.createServer(function(req,res){
//     console.log("request is recevide")
//     res.write("hello minta this is http server ")
//     res.end("hi")
// })



// myserver.listen(1212,function(err){
//     if(err){
//         console.log(err)
//     }
//     console.log("server is running on port 1212")
   
// })

// simple respones

const server2=http.createServer((req,res)=>{
    console.log(req.url)

    if(req.url === "/"){
        res.write("<h1>this is home page</h1>")
        res.end()
    }else if(req.url ==="/about"){
        res.write("<h1>this is about page</h1>")
        res.end()
    }else{
        res.write("<h1>page not found 404 </h1>")
        res.end()
    }

})
server2.listen(2121,(err)=>{
    if(err){
        console.log("server is running on port 2121")

    }
})
