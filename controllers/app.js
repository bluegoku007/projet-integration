const app = require('../models/app');

exports.getAllapp = async (req, res, next) => {
  try {
    const [allapp] = await app.fetchAll();
    res.status(200).json(allapp);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postapp = async (req, res, next) => {
  try {
    const postResponse = await app.post(req.body.firstname,req.body.lastname,req.body.email,req.body.phone,req.body.password,req.body.type);
    res.status(201).json(postResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.putapp = async (req, res, next) => {
  try {
    const putResponse = await app.put(req.body.firstname,req.body.lastname,req.body.phone,req.body.email,req.body.password,req.body.type);
    res.status(200).json(putResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteapp = async (req, res, next) => {
  try {
    const deleteResponse = await app.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};