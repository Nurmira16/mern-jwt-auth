import UserModel from '../models/user-model.js'
import bcrypt from 'bcrypt';
class UserService{
    async registration(email,password){
        const candidate=await UserModel.findOne({email})
        if(candidate){
            throw new Error(`Candidate with this email ${email} is already exists`)
        }
        const hashPassword=await bcrypt.hash(password, 3);
        const user=await UserModel.create({email,password:hashPassword})
        return user
    }
}

export default new UserService();