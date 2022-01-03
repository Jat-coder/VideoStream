const userModel = require("../Model/userModel")
function catchAsync(fun){
    return function(req,res){
        fun(req,res).catch(error=>{
            console.log(error.message);
        })
    }
}

module.exports =catchAsync(async function deleteAllusers(req,res){
    const returnobj =await userModel.deleteMany({name:'firstUser'});
    res.send(returnobj);
});