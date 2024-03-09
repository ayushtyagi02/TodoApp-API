const Todo = require('../models/Todo');

exports.deleteTodo= async(req,res)=>{
    try{
        const {id}=req.params;
       
        const response= await Todo.findByIdAndDelete({_id:id });
        if(!response){
            return res.status(404).json({
                success: false,
                message:'No data found by this ID'
            })
    
           }
        //send a json response with a success flag 

        res.status(200).json(
            {
                success:true,
                data:response,
                message:`Record with ID ${id} was deleted successfully`
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