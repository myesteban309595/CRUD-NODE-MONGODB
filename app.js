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

},{versionKey : false})

const personaModel = mongoose.model('personas', personaSchema);

//* mostrar

const mostrar = async () => {

    const personas = await personaModel.find();
    console.log(personas);
}

//* crear

const crear = async ()=> {
    const persona = new personaModel({
        nombre : "casimiro",
        edad: 45,
        pais: "panama"
    })

    const resultado = await persona.save()
    console.log(resultado)
}

//* editar

const actualizar = async (id)=> {
    const persona = await personaModel.updateOne({

        _id : id
    },
    {
        $set:{
            nombre: "nombre modificado",
            edad : 1,
            pais : "pais modificado"
        }
    }
    )
}

//* eliminar

const eliminar = async (id)=> {
    const persona = await personaModel.deleteOne({

        _id : id
    }
    )
}
//mostrar();
//crear();
//actualizar('6216f6a5b756acfd7476af1e');
eliminar('6216f6a5b756acfd7476af1d')