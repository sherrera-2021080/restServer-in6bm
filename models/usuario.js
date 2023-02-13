const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción del producto es obligatoria' ],
        unique: true
    },
    tipo: {
        type: String,
        required: [true, 'El tipo de producto es obligatorio' ]
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
});


module.exports = model('Usuario', UsuarioSchema);