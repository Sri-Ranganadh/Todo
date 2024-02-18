const express = require('express')
const zod = require('zod')
const {Todos,User} = require('../db')
const { authMiddleware } = require('../middleware/authMiddleware')


const router = express.Router()

const createTodoBody = zod.object({
    title : zod.string(),
    description : zod.string()
})

router.post('/create',authMiddleware,async(req,res)=>{
    const check = createTodoBody.safeParse(req.body)
    if(!check.success){
        return res.status(411).json({
            message : "Incorrect inputs"
        })
    }

    const todo = await Todos.create({
        title : req.body.title,
        description : req.body.description
    })
    console.log(`Todo id: ${todo._id}`)

    const getUser = await User.findOne({_id : req.userId})
    getUser.todos.push(todo._id)
    await getUser.save()
    res.json({
        message: "Todo created successfully"
    })
})

const updateTodoBody = zod.object({
    todoId : zod.string(),
    title : zod.string().optional(),
    description : zod.string().optional(),
    isDone : zod.boolean().optional()
})

router.post('/update',authMiddleware,async(req,res)=>{
    const test = updateTodoBody.safeParse(req.body)
    if(!test.success){
        return res.json({
            message : "Incorrect details"
        })
    }
    const { todoId, title, description, completed } = req.body
    const todo = await Todos.findOne({
        _id : todoId
    })
    if(!todo){
        return res.json({
            message : "Todo not fouond"
        })
    }
    todo.title = title || todo.title
    todo.description = description || todo.description
    todo.completed = completed!== undefined? completed : todo.completed
    todo.lastModified = new Date();

    await todo.save();
    
    res.status(200).json({
        message : "updation successful"
    })
})

const deleteTodoBody = zod.object({todoId : zod.string()})

router.post('/delete',authMiddleware,async(req,res)=>{
    const test = deleteTodoBody.safeParse(req.body)
    if(!test.success){
        return res.json({
            message : "Incorrect details"
        })
    }
    const todo = await Todos.findOne({_id : req.body.todoId})
    if(!todo){
        return res.json({
            message : "Todo not found !"
        })
    }
    const user = await User.findOne({_id : req.userId})
    let index = user.todos.indexOf(todo._id)
    if(index!=-1){
        user.todos.splice(index,1)
        await user.save()
    }
    await Todos.deleteOne({_id:req.body.todoId})

    res.json({
        message : "Successfully deleted Todo"
    })
})

router.get('/',authMiddleware,async (req,res)=>{
    const user = await User.findById(req.userId)
    if(!user){
        res.json({
            message : "Server side error!!"
        })
        res.redirect('/')
    }
    const allTodos = user.todos
    let list = []
    for(let i=0;i<allTodos.length;i++){
        const todo = await Todos.findById(allTodos[i])
        list.push(todo)
    }
    res.status(200).json({
        todos : list
    })
})

router.get('/:todoId',authMiddleware,async(req,res)=>{
    const data = await Todos.findById(req.params.todoId)
    res.json({
        todo : data
    })

})

module.exports = router