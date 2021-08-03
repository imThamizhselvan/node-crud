import { addNewContact,
        getAllContacts,
        getContactById,
        updateContact,
        deleteContact
 } from '../controllers/crmController';

const routes = (app) => {

  //contact apis
  app.route('/contact')
    .get((req, res, next) => {
      //middleware
      console.log(`Request from: ${req.originalUrl}`)
      console.log(`Request type: ${req.method}`)
      next();
    }, getAllContacts)

    // Post endpoint
    .post(addNewContact);
  
  app.route('/contact/:contactID')
    // get a specific contact
    .get(getContactById)
    // update a specific contact
    .put(updateContact)
    // delete a specific contact
    .delete(deleteContact)
}

export default routes;