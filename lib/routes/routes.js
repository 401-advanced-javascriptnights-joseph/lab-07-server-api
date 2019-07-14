'use strict';

const express = require('express');

const router = express.Router();

let db = [];

// Route to Get All Categories
router.get('/categories', (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results });
});

// Route to Get One Category
router.get('/categories/:id', (req,res,next) => {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
});

// Route to Create a Category
router.post('/category', (req,res,next) => {
  let {name,author,title,article} = req.body;
  let record = {name,author,title,article};
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
});

// Route to Delete a Category
router.delete('/category/:id', (req,res,next) => {
  let id = req.params.id;
  db = db.filter( (record) => record.id !== parseInt(id) );
  res.json({});
});

// Route to Update a Category
router.put('/category/:id', (req,res,next) => {
  let id = req.params.id;
  let {name,author,title,article} = req.body;
  let updatedRecord = {name,author,title,article};
  db = db.map( (record) => (record.id === parseInt(id)) ? updatedRecord : record );
  res.json(updatedRecord);
});