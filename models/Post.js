// import mongoose package
const mongoose = require("mongoose");

// create a schema / aka what the data looks like
const PostSchema = mongoose.Schema({
  // if only specifiying type: title: {String},
  // to specify type and other attribute, use an object:
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// example of defining a user schema
// mongoose.Schema({
//   username: String,
//   password: String,
// })

// export the module, specifying name and the schema; (this is the name that is going to show up on our mongoDB server)
module.exports = mongoose.model("Posts", PostSchema);
