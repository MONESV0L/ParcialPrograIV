import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/mercuriodb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
    .then(db => console.log('Conexion exitosa'))
    .catch(error => console.log(error))