import User from '../models/User_model.js';


export const getUser = async (req , res)=>{
    try {
        const user = await User.find();
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }

}

export const createUser = async (req,res)=>{
    const {name} = req.body;
    const newUser = new User({
        name
    });

    const saveUser = await newUser.save();
    res.status(200).json(saveUser)
}