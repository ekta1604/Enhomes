const express = require("express")
const mongoose=require("mongoose")

const userController=require("./Controller/userController")
const roleController =require("./Controller/roleController")
const staffController=require("./Controller/staffController")
const maintenanceController=require("./Controller/maintenanceController")
const houseController = require("./Controller/houseController")
const sessionController = require("./Controller/sessionController")
const maintenanceMasterController = require("./Controller/maintenanceMasterController")
const placeController = require("./Controller/placeController")
const feedbackController = require("./Controller/feedbackController")
const eventController = require("./Controller/eventController")
const memberController = require("./Controller/memberController")
const nonMemebrController = require("./Controller/NonMemberController")
const adminApiController=require("./Controller/adminApiController")




const app = express()  

app.use(express.json())
app.use(express.urlencoded({extended:true}))


//Session Api
app.get("/session", sessionController.getAllUsers)
app.post("/login", sessionController.login)

//Admin Api
app.post("/admin", adminApiController.addAdmin)
app.put("/admin", adminApiController.updateAdmin)
app.get("/admin", adminApiController.getAllAdmins)
app.delete("/admin/:id", adminApiController.deleteAdmin)

//User Api
app.get("/user", userController.getAllUsers)
app.post("/user", userController.addUser)
app.put("/user", userController.updateUser)
app.delete("/user/:userId", userController.deleteUser)
app.post("/forgetPassword", userController.forgetPassword)
app.post("/updatepassword", userController.updatePassword)

//Role Api
app.get("/role", roleController.getAllRoles)
app.post("/role", roleController.addRole)
app.put("/role", roleController.updateRole)
app.delete("/role/:roleId", roleController.deleteRole)

//Staff Api
app.get("/staff", staffController.getAllStaff)
app.post("/staff", staffController.addStaff)
app.put("/staff", staffController.updateStaff)
app.delete("/staff/:staffId", staffController.deleteStaff)

//Maintenance Api
app.get("/maintenance", maintenanceController.getAllMaintenance)
app.post("/maintenance", maintenanceController.addMaintenance)
app.put("/maintenance", maintenanceController.updateMaintenance)
app.delete("/maintenance/:maintenanceId", maintenanceController.deleteMaintenance)

//Maintenance Master Api
app.get("/maintenanceMaster", maintenanceMasterController.getAllMaintenance)
app.post("/maintenanceMaster", maintenanceMasterController.addMaintenance)
app.put("/maintenanceMaster", maintenanceMasterController.updateMaintenance)

//House Api
app.get("/house", houseController.getAllHouses)
app.post("/house", houseController.addHouse)
app.put("/house", houseController.updateHouse)
app.delete("/house/:houseId", houseController.deletehouse)

//Place Api
app.get("/place", placeController.getAllPlaces)
app.post("/place", placeController.addPlace)
app.put("/place", placeController.updatePlace)
app.delete("/place/:placeId", placeController.deletePlace)

//event Api
app.post("/event", eventController.addEvent)
app.put("/event", eventController.updateEvent)
app.get("/event", eventController.getAllEvents)
app.delete("/event/:eventId", eventController.deleteEvent)
app.get("/getEventByDate/:startDate/:endDate/:place",eventController.getCheckDate)



//Feedback Api
app.post("/feedback", feedbackController.addfeedback)
app.put("/feedback", feedbackController.updatefeedback)
app.get("/feedback", feedbackController.getAllfeedback)
app.delete("/feedback/:feedbackId", feedbackController.deletefeedback)

//Member Api
app.post("/member", memberController.addMember)
app.put("/member", memberController.updateMember)
app.get("/member", memberController.getAllMembers)
app.delete("/member/:memberId", memberController.deleteMember)

//NonMember Api
app.post("/nonmember", nonMemebrController.addNonMember)
app.put("/nonmember", nonMemebrController.updateNonMember)
app.get("/nonmember", nonMemebrController.getAllNonMember)
app.delete("/nonmember/:nonmemberId", nonMemebrController.deleteNonMember)


mongoose.connect("mongodb://127.0.0.1:27017/e-society-24",function(err){
    if(err)
    {
        console.log(err)
        console.log("Something Went Wrong....")
    }
    else{
        console.log("db Connected!!")
    }
})


app.listen(3000,function(err){
    if(err)
    {
        console.log(err)
        console.log("Something Went Wrong....")
    }
    else{
        console.log("Server Connected at port number 3000")
    }
})