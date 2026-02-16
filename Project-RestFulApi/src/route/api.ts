import express from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { UserController } from "../controller/user-controller";
import { ContactController } from "../controller/contact-controller";
import { AddressController } from "../controller/address-controller";


export const apiRouter = express.Router();
apiRouter.use(authMiddleware); 

//users
apiRouter.get('/api/users/current', UserController.get);
apiRouter.patch('/api/users/current', UserController.update);
apiRouter.delete('/api/users/current', UserController.logout);

//contact
apiRouter.post('/api/contacts', ContactController.create);
apiRouter.get('/api/contacts/:contactId', ContactController.get); 
apiRouter.put('/api/contacts/:contactId', ContactController.update);
apiRouter.delete('/api/contacts/:contactId', ContactController.remove);
apiRouter.get('/api/contacts', ContactController.search);

//address
// Address
apiRouter.post('/api/contacts/:contactId/addresses', AddressController.create);
apiRouter.get('/api/contacts/:contactId/addresses', AddressController.list);
apiRouter.get('/api/contacts/:contactId/addresses/:addressId', AddressController.get);
apiRouter.put('/api/contacts/:contactId/addresses/:addressId', AddressController.update);
apiRouter.delete('/api/contacts/:contactId/addresses/:addressId', AddressController.remove);