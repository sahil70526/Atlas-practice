
import express from 'express';
import mongoose from 'mongoose';
const app = express();
app.use(express.json());

// Connection String of atlas
mongoose.connect("mongodb+srv://demo1234:demo1234@cluster0.s2lbzmy.mongodb.net/college?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true}).then(x => {
  console.log("Connection success..!!");
}).catch(err => {
  console.log(err);
});

//student schema-----------------------

const StudentSchema= new mongoose.Schema(
  {
    name: {type: String, required: true},
    faculity:{type:String, required: true},
    roll: {type: Number, required: true},
    class:{type:String, required: true},
    address:{type:String, required: true}
  }
);

const student_data = mongoose.model('students',StudentSchema);

//teachers schema-----------------------

const TeacherSchema= new mongoose.Schema(
  {
    name: {type: String, required: true},
    faculity:{type:String, required: true},
    address:{type:String, required: true}
  }
);

const teacher_data = mongoose.model('teachers',TeacherSchema);

//insertion in database

const saveInDb=async()=>{
  let data = new teacher_data({
    name:"tarun sir",
    faculity:"Full Stack",
    address:"Gurgaon"
  });

  const result = await data.save();
  console.log(result);
}
saveInDb();

app.listen(3000);


