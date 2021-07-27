import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        } else {
            res.json(contact);
        }
    });
}

export const getAllContacts = (req, res) => {
    Contact.find((err, contact) => {
        if (err) {
            res.send(err);
        } else {
            res.json(contact);
        }
    });
}

export const getContactById = (req, res) => {
    Contact.findById(req.params.contactID, (err, contact) => {
        if (err) {
            res.send(err);
        } else {
            res.json(contact);
        }
    });
}