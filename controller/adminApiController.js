const adminApi = require("../Model/adminApiModel")
const validator = require("validator")
//addHouse

module.exports.addAdmin = function (req, res) {
    let role = req.body.role
    let email = req.body.email
    let password = req.body.password;

    let admin = new adminApi({
        "role": role,
        "email": email,
        "password": password
    })


    let isError = false;
    let err = [];

    if (email == undefined || email.trim().length == 0) {
        isError = true;
        err.push({
            "Email Error": "Please Enter Valid Information"
        })
    }
    


    if (isError) {
        console.log(err)
        res.json({
            "status": -1,
            "data": err,
            "msg": "Something went Wrong...."
        })
    }
    else {
        admin.save(function (err, data) {
            if (err) {
                console.log(err)
                res.json({
                    "status": -1,
                    "data": err,
                    "msg": "Something went Wrong...."
                })
            }
            else {
                res.json({
                    "status": 200,
                    "data": data,
                    "msg": "House Added!!"
                })
            }
        })
    }
}

//getAllHouses
module.exports.getAllAdmins = function (req, res) {
    adminApi.find(function (err, data) {
        adminApi.find().populate("role").exec(function (err, data) {
            if (err) {
                console.log(err)
                res.json({
                    "status": -1,
                    "data": err,
                    "msg": "Something went Wrong...."
                })
            }
            else {
                res.json({
                    "status": 200,
                    "data": data,
                    "msg": "admins Retrived!!"
                })
            }
        })
    })
}



//update House
module.exports.updateAdmin = function (req, res) {
    let email = req.body.email
    let id = req.body.id

    isError = false;
    let err = [];

    if (email != undefined) {
        if (email.trim().length == 0) {
            isError = true;
            err.push({
                "email Error": "Please Enter Valid Information"
            })
        }
    }

    if (isError) {
        console.log(err)
        res.json({
            "status": -1,
            "data": err,
            "msg": "Something went Wrong...."
        })
    }
    else {
        adminApi.updateOne({ _id: id }, { email: email }, function (err, data) {
            if (err) {
                console.log(err)
                res.json({
                    "status": -1,
                    "data": err,
                    "msg": "Something went Wrong...."
                })
            }
            else {
                res.json({
                    "status": 200,
                    "data": data,
                    "msg": "House Updated!!"
                })
            }
        })
    }
}



//deleteHouse
module.exports.deleteAdmin = function (req, res) {
    let id = req.params.id
    console.log(id)
    adminApi.deleteOne({ _id: id }, function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Somethong went Wrong...."
            })
        }
        else {
            res.json({
              
                "status": 200,
                "data": data,
                "msg": "admin Deleted!!"
            })
        }
    })
}