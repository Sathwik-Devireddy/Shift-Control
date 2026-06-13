const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://**********_db_user**********************@cluster0.tbchrjn.mongodb.net/",
  )
  .then(() => {
    console.log("Connected to database");
    runQuery();
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

async function runQuery() {
  try {
    const newUser = await User.create({
      name: "gta 6",
      email: "huiy@example.com",
      age: 28,
      isActive: true,
      tags: ["tag.1", "tag.2"],
    });

    await newUser.save();

    console.log("User saved successfully");
    console.log(newUser);
    const AllUsers = await User.find();
    console.log("All Users:", AllUsers);
    const selectedFields = await User.find().select("name email -_id");
    console.log("Selected Fields:", selectedFields);
    const limitedUsers = await User.find().limit(3).skip(1);
    console.log("Limited Users:", limitedUsers);
    const sortedUsers = await User.find().sort({ age: 1 });
    console.log("Sorted Users:", sortedUsers);
    const countDocuments = await User.countDocuments({ isActive: true });
    console.log("Count of Active Users:", countDocuments);

    const updatedUser = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: { age: 30 },
        $push: { tags: "updated" },
      },
      { new: true },
    );
    console.log("Updated User:", updatedUser);
    // const dltUser = await User.findByIdAndDelete(newUser._id);
    // console.log("Deleted User:", dltUser);
  } catch (err) {
    console.log("Error:", err);
  } finally {
    await mongoose.connection.close();
  }
}
