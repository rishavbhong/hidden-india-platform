import mongoose from "mongoose";

const placeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    images: [
      {
        type: String
      }
    ],

    location: {
      lat: {
        type: Number,
        required: true
      },
      lng: {
        type: Number,
        required: true
      }
    },

    verificationScore: {
      type: Number,
      default: 0
    },

    isHiddenGem: {
      type: Boolean,
      default: false
    },

    submittedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
);

/**
 * Automatically decide if it's a Hidden Gem
 * Rule: verificationScore > 50
 */
placeSchema.pre("save", function (next) {
  this.isHiddenGem = this.verificationScore > 50;
  next();
});

const Place = mongoose.model("Place", placeSchema);

export default Place;
