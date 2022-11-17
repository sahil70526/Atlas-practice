
import express from 'express';
import mongoose from 'mongoose';
// import studentContent from './student.js';
import teacherContent from './teacher.js';
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

//insertion in database by api method-------------------

app.post('/',async(req,res)=>{
  let data= await teacher_data.insertMany(teacherContent);
  
  res.send(data);
  console.log(data);
})
 
//----updating the data with api -----------------

app.put('/:_id',async(req,res)=>{
  let data= await student_data.updateOne(req.params,{$set:req.body});
  res.send(data);
console.log(data);
})

//----deleting the data with api -----------------

app.delete('/:_id',async(req,res)=>{
  let data= await student_data.deleteOne(req.params);
  res.send(data);
console.log(data);
})
//reading data from  database by api method-----------------

app.get('/',async(req,res)=>{
  let data= await teacher_data.find()
  res.send(data);
  console.log(data);
})

app.listen(3000);



