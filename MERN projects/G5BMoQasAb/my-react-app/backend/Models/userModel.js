import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import { config } from "dotenv"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 225,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 1024,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { _id: this._id, isAdmin: this.isAdmin },
        process.env.SECRET_KEY
    );
    return token;
};

const User = mongoose.model("User", userSchema);

export { User }
// exports.User = User;
