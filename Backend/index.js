import express from "express"
import cors from "cors"
import mongoose from "mongoose"
// import cookieParser from 'cookie-parser';


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
// app.use(cookieParser());


mongoose.connect("mongodb+srv://healthvault-shashwat:kbFaNLLAS7ExuCAR@cluster0.5ffu791.mongodb.net/healthvaultdatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.error("Error connecting to database", error);
  });

// mongoose
//   .connect('mongodb+srv://ShamDatabase:y!kHDKSRHeg69Bc@cluster0.5ffu791.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('DB connected');
//   })
//   .catch((error) => {
//     console.error('Error connecting to database', error);
//   });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

const patientSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    gender: String,
    email: String,
    phone: String,
    address: String,
    medicalHistory: String,
    allergies: String,
    previousTreatments: String,
    medications: String,
  });
  
  const Patient = new mongoose.model('Patient', patientSchema);


//Routes
let sharedVariable;
function setSharedVariable(req, res, next) {
  sharedVariable = req.body.email;
  next();
}
app.post("/login", setSharedVariable,(req, res) => {
   
  const { email, password } = req.body;
    User.findOne({ email: email })
      .then((user) => {
        if (user) {
          if (password === user.password) {
            // res.cookie('email', user.email);
            res.send({ message: "Login successful", user: user });
            sharedVariable = req.body.email;
            
          //   app.get("/getAllUser",async (req, res) => {
          //     try {
          //       const  allUser=await Patient.findOne({email: email});
          //       // const allUser = await Patient.findOne({ email: email });
          //       res.send({status:"ok",data:allUser});
             
          //     } catch (error) {
          //       console.log(error);
          //     }
          // })

          } else {
            res.send({ message: "Password did not match" });
          }
        } else {
          res.send({ message: "User not registered" });
        }
      })
      .catch((error) => {
        console.error("Error querying user", error);
      });
  });
  
  app.post("/patientData", (req, res)=> {
    const { firstName,lastName,dateOfBirth,gender, email,phone,address,medicalHistory,allergies,previousTreatments,medications } = req.body;

    Patient.findOne({ email: email })
      .then((existingUser) => {
        if (existingUser) {
          res.send({ message: "User already registered" });
        } else {
          const patient = new Patient({
            firstName,
            lastName,
            dateOfBirth,
            gender,
            email,
            phone,
            address,
            medicalHistory,
            allergies,
            previousTreatments,
            medications,
        
          });
          patient.save()
            .then(() => {
              res.send({ message: "Data Inserted successfully" });
            })
            .catch((error) => {
              res.send(error);
            });
        }
      })
      .catch((error) => {
        console.error("Error querying user", error);
      });
});


app.post("/register", (req, res)=> {
    const { name, email, password } = req.body;

    User.findOne({ email: email })
      .then((existingUser) => {
        if (existingUser) {
          res.send({ message: "User already registered" });
        } else {
          const user = new User({
            name,
            email,
            password,
          });
          user.save()
            .then(() => {
              res.send({ message: "Successfully registered, please login now" });
            })
            .catch((error) => {
              res.send(error);
            });
        }
      })
      .catch((error) => {
        console.error("Error querying user", error);
      });
});

// const email = req.cookies.email;
app.get("/getAllUser",async (req, res) => {
  // const email = req.params.email;
    try {
      const  allUser=await Patient.find({email:sharedVariable});
      // const allUser = await Patient.findOne({ email: email });
      res.send({status:"ok",data:allUser});
    } catch (error) {
      console.log(error);
    }
})

app.get('/health-tips', async (req, res) => {
  try {
    // fetch health tips data from API
    const response = await axios.get('https://api.nutritionix.com/v1_1/search/healthtips?results=20&fields=item_name,item_description&appId=071893ea&appKey=ed8be591af3b78f668716a9b39a4c286');

    // send response with data
    res.send(response.data.hits);
  } catch (error) {
    // handle error
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

const PORT=process.env.PORT || 9000;
app.listen(PORT,() => {
    console.log("BE started at port 9000")
})