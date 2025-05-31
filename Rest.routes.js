import express from "express";
const router = express.Router();
import * as rest from "./Rest.controllers.js";

router.get('/',rest.GetAllUsers);
router.post('/create', rest.CreateUser);
router.put('/update', rest.updatUser);
router.delete('/delete', rest.deleteUser);
router.patch('/patch', rest.patchUser);
export default router;