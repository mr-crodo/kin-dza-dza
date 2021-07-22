const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String
  }
}, {
  timestamps: true
});

schema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Post', schema);
// db.schema.insertMany([
//    {title: "Eto zaqolovok Bloqa 2",
//     body: `
//   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 2
//   `},
//    {title: "Eto zaqolovok Bloqa 3",
//     body: `
//   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 3
//   `},
//    {title: "Eto zaqolovok Bloqa 4",
//     body: `
//   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 4
//   `},
//    {title: "Eto zaqolovok Bloqa 5",
//     body: `
//   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 5
//   `},
//    {title: "Eto zaqolovok Bloqa 6",
//     body: `
//   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 6
//   `},
//    {title: "Eto zaqolovok Bloqa 7",
//     body: `
//   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 7
//   `},
// ])