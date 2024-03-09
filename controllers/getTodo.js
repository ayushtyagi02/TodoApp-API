const Todo = require('../models/Todo');

exports.getTodo= async(req,res)=>{
    try{
        
        const todos= await Todo.find({});
       
        //send a json response with a success flag 
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:"Entire todos are fetched"
            }
        )
        }
        catch(err){
            console.error(err);
            res.status(500).json({
                success:false,
                data:"Server error",
                message:err.message,
                
            })
        }
}
exports.getTodobyID= async(req,res)=>{
    try{
        const id= req.params.id;
        const todo= await Todo.findById({_id:id});
       if(!todo){
        return res.status(404).json({
            success: false,
            message:'No data found by this ID'
        })

       }
        //send a json response with a success flag 
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:`Todos by ID ${id}`
            }
        )
        }
        catch(err){
            console.error(err);
            res.status(500).json({
                success:false,
                data:"Server error",
                message:err.message,
                
            })
        }
}