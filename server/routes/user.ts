import express from 'express';
const router = express.Router();

import {regiserStudent } from "../controllers/userCon";

router
.post('/save-student' , regiserStudent)
.post('/sign-student' , regiserStudent)
// .post('/sign-in' , signIn)

export default router;