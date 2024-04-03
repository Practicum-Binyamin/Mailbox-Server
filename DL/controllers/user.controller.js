const userModel = require('../models/user.model')

// CRUD
async function create(data) {
    return await userModel.create(data)
}
async function read(filter) {
    return await userModel.find({ ...filter, isActive: true })
}
async function readOne(filter, populate) {
    let pop = {
        chats: true,
        users: true
    }
    let data = await userModel.findOne({ ...filter, isActive: true })
    if(pop.chats) data=await data.populate('chats.chat')
    if(pop.users) data=await data.populate('chats.chat.to')
    
    return data.toObject()
}
async function update(id, data) {
    // return await userModel.findOneAndUpdate({_id:id}, data,{new : true})
    return await userModel.findByIdAndUpdate(id, data, { new: true })
}
async function del(id) {
    return await update(id, { isActive: false })
}

module.exports = { create, read, readOne, update, del }