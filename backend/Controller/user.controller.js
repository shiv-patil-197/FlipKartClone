let express = require("express")

let USER = require("../model/user.schema")

const addUser = async (req, res) => {
    try {
        let { fn, confirmPassword, ln, number, email, password } = req.body;
        if (fn?.length < 5) {
            return res.status(400).json({ title: "Bad Request", message: "fn should contain min 5 charcters" })
        }
        await USER.create({ fn, password, ln, number, email, confirmPassword });
        res.status(201).json({ message: "student added successfully" })

    }
    catch (err) {
        console.error("Error during user creation:", err); // Improved error logging

        // Check for duplicate key errors
        if (err.name === 'MongoServerError' && err.code === 11000) {
            const field = Object.keys(err.keyValue)[0];
            console.log(Object.keys);
            return res.status(400).json({ title: "Duplicate Key Error", message: `${field} already exists` });
        }

        // Handle other errors
        res.status(500).json({ title: "Internal Server Error", message: "An unexpected error occurred" });

}
// try {
//     const newUser = new USER(req.body);
//     await newUser.save();
//     res.status(201).json({ success: true, message: "User created successfully", data: newUser });
// } catch (error) {
//     if (error.name === "MongoError" && error.code === 11000) {
//         // Duplicate key error handling
//         let key = Object.keys(error.keyPattern)[0]; // Get the field name that caused the duplicate error
//         let message = key === "email" ? "Email already exists" : "Number already exists";
//         res.status(400).json({ success: false, message });
//     } else {
//         res.status(500).json({ success: false, message: "Internal server error" });
//     }
// }
}

const getUsers = async (req, res) => {
    try {
        let users = await USER.find();
        res.status(200).json({ message: "student added successfully", data: users })
    }
    catch (err) {
        console.log(err._message);
    }
}

const getUserById = async (req, res) => {
    try {
        let { id } = req.params;
        console.log(id);
        let user = await USER.findById(id);
        if (!user) {
            res.json({ error: true, message: "user not fetched by giving id" })
        } else {
            res.json({ error: false, message: "user fetched successfully", data: user })
        }
    }
    catch (err) {
        console.log(err);
    }
}

const getUser = async (req, res) => {
    try {
        const { username } = req.query // Assuming identifier is passed as a parameter in the route
        console.log(username);
        if (!username) {
            return res.status(400).json({ error: true, message: "Username is required" });
        }
        let user;

        // Check if identifier is a valid email
        if (username.includes("@")) {
            user = await USER.findOne({ email: username });
        } else {
            // Assuming identifier is a valid number (or adjust validation as needed)
            user = await USER.findOne({ number: username });
        }
        if (!user) {
            return res.json({ error: true, message: "User not found" });
        }

        res.json({ error: false, message: "User fetched successfully", data: user });
    } catch (err) {
        console.log("error displyed");
        console.error("Error fetching user:", err);
        res.status(500).json({ error: true, message: "Internal server errorrrr" });
    }
};

    module.exports = { addUser, getUsers, getUser, getUserById }