var express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = 8080;
import UploadFile from "./upload";

app.use(cors());

const formidable = require("formidable");
app.use(function (req, res, next) {
  var form = new formidable.IncomingForm({
    encoding: "utf-8",
    multiples: true,
    keepExtensions: true,
  });
  form.once("error", console.log);
  form.parse(req, function (err, fields, files) {
    Object.assign(req, { fields, files });
    next();
  });
});

app.use("/", express.static(path.join(__dirname, "public")));

app.post("/upload", async (req, res, next) => {
  let ret = await UploadFile.upload(req, res);
  console.log(ret);
  res.json(ret);
});

app.delete("/upload", async (req, res) => {
  let ret = await UploadFile.deleteFile(req.query.key);
  console.log(ret);
  res.json(ret);
});

app.get("/download", async (req, res) => {
  const key = req.query.key;
  const ret = await UploadFile.downloadUrl(key);
  console.log(ret);
  res.json(ret);
});

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
});
