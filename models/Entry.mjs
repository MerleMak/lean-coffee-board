import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      minlength: 2,
    },
    author: {
      type: String,
      default: 'Anonymous',
    },
    color: {
      type: String,
      default: '#3EA2B9',
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model('Entry', schema);
