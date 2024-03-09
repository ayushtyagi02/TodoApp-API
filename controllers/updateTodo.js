const Todo = require('../models/Todo');

exports.updateTodo= async(req,res)=>{
    try{
        const {id}=req.params;
        const {title,description}=req.body;
       
        const todo= await Todo.findByIdAndUpdate({_id:id    },
            {title,description,updatedAt: Date.now()});
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
                data:{title,description},
                message:"Updated successfully"
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