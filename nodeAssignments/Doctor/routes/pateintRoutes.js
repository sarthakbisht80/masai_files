const express = require('express');
const router = express.Router();
const patientCtrl = require('../controllers/patientController');

router.post('/', patientCtrl.createPatient);
router.get('/:id/doctors', patientCtrl.getPatientDoctors);
router.get('/', patientCtrl.getMalePatients);
router.delete('/:id', patientCtrl.softDeletePatient);

module.exports = router;
