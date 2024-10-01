const placeModel = require("../Model/placeModel")
const validator = require("validator")


//add place
module.exports.addPlace = function (req, res) {
    let placeName = req.body.placeName
    let rent=req.body.rent

    let place = new placeModel({
        "placeName": placeName,
        "rent":rent
    })

    let isError = false
    let err = []

    if (placeName == undefined || validator.isAlpha(placeName) == false || placeName.trim().length == 0) {
        isError = true;
        err.push({
            "PlaceName Error": "Please Enter Valid Name"
        })
    }
    if (rent == undefined || validator.isNumeric(rent.toString()) == false || rent.trim().length == 0) {
        isError = true;
        err.push({
            "Rent Error": "Please Enter Rent"
        })
    }

    if (isError == true) {
        console.log(err)
        res.json({
            "status": -1,
            "data": err,
            "msg": "Something went Wrong...."
        })
    }
    else {
        place.save(function (err, data) {
            if (err) {
                console.log(err)
                res.json({
                    "status": -1,
                    "data": err,
                    "msg": "Something went Wrong..."
                })
            }
            else {
                res.json({
                    "status": 200,
                    "data": data,
                    "msg": "Place Added!!"
                })
            }
        })
    }
}


//getAllPlaces
module.exports.getAllPlaces = function (req, res) {
    placeModel.find(function (err, data) {
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
                "msg": "Places Retrived!!"
            })
        }
    })
}



//updatePlace
module.exports.updatePlace = function (req, res) {
    let placeId = req.body.placeId
    let placeName = req.body.placeName
    let rent=req.body.rent


    let isError = false
    let err = []

    if (placeName != undefined) {
        if (validator.isAlpha(placeName) == false || placeName.trim().length == 0) {
            isError = true;
            err.push({
                "PlaceName Error": "Please Enter Valid Name"
            })
        }
    }
    if (placeName != undefined) {
        if (validator.isNumeric(rent.toString()) == false || rent.trim().length == 0) {
            isError = true;
            err.push({
                "Rent Error": "Please Enter Rent"
            })
        }
    }

    if (isError == true) {

        res.json({
            "status": -1,
            "data": err,
            "msg": "Something went Wrong...."
        })
    }
    else {
        placeModel.updateOne({ _id: placeId }, { placeName: placeName ,rent:rent}, function (err, data) {
            if (err) {
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
                    "msg": "Place Updated!!"
                })
            }
        }
        )
    }
}



//deletePlace
module.exports.deletePlace = function (req, res) {
    let placeId = req.params.placeId
    placeModel.deleteOne({ _id: placeId }, function (err, data) {
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
                "msg": "Place Deleted!!"
            })
        }
    })
}