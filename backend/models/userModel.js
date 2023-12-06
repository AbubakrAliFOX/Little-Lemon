import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add a username value']
    }
    ,
    password: {
        type: String,
        required: [true, 'Please add a password value']
    },
    name: {
        type: String,
        required: [true, 'Please add a name value']
    },
    email: {
        type: String,
        required: [true, 'Please add a email value'],
        unique: true
    },
    address: {
        type: String,
        required: [true, 'Please add a address value']
    },
    prevOrders: Array,

}, {
    timestamps: true
})

export default mongoose.model('User', userSchema);