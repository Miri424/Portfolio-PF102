const bycrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()
const { User } = require("../models/userSchema")
const { exist } = require("joi")

const register = async (req, res) => {
    const {name , email, password} = req.body

    const existUser = await User.findOne({email: email})
    console.log(existUser);
    try {
        if(existUser) {
            return res.status(400).json({status: 'error', message: 'Email already exists'})
        }

        const hashedPassword = await bycrypt.hash(password, 10)
        console.log(hashedPassword);
        const newUser = new User({ name, email, password: hashedPassword})
        console.log(newUser);

        await newUser.save()

        res.status(201).json({
            status: 'success',
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to create user",
        })
    }
}

const login = async (req, res) => {
    const {email, password} = req.body

    const existUser = await User.findOne({email})

    if(!existUser || !(await bycrypt.compare(password, existUser.password))) {
        return res.status(400).json({status: 'error', message: 'Invalid email or password'})
    }

    const token = jwt.sign(
        {name: existUser.name, role: existUser.role},
        process.env.JWTSECRET,
        {expiresIn: '1h'}
    )

    res.status(200).json({status: 'success', message: 'User logged in successfully', token: `Bearer ${token}`});
}

module.exports = {
    register,
    login
}