import {Webhook} from 'svix'
import User from '../Models/UserModel.js'

//API controller to manage Clerk User with database
export const clerkWebHooks = async(req,res)=>{
     try {
       const webHook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)
       //verifying headers
       await webHook.verify(JSON.stringify(req.body),{
        "svix-id":req.headers["svix-id"],
        "svix-timestamp":req.headers["svix-timestamp"],
        "svix-signature":req.headers["svix-signature"],
       })
       //getting data from req body
       const {data,type} = req.body
       //switch cases for different cases
       switch (type) {
        case "user.created":{
              const userData = {
                _id:data.id,
                name:data.first_name+" "+data.last_name,
                email:data.email_addresses[0].email_address,
                image:data.image_url,
                resume:''
              }
              //saving data to database
              await User.create(userData)
              res.status(200).json({message:"User created successfully"})
              break;
        }
        case "user.updated":{
            const userData = {
                name:data.first_name+" "+data.last_name,
                email:data.email_addresses[0].email_address,
                image:data.image_url,
                
                }
                //saving data to database
              await User.findByIdAndUpdate(data.id,userData)
              res.status(200).json({message:"User created successfully"})
              break;

            
        }
        case "user.deleted":{
            await User.findByIdAndDelete(data.id)
            res.status(200).json({message:"User deleted successfully"})
            break;
        }
        default:break;
        
       }
     } catch (error) {
        console.log(error.message)
        res.json({success:false})
     }
}