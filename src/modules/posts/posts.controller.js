import connection from "../../../db/connectionDB.js";




export const addPost= (req,res,next)=>{

    const {title,discription,price}=req.body

    const query=`insert into myposts (title,discription,price) VALUES ('${title}','${discription}','${price}')`;

    connection.execute(query,(err,result)=>{
        if(err){
        return res.status(400).json({msg:"query error",err})
        }
        if(!result.affectedRows){
        return res.status(400).json({msg:"failed to add"})
        }
        return res.status(201).json({msg:"done"})

    })
     
}

export const getPost= (req,res,next)=>{

    const query=`select * from myposts`;

    connection.execute(query,(err,result)=>{
        if(err){
        return res.status(400).json({msg:"query error",err})
        }
        return res.status(201).json(result)

    })
     
}


export const updatePost= (req,res,next)=>{

    const {id,title,discription,price}=req.body

    const query=`update myposts set title='${title}',discription='${discription}',price='${price}' where id='${id}'`;

    connection.execute(query,(err,result)=>{
        if(err){
        return res.status(400).json({msg:"query error",err})
        }
        if(!result.affectedRows){
        return res.status(400).json({msg:"failed to add"})
        }
        return res.status(201).json({msg:"done"})

    })
     
}


export const deletPost= (req,res,next)=>{

    const {id}=req.body

    const query=`delete from myposts where id='${id}'`;

    connection.execute(query,(err,result)=>{
        if(err){
        return res.status(400).json({msg:"query error",err})
        }
        if(!result.affectedRows){
        return res.status(400).json({msg:"failed to add"})
        }
        return res.status(201).json({msg:"done"})

    })
     
}


