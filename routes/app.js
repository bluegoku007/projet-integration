const express = require('express');

const appController = require('../controllers/app');

const router = express.Router();

router.get('/', appController.getAllapp);
router.post('/', appController.postapp);

router.put('/', appController.putapp);

router.delete('/:id', appController.deleteapp);

module.exports = router;