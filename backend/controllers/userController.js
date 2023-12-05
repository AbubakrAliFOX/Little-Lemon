import expressAsyncHandler from "express-async-handler";

const createUser = expressAsyncHandler(async (req, res) => {
    res.send("Usere Created!")
})


export default createUser;