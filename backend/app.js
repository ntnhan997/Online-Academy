const express = require("express");
const morgan = require("morgan");
const app = express();

const userRoute = require("./routes/user.route");
const favoriteCourseRoute = require("./routes/favoritecourse.route");
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
app.use("/api/favoritecourse", favoriteCourseRoute);
app.use("/api/lecture", require("./routes/lecture.route"));
app.use("/api/teacher", require("./routes/teacher.route"));

app.use("/api/subscribedcourse", require("./routes/subscribedcourse.route"));


app.listen(PORT, () => {
  console.log(`api running at http://localhost:${PORT}`);
});
