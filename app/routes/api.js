import {
    addNewContact,
    getContacts,
    getContactWithId,
    updateContact,
    deleteContact
} from '../controllers/controller';

const uri = "/app";

const routes = (app) => {
    app.route(uri)
        .get((req, res, next) => {
            //middleware
            console.log(`Request de : ${req.originalUrl}`);
            console.log(`Request de : ${req.method}`);
            next();
        }, getContacts)//get all contacts

        //add new  contact      
        .post(addNewContact);
    
    app.route(uri + '/:id')
        //get contact  with id
        .get(getContactWithId)
        
        //update contact
        .put(updateContact)
        
            //delete contact
        .delete(deleteContact)
}

export default routes;