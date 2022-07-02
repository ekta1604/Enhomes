const express = require("express")
const mongoose=require("mongoose")
const userController=require("./Controller/userController")
const suggestionController = require("./Controller/suggestionController")
const roleController =require("./Controller/roleController")
const staffController=require("./Controller/staffController")
const maintenanceController=require("./Controller/maintenanceController")
const houseController = require("./controller/houseController")


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Users Api
app.get("/user",userController.getAllUsers)
app.post("/user",userController.addUser)
app.put("/user",userController.updateUser)
app.delete("/user",userController.deleteUser)

//Suggestion Api
app.get("/suggestion",suggestionController.getAllSuggestions)
app.post("/suggestion",suggestionController.addSuggestion)
app.put("/suggestion",suggestionController.updateSuggestion)
app.delete("/suggestion",suggestionController.deleteSuggestion)

//Role Api
app.get("/role",roleController.getAllRoles)
app.post("/role",roleController.addRole)
app.put("/role",roleController.updateRole)
app.delete("/role",roleController.deleteRole)

//Staff Api
app.get("/staff",staffController.getAllStaff)
app.post("/staff",staffController.addStaff)
app.put("/staff",staffController.updateStaff)
app.delete("/staff",staffController.deleteStaff)

//Maintenance Api
app.get("/maintenance",maintenanceController.getAllMaintenance)
app.post("/maintenance",maintenanceController.addMaintenance)
app.put("/maintenance",maintenanceController.updateMaintenance)
app.delete("/maintenance",maintenanceController.deleteMaintenance)

//House Api
app.get("/house",houseController.getAllHouses)
app.post("/house",houseController.addHouse)
app.put("/house",houseController.updateHouse)
app.delete("/house",houseController.deletehouse)



mongoose.connect("mongodb://localhost/e-society-22", function (err) {
    if (err) {
        console.log(err)
        console.log("Something Went Wrong....")
    }
    else {
        console.log("db Connected")
    }
})


app.listen(9999, function (err) {
    if (err) {
        console.log(err)
        console.log("Something Went Wrong....")
    }
    else {
        console.log("Server Started 9999")
    }
})