import mongoose from 'mongoose';
import { ContactSchema } from '../models/model';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        
        res.json(contact);
    });
}

export const getContacts = (req, res) => {
    Contact.find((err, contact) => {
        if (err) {
            res.send(err);
        }        
        res.json(contact);
    });
}

export const getContactWithId = (req, res) => {
    Contact.findById(req.params.id, (err, contact) => {
        if (err) {
            res.send(err);
        }        
        res.json(contact);
    });
}

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id:req.params.id }, req.body, {new : true}, (err, contact) => {
        if (err) {
            res.send(err);
        }        
        res.json(contact);
    });
}
export const deleteContact = (req, res) => {
    Contact.remove({ _id:req.params.id }, (err, contact) => {
        if (err) {
            res.send(err);
        }        
        res.json({message : 'contact deleted' });
    });
}