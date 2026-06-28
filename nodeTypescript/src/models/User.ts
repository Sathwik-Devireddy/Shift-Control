import mongoose,{Schema,Document} from "mongoose"

interface IUser extends Document{
    name: string;
    email: string;
    age: number;
    createdAt:Date
}
const  userschema = new Schema<IUser>({
    name: String,
    email: String,
    age: Number,
    createdAt:Date
})
const user = mongoose.model<IUser>("typescript",userschema) 

export  {user};
export type {IUser};