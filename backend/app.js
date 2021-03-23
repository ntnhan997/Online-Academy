const express = require("express");
const morgan = require("morgan");
const app = express();

const userRoute = require("./routes/user.route");

const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "hello",
  });
});

app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/user", userRoute);
app.use("/api/course", courseRoute);


app.listen(PORT, () => {
  console.log(`api running at http://localhost:${PORT}`);
});
