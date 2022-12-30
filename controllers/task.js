const task=require('../models/task')

const getTask =async (req, res) => {
  try {
    const TaskSchema=await task.find({})
    res.status(200).json({TaskSchema})
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  // res.json({success:true,data:'all task '});
};
const getSingleTask = async(req, res) => {
  try {
  const singleTask = req.params.id;
  const singleTaskSchema=await task.findOne({_id:singleTask})
  if(!singleTaskSchema){
    return res.status(404).json({ msg: `No task with the id ${singleTask} ` });
  }
  res.status(200).json({singleTaskSchema})
  } catch (error) {
     res.status(500).json({ msg: error });
  }


    
  // res.json({ success: true, data: `your single ${singleTask}` });
};
const postTask =async (req, res) => {

    try {
      const schematask = await task.create(req.body);
      res.status(201).json({ schematask });  
    } catch (error) {
      res.status(500).json({msg:error})
    }
    // const {task}=req.body
    
    // res.status(201).json({success:true,data:`you created a new task which is ${task}`});
};

const deleteTask =async (req, res) => {
  try {
    const deleteSingle=req.params.id
    const deleteSingleSchema=await task.findOneAndDelete({_id:deleteSingle})
    if(!deleteSingleSchema){
      return req.status(404).json({msg:'task not found'})
    }
    res.status(200).json({deleteSingleSchema})
  } catch (error) {
    res.status(500).json({ msg: error });
  }
    // const deletedTask=req.params.id
  // res.send({ success: true, data: `you deleted a new task which is ${deletedTask}` });
};

const patchTask = async(req, res) => {
  
  try {
    const updateTaskId = req.params.id;
    // const {data}=req.body
    const updateSchema = await task.findOneAndUpdate({_id:updateTaskId},req.body,{new:true,runValidators:true});
    if (!updateSchema) {
      return req.status(404).json({ msg: "task not found" });
    }
    res.status(200).json({updateSchema})  
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  

  // const updateTask = req.params.id;
  // res.json({
  //   success: true,
  //   data: `you updated a new task which is ${updateTask}`,
  // });
};

module.exports = {getTask,getSingleTask,postTask,patchTask,deleteTask}