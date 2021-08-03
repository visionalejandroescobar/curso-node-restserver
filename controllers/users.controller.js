const{response}=require('express');

const usersGet = (req=request, res=response)=>{

    const {q, nombre='no name', apikey, page=1, limit}=req.query;

    res.json({
        msg: 'get Api - controller',
        q,
        nombre,
        apikey,
        page, 
        limit
    });
}

const usersPost = (req, res=response)=>{

    const {nombre, edad, sexo} = req.body;

    res.json({
        msg: 'POST Api - post controller',
        nombre,
        edad,
        sexo
    });
}

const usersPut = (req, res=response)=>{

    const id = req.params.id;

    res.json({
        msg: 'PUT Api - put controller',
        id
    });
}

const usersDelete = (req, res=response)=>{
    res.json({
        msg: 'DELETE Api - delete controller'
    });
}

module.exports={
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}