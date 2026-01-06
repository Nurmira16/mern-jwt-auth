import userService from "../service/user-service.js";

class UserController{
    async registration(req,res,next){
        try { 
         const {email,password}=req.body
           const user=await userService.registration(email,password)
           res.send({email:user.email, password:user.password})
        } catch (error) {
            console.log(error)
        }
    }
    async login(req,res,next){
        try {
            
        } catch (error) {
            
        }
    }
    async logout(req,res,next){
        try {
            
        } catch (error) {
            
        }
    }
     async activate(req,res,next){
        try {
            
        } catch (error) {
            
        }
    }
     async refresh(req,res,next){
        try {
            
        } catch (error) {
            
        }
    }
     async getUsers(req,res,next){
        try {
           const {email,password}=req.body
           const user=await userService.registration(email,password)
           res.json({id:user.id, password:user.password})
        } catch (error) {
            console.log(error)
        }
    }
    
}

export default new UserController();