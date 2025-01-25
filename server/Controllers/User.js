import User from "../Models/User.js";
import { generateToken } from "../Auth/jwt.js";


export const loginController = async (req,res)=>{
    try {
      const {email,password} = req.body;
       
      const user = await User.findOne({email:email});

      if(!user){
          return res.status(400).send("user does'nt exists");
      }
      
      const isMatch = user.matchPassword(password);

       if(!isMatch){
            return res.status(400).send("invalid password");
       }
       const payload = {
         id:user.id,
         name:user.name
       }
       const token = await generateToken(payload);

       return res.status(200).json({message:"login successfully",token:token});

    } catch (error) {
       return res.status(500).send("internal server error",error.message);
    }
}

export const signupController = async(req,res)=>{
    
    try {
     const {name,email,password} = req.body;
     console.log(name,email,password);
     
    
      
     if(!name || !email || !password){
         return res.status(400).json({message:"Please fill all the fields"})
     }
 
     const user = await User.findOne({email:email});
 
   
 
     if(user){
        return res.status(400).send("User already exists");
     }
     else{
         
         const newUser = new User({name:name,email:email,password:password});
         await newUser.save();
         const token = await generateToken({
            id:newUser.id,
            name:newUser.name
         }
         )
         console.log(token);
         

        return res.status(200).json({user:newUser,token:token});
     }
     
    } catch (error) {
      return res.status(500).json({ error: "Internal server error", details: error.message });
    }
  
 }

