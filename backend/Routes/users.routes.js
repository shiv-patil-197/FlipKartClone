let express=require("express")
let router=express.Router();
let{addUser,getUsers,getUser,getUserById}=require("../Controller/user.controller")


router.post("/addUser",addUser)
router.get("/getUsers",getUsers)
router.get("/getUser",getUser)
router.get("/getUserById/:id",getUserById)

module.exports=router;