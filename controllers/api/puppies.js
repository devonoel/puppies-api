let Puppy = require('../../models/puppy');

module.exports = {
  getAllPuppies, getOnePuppy,
  createPuppy, updatePuppy,
  deletePuppy
}

function getAllPuppies(req, res, next) {
  Puppy.find({}).then(function(puppies) {
    res.status(200).json(puppies);
  });
}

function getOnePuppy(req, res, next) {
  Puppy.findById(req.params.id).then(function(puppy) {
    res.status(200).json(puppy);
  });
}

function createPuppy(req, res, next) {
  Puppy.create(req.body).then(function(puppy) {
    res.status(201).json(puppy);
  })
}

function deletePuppy(req, res, next) {
  Puppy.findByIdAndRemove(req.params.id).then(function(puppy) {
    res.status(200).json(puppy);
  })
}

function updatePuppy(req, res, next) {
  Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(puppy) {
    res.status(200).json(puppy);
  })
}
