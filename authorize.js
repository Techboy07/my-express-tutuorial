const authorize = (req,res,next)=>{

  if(req.user === "john"){

    req.user = {name: "john", id: 3}
next()
  }else {

res.status(401).send("unauthorize")
  }

}

module.exports = authorize
