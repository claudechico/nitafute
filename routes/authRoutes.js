const express = require("express");
const { registerController,loginController, forgotPassword, testController, getAllUsers, deleteUser, getDatabeleongsToUser} = require("../controller/userController");
const { requireSignIn,isAdmin } = require("../middleware/authMid");

const router = express.Router();
// routes
router.post('/register',registerController);

router.post('/login', loginController);
// forgot password

router.post('/forgot-password', forgotPassword);
// getAll users
router.get('/all-users', getAllUsers)
router.delete('/delete-user/:id',deleteUser)
// test route
router.get('/test'  ,requireSignIn, isAdmin,testController)
// protected route
 router.get('/user-auth', requireSignIn, (req,res)=>{
res.status(200).send({ok:true});
 })
 //admin route
 router.get('/admin-auth', requireSignIn,isAdmin, (req,res)=>{
    res.status(200).send({ok:true});
     })
   //   get data belongos to user
   router.get('/get-userData',requireSignIn,getDatabeleongsToUser);
module.exports = router;