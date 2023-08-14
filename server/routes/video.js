import express  from 'express'
import { uploadVideo,getAllvideos } from '../controllers/video.js';
import upload from '../Helper/fileHelper.js'

const routes=express.Router();
routes.post("/uploadVideo",upload.single('file'),uploadVideo)
routes.get("/getvideos",getAllvideos)
export default routes;