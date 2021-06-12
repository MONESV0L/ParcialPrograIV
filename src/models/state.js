import {Schema, model} from 'mongoose'

const stateSchema = new Schema({
    UserName: String,
    StateUser: String,
    Description: String,
    imgUrl: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('state', stateSchema);