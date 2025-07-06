const Patient = require('../models/patient');
const Consultation = require('../models/consultation');

exports.createPatient = async (req, res) => {
  const patient = await Patient.create(req.body);
  res.status(201).json(patient);
};

exports.getPatientDoctors = async (req, res) => {
  const consultations = await Consultation.find({ patientId: req.params.id, isActive: true })
    .populate('doctorId', 'name specialization');

  res.json(consultations.map(c => c.doctorId));
};

exports.getMalePatients = async (req, res) => {
  const patients = await Patient.find({ gender: "Male", isActive: true });
  res.json(patients);
};

exports.softDeletePatient = async (req, res) => {
  await Patient.findByIdAndUpdate(req.params.id, { isActive: false });
  await Consultation.updateMany({ patientId: req.params.id }, { isActive: false });
  res.json({ message: "Patient and related consultations marked inactive" });
};

