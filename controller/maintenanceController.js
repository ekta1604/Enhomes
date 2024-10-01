const MaintenanceModel=require("../Model/maintenanceModel")
const validator=require("validator")

//add Maintenance
module.exports.addMaintenance=function(req,res){
    let house=req.body.house
    let creationDate=new Date(req.body.creationDate)
    let month=req.body.month
    let maintenanceAmount=req.body.maintenanceAmount
    let maintenancePaid=req.body.maintenancePaid
    let paymentDate=new Date(req.body.paymentDate)
    let lastDate=new Date(req.body.lastDate)
    let penalty=req.body.penalty

    let isError=false;
    let err=[];

    let maintenance=new MaintenanceModel({
        "house":house,
        "creationDate":creationDate,
        "month":month,
        "maintenanceAmount":maintenanceAmount,
        "maintenancePaid":maintenancePaid,
        "paymentDate":paymentDate,
        "lastDate":lastDate,
        "penalty":penalty
    })

    if(validator.isDate(new Date(creationDate))==false)
    {
        isError=true;
        err.push({
            "CreationDate Error":"Enter Valid Date"
        })
    }
    let mth=month.toLowerCase()
    if(mth != "january" && mth != "february" &&  mth != "march" && mth != "april" && mth != "may" && mth != "june" && mth != "july" && mth != "august" && mth != "september" && mth != "october" && mth != "november" && mth != "december")
    {
        isError=true;
        err.push({
            "Month Error":"Enter Valid Month"
        })
    }
    if(validator.isNumeric(maintenanceAmount)==false)
    {
        isError=true;
        err.push({
            "MaintenanceAmount Error":"Enter Valid Amount"
        })
    }
    if(validator.isDate(paymentDate)==false)
    {
        isError=true;
        err.push({
            "PaymentDate Error":"Enter Valid Date"
        })
    }
    if(validator.isDate(lastDate)==false)
    {
        isError=true;
        err.push({
            "LastDate Error":"Enter Valid Date"
        })
    }
    if(validator.isNumeric(penalty)==false)
    {
        isError=true;
        err.push({
            "Penalty Error":"Enter Valid Amount"
        })
    }



    if(isError)
    {
        res.json({
            "status":-1,
            "data":err,
            "msg":"Something went Wrong..."
        })
    }
    else
    {
        maintenance.save(function(err,data){
            if(err)
            {
                res.json({
                    "status":-1,
                    "data":err,
                    "msg":"Something went Wrong.."
                })
            }
            else
            {
                res.json({
                    "status":200,
                    "data":data,
                    "msg":"Maintenance Entry Added!!"
                })
            }
        })
    }
   
}



//update Maintenance
module.exports.updateMaintenance=function(req,res){
    let maintenanceId=req.body.maintenanceId
    let creationDate=new Date(req.body.creationDate)
    let month=req.body.month
    let maintenanceAmount=req.body.maintenanceAmount
    let maintenancePaid=req.body.maintenancePaid
    let paymentDate=new Date(req.body.paymentDate)
    let lastDate=new Date(req.body.lastDate)
    let penalty=req.body.penalty

    let isError=false;
    let err=[];

    if(validator.isDate(new Date(creationDate))==false)
    {
        isError=true;
        err.push({
            "CreationDate Error":"Enter Valid Date"
        })
    }
    let mth=month.toLowerCase()
    if(mth != "january" && mth != "february" &&  mth != "march" && mth != "april" && mth != "may" && mth != "june" && mth != "july" && mth != "august" && mth != "september" && mth != "october" && mth != "november" && mth != "december")
    {
        isError=true;
        err.push({
            "Month Error":"Enter Valid Month"
        })
    }
    if(validator.isNumeric(maintenanceAmount)==false)
    {
        isError=true;
        err.push({
            "MaintenanceAmount Error":"Enter Valid Amount"
        })
    }
    if(validator.isDate(new Date(paymentDate))==false)
    {
        isError=true;
        err.push({
            "PaymentDate Error":"Enter Valid Date"
        })
    }
    if(validator.isDate(new Date(lastDate))==false)
    {
        isError=true;
        err.push({
            "LastDate Error":"Enter Valid Date"
        })
    }
    if(validator.isNumeric(penalty)==false)
    {
        isError=true;
        err.push({
            "Penalty Error":"Enter Valid Amount"
        })
    }

    

    if(isError)
    {
        console.log(err)
        res.json({
            "status":-1,
            "data":err,
            "msg":"Something went Wrong..."
        })
    }
    else
    {
        MaintenanceModel.updateOne({_id:maintenanceId},{creationDate:creationDate,month:month,
            maintenanceAmount:maintenanceAmount,maintenancePaid:maintenancePaid,paymentDate:paymentDate,
            lastDate:lastDate,penalty:penalty},function(err,data){
            if(err)
            {
                console.log(err)
                res.json({
                    "status":-1,
                    "data":err,
                    "msg":"Something went Wrong..."
                })
            }
            else
            {
                res.json({
                    "status":200,
                    "data":data,
                    "msg":"Maintenance Entry Updated!!"
                })
            }
        })
    }

}



//Delete Maintenance
module.exports.deleteMaintenance=function(req,res){
    let maintenanceId=req.params.maintenanceId

    MaintenanceModel.deleteOne({_id:maintenanceId},function(err,data){
        if(err)
        {
            console.log(err)
            res.json({
                "status":-1,
                "data":err,
                "msg":"Something went Wrong..."
            })
        }
        else
        {
            res.json({
                "status":200,
                "data":data,
                "msg":"Maintenance Entry Deleted!!"
            })
        }
    })
}


//List Maintenance
module.exports.getAllMaintenance=function(req,res){
    MaintenanceModel.find().populate("house").exec(function(err,data){
        if(err)
        {
            console.log(err)
            res.json({
                "status":-1,
                "data":err,
                "msg":"Something went Wrong..."
            })
        }
        else
        {
            res.json({
                "status":200,
                "data":data,
                "msg":"Maintenance Entries Retrived!!"
            })
        }
    })
}