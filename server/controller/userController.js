
import UserModel from "../model/user.js";


export const registerUser = async (req, res) => {
    const { email, password, firstname, lastname } = req.body;
  
    const newUser = new UserModel({
      email,
      password,
      firstname,
      lastname,
    });
  
    try {
      await newUser.save();
      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const updateUser = async (req, res) => {
    const id = req.params.id;
    

    
      try {
       
  
        const user = await UserModel.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        
  
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json(error);
      
    } 
      // res.status(403).json("Access Denied! you can only update your own profile");
    
  };

  export const deleteUser = async (req, res) => {
    const id = req.params.id;
      try {
        await UserModel.findByIdAndDelete(id);
        res.status(200).json("User deleted successfully");
      } catch (error) {
        res.status(500).json(error);
      }
   
  };

  export const getAllUser=async (req,res)=>{
    try{
      const allUser=await UserModel.find();
      res.status(200).json(allUser);
    }catch(error){
      res.status(500).json(error);
    }
  }
  export const getUser=async (req,res)=>{
    const id = req.params.id;

    try{
      const User=await UserModel.findById(id);

      res.status(200).json(User);
    }catch(error){
      res.status(500).json(error);
    }
  }