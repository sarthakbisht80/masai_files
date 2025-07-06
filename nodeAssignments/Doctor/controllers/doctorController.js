const Doctor = require('../models/doctor');
const Consultation = require('../models/consultation');

exports.createDoctor = async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.status(201).json(doctor);
};

exports.getDoctorPatients = async (req, res) => {
  const consultations = await Consultation.find({ doctorId: req.params.id, isActive: true })
    .populate('patientId', 'name age gender')
    .sort({ consultedAt: -1 })
    .limit(5);

  res.json(consultations.map(c => c.patientId));
};

exports.getDoctorConsultationCount = async (req, res) => {
  const count = await Consultation.countDocuments({ doctorId: req.params.id, isActive: true });
  res.json({ count });
};

exports.softDeleteDoctor = async (req, res) => {
  await Doctor.findByIdAndUpdate(req.params.id, { isActive: false });
  await Consultation.updateMany({ doctorId: req.params.id }, { isActive: false });
  res.json({ message: "Doctor and related consultations marked inactive" });
};
