const mongoose = require("mongoose");
const SchemaStory = mongoose.Schema;

//write schema for storyboard
const storyboardSchema = new SchemaStory({
  image: {
    data: Buffer,
    contentType: String,
  },
  text: { type: String, required: true },
  alt: { type: String, required: true },
});

const Story = mongoose.model("storyboard", storyboardSchema);
//const other schema
//const mySchemas = { Questions: Questions, Story: Story };
//you can export multiple schemas

module.exports = Story;
