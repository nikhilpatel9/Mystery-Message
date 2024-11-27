import mongoose, {Schema,Document } from 'mongoose';
export interface Message extends Document {
    content: string;
    createdAt :Date;
}
const MessageSchema:Schema<Message> = new Schema({
    content: {
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
        required:true
        }
})
export interface User extends Document{
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry:Date;
    isVerified: boolean;
    isAcceptingMessage:boolean;
    message:Message[];
}
const UserSchema:Schema<User> = new  Schema({
    username:{
        type:String,
        required:[true,"username must be provided"],
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:[true,"email must be provided"],
        unique :true,
        match:[/.+\@.+\..+/,'please use a valid email address']
    },
    password:{
        type:String,
        required:[true,"password must be provided"],
    },
    verifyCode:{
        type:String,
        required:[true,"verify code must be provided"],
        },
    verifyCodeExpiry:{
        type:Date,
        required:[true,"verify code expiry must be provided"],
        },
    isVerified:{
    type:Boolean,
    default:false
    },
    isAcceptingMessage:{
        type:Boolean,
        default:true,
        },

        message:[MessageSchema]

})
const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema)
export default UserModel;
