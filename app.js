const mongoose = require('mongoose');
const colors = require('colors');
const { stringify } = require('querystring');

const url = 'mongodb://localhost/mibasededatospractica'

mongoose.connect(url, {

    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true

})
.then(()=> console.log(("conectado a mongo !!").bgGreen.black))
.catch((e)=> console.log(('error de conexion : ' + e).bgRed))


const personaSchema = mongoose.Schema ({

    nombre: String,
    edad: Number,
    pais: String

})

const personaModel = mongoose.model('personas', personaSchema);

//* mostrar

const mostrar = async () => {

    const personas = await personaModel.find();
    console.log(personas);
}

mostrar();