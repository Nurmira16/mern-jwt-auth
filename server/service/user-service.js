import UserModel from '../models/user-model.js'
import bcrypt from 'bcrypt';
import uuid from 'uuid';
import mailService from './mail-service.js';
import tokenService from './token-service.js';
import UserDto from '../dtos/user-dtos.js';

class UserService{
    async registration(email,password){
        const candidate=await UserModel.findOne({email})
        if(candidate){
            throw new Error(`Candidate with this email ${email} is already exists`)
        }
        const hashPassword=await bcrypt.hash(password, 3);
        const activationLink=uuid.v4()

        const user=await UserModel.create({email,password:hashPassword, activationLink})
        await mailService.sendActiovaionMail(email,activationLink)

        const userDto=new UserDto(user) //id,email,isActivated
        const tokens=tokenService.generateToken({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens,user:userDto}
    }
}

export default new UserService();