import { schema, model, models } from "mongoose";

const UserSchema = newSchema({
    email: {
        type: String,
        unique: [true, 'email already exists!!'],
        required: [true, 'email is a must!!'],
    },

    username: {
        type: String,
        required: [true, 'Username is required !'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    }, 

    image: {
        type: String,
    }
})