import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'

import { createRoles } from './libs/initialSetup'

import userstatesroutes from './routes/userstate.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'

const app = express()
createRoles();



app.set('pkg', pkg);


//esto nos mostrara las diferentes tipos de solicitudes que se hagan al servidor
app.use(morgan('dev'));
//esto es para que pueda interpretar los archivos en formato json
app.use(express.json());

app.get('/', (req, res)=> {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use("/api/states", userstatesroutes);

app.use("/api/auth", authRoutes);

app.use('/api/users', userRoutes)

export default app;

