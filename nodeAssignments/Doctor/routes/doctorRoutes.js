const express = require('express');
const router = express.Router();
const doctorCtrl = require('../controllers/doctorController');

router.post('/', doctorCtrl.createDoctor);
router.get('/:id/patients', doctorCtrl.getDoctorPatients);
router.get('/:id/consultations/count', doctorCtrl.getDoctorConsultationCount);
router.delete('/:id', doctorCtrl.softDeleteDoctor);

module.exports = router;
