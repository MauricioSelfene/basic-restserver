
const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'Sin nombre', page, limit } = req.query;

    res.json({
        mgs: 'get API - controlador',
        q,
        nombre,
        page,
        limit
    })

  }

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.status(500).json({
        mgs: 'post API - controlador',
        nombre,
        edad
    })
} 

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.status(500).json({
        mgs: 'put API - controlador', 
        id
    })
} 

const usuariosPatch = (req, res = response) => {

    res.status(201).json({
        mgs: 'patch API - controlador' 
    })
}

const usuariosDelete = (req, res = response) => {

    res.status(403).json({
        mgs: 'delete API - controlador' 
    })
}


  module.exports = {
      usuariosGet,
      usuariosPost,
      usuariosPatch,
      usuariosDelete,
      usuariosPut
  }