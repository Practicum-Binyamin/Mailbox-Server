const userModel = require('../models/user.model')

async function readByFlags(id, flags = [], populate = {}) {

    let data = await userModel.findOne({ _id: id, isActive: true })
    data.chats = data.chats.filter(c => flags.every(f => {
        if (typeof f === 'object') {
            let [[k, v]] = Object.entries(f)
            return c[k] == v
        }
        return c[f]
    }))
    if (populate.chats) data = await data.populate('chats.chat')
    if (populate.users) data = await data.populate({ path: 'chats.chat.to', select: "fullName avatar" })
    // if (populate.users) data = await data.populate('chats.chat.to');

    return data.toObject()
}



module.exports = { readByFlags }