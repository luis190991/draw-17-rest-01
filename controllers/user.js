'use strict'
const express = require('express');
const User = require('../models/user');
const log4js = require('log4js');
const logger = log4js.getLogger();

function index(req, res, next) {
  logger.debug("INDEX");
  User.find({},(err, users)=>{
    res.render('users/index', {'users':users, 'status': res.locals.status});
  });
}

function newUser(req, res, next){
  logger.debug("NEW");

  const user = {
  'usuario':'',
  'nombre':'',
  'primerApellido':'',
  'segundoApellido':'',
  'password':''};

  res.render('users/new', {'user':user});
}

function create(req, res, next){
  logger.debug("CREATE");

  console.log(req.body.usuario);
  console.log(req.body.nombre);
  console.log(req.body.primerApellido);
  console.log(req.body.segundoApellido);

  let user = new User({
    usuario: req.body.usuario,
    nombre: req.body.nombre,
    primerApellido: req.body.primerApellido,
    segundoApellido: req.body.segundoApellido,
    password: req.body.password
  });

  let code = '';
  let message = '';
  user.save((err, object)=>{
    if(err){
      code = 'danger';
      message = 'No se ha podido guardar el usuario.';
    }else{
      code = 'success';
      message = 'Usuario creado Correctamente.';
    }

    res.locals.status = {
      code:code,
      message:message
    };
    next();
  });
}

function show(req, res, next){
  console.log("SHOW");
  User.findOne({_id:req.params.id},(err, user)=>{
    res.render('users/show', {'user':user});
  });

}

function edit(req, res, next){
  console.log("EDIT");
  User.findOne({_id:req.params.id},(err, user)=>{
    res.render('users/edit', {'user':user});
  });
}

function update(req, res, next){
  console.log("UPDATE");
  res.locals.status = {
    code:'success',
    message:'Usuario actualizado Correctamente.'
  };
  next();
}

function destroy(req, res, next){
  console.log("DESTROY");
  res.locals.status = {
    code:'success',
    message:'Usuario eliminado Correctamente.'
  };
  next();
}



module.exports = {
  index,
  newUser,
  create,
  show,
  edit,
  update,
  destroy
};
