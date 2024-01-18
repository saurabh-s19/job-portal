const express =require("express");
const userRoute = require("./routes/userRoute");
const jobRoute=require("./routes/jobRoute")
const db=require("./database")
const multer=require('multer');
const cors = require('cors');


const app=express();
app.use(cors());
app.use(express.json());
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
app.use("/user",upload.single('file'), userRoute);
app.use("/job",jobRoute);
app.listen(5000,()=>{
    console.log("successfully connected");
})
