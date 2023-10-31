const User = require("../models/user");


exports.addUser = async (req, res) => {
    try{
        const newUser = await User.create(req.body);
    res.status(201).json({
        status: "success",
        data: {
            user: newUser,
        },
    });
    
    }
    catch(err){
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }

}

exports.getAllUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json({
            status: "success",
            results: users.length,
            data: {
                users,
            },
        });
    }
    catch(err){
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
}
exports.getUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: {
                user,
            },
        });
    }
    catch(err){
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: "success",
            data: {
                user,
            },
        });
        
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
        
    }
}


exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "success",
            data: null,
        });
        
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
        
    }
}