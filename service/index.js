const express =require("express");
const multer  = require('multer')
const userRoute = require("./routes/userRoute");
const jobRoute=require("./routes/jobRoute")
const db=require("./database")
const cors = require('cors');

const app=express();
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // The directory where files will be stored
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // File naming
    },
  });
  
  const upload = multer({ storage: storage });
 

app.use("/user",upload.single('file'),userRoute);
app.use("/job",jobRoute);
app.listen(5000,()=>{
    console.log("successfully connected");
})
