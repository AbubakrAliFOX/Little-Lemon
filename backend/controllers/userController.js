import expressAsyncHandler from "express-async-handler";
import User from '../models/userModel.js'


const createUser = expressAsyncHandler(async (req, res) => {
    const user = await User.create({
        username: 'Hfjlhdasjlfhds'
    });
    console.log(user);
})


export default createUser;