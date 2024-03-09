const Todo = require('../models/Todo');

exports.createTodo= async(req,res)=>{
    try{
        //extract title and desc from body
        const {title,description}=req.body;
        //create todo obj and insert in DB
        const response= await Todo.create({title,description});
        console.log(description);
        //send a json response with a success flag 
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry Created Successfully"
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