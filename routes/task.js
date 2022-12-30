const express=require('express')
const {getTask,postTask,patchTask,deleteTask,getSingleTask}=require('../controllers/task')
const router=express.Router()
router.get('/',getTask)
router.post("/", postTask);
router.get("/:id", getSingleTask);
router.patch("/:id", patchTask);
router.delete("/:id", deleteTask);
module.exports=router