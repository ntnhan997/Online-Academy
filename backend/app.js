const express = require("express");
const morgan = require("morgan");
const app = express();

require("express-async-errors");

const userRoute = require("./routes/user.route");
const courseRoute = require("./routes/course.route");
const categoryRoute = require("./routes/category.route");
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
app.use("/api/category", categoryRoute);
app.use("/api/favoritecourse", favoriteCourseRoute);
app.use("/api/lecture", require("./routes/lecture.route"));
app.use("/api/teacher", require("./routes/teacher.route"));
app.use("/api/admin", require("./routes/admin.route"));
app.use("/api/comment", require("./routes/comment.route"));
app.use("/api/subscribedcourse", require("./routes/subscribedcourse.route"));


app.use((req,res,next) => {
  res.status(404).send({
      error_message: "Endpoint not found!"
  })
} )

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send({
      error_message : 'Something broke!'})
})


app.listen(PORT, () => {
  console.log(`api running at http://localhost:${PORT}`);
});
