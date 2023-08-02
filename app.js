/*const http = require("http")
const {readFileSync} = require('fs')

const homePage = readFileSync("./navbar-app/index.html","utf8")
const homeStyles = readFileSync("./navbar-app/styles.css")
const homeImage = readFileSync("./navbar-app/logo.svg")

const homeLogic = readFileSync("./navbar-app/browser-app.js")


const server = http.createServer((req,res)=>{

  console.log('user hit the servers')
if(req.url == "/"){ 
  res.writeHead(200,{'content-type':"text/html"})
  res.write(homePage)
  res.end()
}
else if(req.url == '/styles.css'){
 res.writeHead(200,{'content-type':"text/css"})
 res.write(homeStyles)
  res.end()
}
else if(req.url == '/logo.svg'){
 res.writeHead(200,{'content-type':"image/svg+xml"})
 res.write(homeImage)
  res.end()
}
else if(req.url == '/browser-app.js'){
 res.writeHead(200,{'content-type':"text/javascript"})
 res.write(homeLogic)
  res.end()
}
else if(req.url == '/about'){

res.writeHead(200,{'content-type':"text/html"})
res.write('<h1>About page</h1>')
res.end()
}
else{
res.writeHead(404,{'content-type':"text/html"})
res.write('<h1>Page not found</h1>')
res.end()
}


})

server.listen(5000)*/

const express = require("express")
const app = express()
const logger = require("./logger")
const authorize = require("./authorize")
//const {products} = require("./data")

app.use([logger,authorize])


app.get("/",(req,res)=>{
  res.send("home")

})
app.get("/about",(req,res)=>{

  res.send("About")
})


app.get("/api/products",(req,res)=>{

      res.send("Products")
    })

app.get("/api/items",(req,res)=>{

      res.send("Items")
    })



/*app.get("/",(req,res)=>{

  res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
  res.end()
})

app.get('/api/products',(req,res)=>{
const newProducts = products.map((product)=>{
const {name,id,image} = product
return {name,id,image}
})
  res.json(newProducts)
})

app.get('/api/products/:productID',(req,res)=>{ 
// console.log(req.params)
  const {productID} = req.params
  const singleProduct = products.find((product)=> product.id === Number(productID))

  if(!singleProduct){
    res.send("Product not found")
  }
res.json(singleProduct)
})
app.get("/api/products/:productID/reviews/:reviewID",(req,res)=>{
  console.log(req.params)
res.send("hello wrld")
})

app.get("/api/v1/query",(req,res)=>{
const {search,limit} = req.query
  let sortedProduct = [...products];
  if(search){

    sortedProduct = sortedProduct.filter((product)=>{
return product.name.startsWith(search)
    })
  }
  if(limit){
    sortedProduct = sortedProduct.slice(0,Number(limit))
  }
  if(sortedProduct.length < 1){
    return res.status(200).json({success:true,data: []})
  }
 return  res.status(200).json(sortedProduct)
// res.send("hello world")
})
/*app.all("*",(req,res)=>{ 
res.status(404).send("request not found")})
*/
app.listen(5000, ()=>{console.log('server is listening at port:',5000)})
