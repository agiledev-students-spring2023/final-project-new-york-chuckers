import mongoose from "mongoose";
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    id: {
      type: String,
      required:false,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    skills: {
      type: String,
      required: true,
    },
    wantWork: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    companies: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// create mongoose Model
export const Profile = mongoose.model("Profile", profileSchema);
