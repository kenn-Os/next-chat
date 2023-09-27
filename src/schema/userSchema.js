import {Schema, connection} from "mongoose";


const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastSeen: {
        type: Date
    },
    isOnline: {
        type: Boolean
    },
    photo: {
        type: String,
        default: "user.png"

    },
    bio: {
        type: String
    }

});

const UserModel = connection
    .useDb("next-chat")
    .model("User", userSchema, "users");

export default UserModel;