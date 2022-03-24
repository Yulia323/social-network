import express from 'express'
import router from './router.js';
import mongoose from 'mongoose'
import { authRouter } from './modules/auth/auth-router.js'
import fileUpload from 'express-fileupload'
import cors from "cors";

const PORT = 5000;
const DB_URL = `mongodb+srv://user:user@cluster0.l4qfi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express()

app.use(cors());
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)
app.use('/auth', authRouter)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
        app.listen(PORT, () => console.log('Работает'))
    } catch (e) {
        console.log(e)
    }
}

startApp()
