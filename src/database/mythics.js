import mongoose from 'mongoose';

const MythicsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  powers: {
    type: [String],
    minlength: 1,
    maxlength: 5,
    required: true,
  },
  weaknesses: {
    type: [String],
    minlength: 1,
    maxlength: 5,
    required: true,
  },
  rank: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Mythics', MythicsSchema);
