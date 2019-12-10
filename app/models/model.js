import mongoose from 'mongoose';
import { stringify } from 'querystring';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type:String,
        required: 'Entrer un nom'
    },
    lastName: {
        type:String,
        required: 'Entrer un prénom'
    },
    email: {
        type:String,
    },
    company: {
        type:String,
    },
    phone: {
        type:Number,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})