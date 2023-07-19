import express from 'express';
const router = express.Router();

import {regiserStudent  , signStudent } from "../controllers/userCon";

router
.post('/save-student' , regiserStudent)
.post('/sign-student' , signStudent)
// .post('/sign-in' , signIn)

export default router;