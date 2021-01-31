const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
} else {
  const password = process.argv[2];
  const dbname = "person-app";

  const url = `mongodb+srv://aemon:${password}@cluster0.2issf.mongodb.net/${dbname}?retryWrites=true&w=majority`;

  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  const personSchema = new mongoose.Schema({
    name: String,
    number: String,
  });

  const Person = mongoose.model("Person", personSchema);

  if (process.argv.length < 5) {
    // 显示所有条目
    Person.find({}).then((result) => {
      result.forEach((person) => {
        console.log(person);
      });
      mongoose.connection.close();
    });
  } else {
    // 插入单条数据
    const personName = process.argv[3];
    const personNumber = process.argv[4];
    const person = new Person({
      name: personName,
      number: personNumber,
    });

    person.save().then((result) => {
      console.log("person saved!");
      mongoose.connection.close();
    });
  }
}
