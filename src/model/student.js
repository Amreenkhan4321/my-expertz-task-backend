import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['placed', 'not_placed'],
    default: 'not_placed'
  },
  
  batch: {
    type: String,
    required: true
  },
  scores: {
    dsaScore: {
      type: Number,
      default: 0
    },
    webDScore: {
      type: Number,
      default: 0
    },
    reactScore: {
      type: Number,
      default: 0
    }
  },
  isActive: {
    type: Boolean,
    require: false,
    default: true,
  },
  isDeleted: {
    type: Boolean,
    require: false,
    default: false,
  },
},{ timestamps: true });

const Student = mongoose.model("Student",studentSchema)
export {Student}