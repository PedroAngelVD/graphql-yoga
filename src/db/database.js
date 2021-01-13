import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/graphql_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then((db) => console.log("Database is connected"))
  .catch((err) => console.error(err));
