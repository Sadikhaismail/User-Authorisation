const usermodel = require('../Models/userModel')
const Bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports.add = async (req, res) => {
    try {
        const isExist = await usermodel.findOne({ email: req.body.email });
        if (!isExist) {
            const adduser = new usermodel(req.body)
            await adduser.save()
            res.status(200).json({ message: "user added", adduser })
        } else {
            res.status(409).json({ message: "user already exist" })

        }

    } catch (error) {
        res.status(409).json({ message: "user cannot added" })

    }

}
module.exports.login = async (req, res) => {
    try {
        const isExist = await usermodel.findOne({ email: req.body.email });
        if (!isExist) {
            res.status(409).json({ message: "user not found" })

        } else {
            const isMatch = await Bcrypt.compare(req.body.password, isExist.password)
            if (isMatch) {
                const token = jwt.sign({ id: isExist.id, role: isExist.role , username:isExist.userName}, process.env.SECRET_KEY, { expiresIn: "1hr" });
                res.cookie('accessToken', token, { httponly: true, maxAge: 3600000 })
                res.status(200).json({ message: "login success" })

            } else {
                res.status(200).json({ message: "invalid password" })

            }
        }



    } catch (error) {
        res.status(405).json({ message: "login failed" })

    }

}





module.exports.protected = async (req, res) => {
    try {
        res.status(400).json({ message: `this is protected route ${req.user.username}` })

    }



    catch (error) {
        res.status(405).json({ message: "access denied", Error: error })

    }

}














































module.exports.second = (req, res) => {
    res.send('anu@gmail.com')

}
module.exports.third = (req, res) => {
    res.send('123')

}