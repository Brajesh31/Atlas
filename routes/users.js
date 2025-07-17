const mongoose = require('mongoose');
const uri =
  'mongodb+srv://princebhatt316:DnFqDYxei3ai8X3g@cluster0.vdwbeya.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

  // hggjhjhkjkjk

mongoose
  .connect(uri)
  .then(() => {
    console.log('Mongo Connected');
  })
  .catch(() => {
    console.log('Not Connected');
  });

const loginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model('Collection1', loginSchema);
module.exports = collection;
