const Consultation = require('../models/consultation');
const Doctor = require('../models/doctor');
const Patient = require('../models/patient');

exports.createConsultation = async (req, res) => {
  const { doctorId, patientId, notes } = req.body;

  const doctor = await Doctor.findOne({ _id: doctorId, isActive: true });
  const patient = await Patient.findOne({ _id: patientId, isActive: true });

  if (!doctor || !patient) {
    return res.status(400).json({ error: "Doctor or Patient is inactive or doesn't exist." });
  }

  const consultation = await Consultation.create({ doctorId, patientId, notes });
  res.status(201).json(consultation);
};

exports.getRecentConsultations = async (req, res) => {
  const consultations = await Consultation.find({ isActive: true })
    .sort({ consultedAt: -1 })
    .limit(5)
    .populate('doctorId', 'name')
    .populate('patientId', 'name');

  res.json(consultations);
};
