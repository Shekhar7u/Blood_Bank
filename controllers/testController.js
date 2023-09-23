 const testController =(req,res)=>{
res.status(200).send({
    message:"test route",
    sucess:true,
})
}
//ES 5

module.exports ={testController}