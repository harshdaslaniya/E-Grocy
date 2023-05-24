const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const costumerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minLength: [6, "Password must be up to 6 characters"],
      //   maxLength: [23, "Password must not be more than 23 characters"],
    },
    email: {
      type: String,
      required: [true, "Please add a email"],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
      ],
    },
    phone: {
      type: Number,
      required: [true, "Please add a Phone No."]
    },
    address: {
      type: String

    },
    token:[{
        token:{
            type: String
        }
    }]
  },
  {
    timestamps: true,
  }
);

// costumerSchema.methods.

//   Encrypt password before saving to DB
costumerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

const costumerModel = mongoose.model("costumerModel", costumerSchema);
module.exports = costumerModel;
