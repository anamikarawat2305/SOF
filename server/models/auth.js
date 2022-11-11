//it is a user database schema
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    about: {type: String },
    tags: {type: [String] }, //array of strings because tags are many
    joinedOn: {type: Date, default: Date.now } //database will autofill the date when user login
})
//model name- User & schema-userSchema
export default mongoose.model("User", userSchema)