mongoose = require("mongoose");
mongoose
  .connect(process.env.BASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(() => {
    console.log("Database Imeunganishwa");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
