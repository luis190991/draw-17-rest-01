'use strict'
const express = require('express');

function index(req, res, next) {
  console.log("INDEX");
  const users =[
    {'id':1,
    'usuario':'luis19',
    'nombre':'Luis',
    'primerApellido':'Ramirez',
    'segundoApellido':'Martinez'},

      {'id':2,
     'usuario':'david02',
     'nombre':'David',
     'primerApellido':'Lopez',
     'segundoApellido':'Perez'},

     {'id':3,
    'usuario':'jorge20',
    'nombre':'Jorge',
    'primerApellido':'Rodriguez',
    'segundoApellido':'Portillo'}
  ];
  res.render('users/index', {'users':users, 'status': res.locals.status});
}

function newUser(req, res, next){
  console.log("NEW");

  const user = {
  'usuario':'',
  'nombre':'',
  'primerApellido':'',
  'segundoApellido':''};

  res.render('users/new', {'user':user});
}

function create(req, res, next){
  console.log("CREATE");

  console.log(req.body.usuario);
  console.log(req.body.nombre);
  console.log(req.body.primerApellido);
  console.log(req.body.segundoApellido);
  res.locals.status = {
    code:'success',
    message:'Usuario creado Correctamente.'
  };
  next();
}

function show(req, res, next){
  console.log("SHOW");
  const user = {'id':1,
  'usuario':'luis19',
  'nombre':'Luis',
  'primerApellido':'Ramirez',
  'segundoApellido':'Martinez'};
  res.render('users/show', {'user':user});
}

function edit(req, res, next){
  console.log("EDIT");
  const user = {'id':1,
  'usuario':'luis19',
  'nombre':'Luis',
  'primerApellido':'Ramirez',
  'segundoApellido':'Martinez'};
  res.render('users/edit', {'user':user});
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
