const mongoose = require("mongoose");
const userSchema=mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String,
    password: String,
    type: String,
    companyName: String,
    path:String
});


const userCollection=mongoose.model("users",userSchema);
module.exports={
    create:(fields)=>{
       const user=new userCollection(fields);
       return user.save();
    },
    getAll:()=>userCollection.find(),
    deleteById:(userid)=> userCollection.deleteOne({_id:userid}),
     update:(id,fields)=>userCollection.updateMany({emailId:id},{$set:{firstName:fields.body.firstName ,lastName:fields.body.lastName , path:fields.file.path}} ),  
     hasvalidUser: (email, pwd)=> {
         return userCollection.find({emailId: email, password: pwd});
      },
    find:(email)=>userCollection.find({emailId:email})
}
