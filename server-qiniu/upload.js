const qiniu = require("qiniu");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const accessKey = process.env.ENV_ACCESSKEY;
const secretKey = process.env.ENV_SECRETKEY;
const privateBucketDomain = process.env.ENV_DOMAIN;
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const config = new qiniu.conf.Config();
const formUploader = new qiniu.form_up.FormUploader(config);
const putExtra = new qiniu.form_up.PutExtra();
const bucketManager = new qiniu.rs.BucketManager(mac, config);

export default class UploadFile {
  static async upload(req, res) {
    const bucket = "space-2-dzr";
    const key = "images/" + req.files.image.path.split(path.sep).pop();
    const filePath = req.files.image.path;
    const token = this.uptoken(bucket, key);
    const result = await this.uploadFile(token, key, filePath);
    return result;
  }

  static uptoken(bucket, key) {
    const options = {
      scope: bucket + ":" + key,
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);
    return uploadToken;
  }

  static uploadFile(uptoken, key, localFile) {
    return new Promise((resolve) => {
      formUploader.putFile(
        uptoken,
        key,
        localFile,
        putExtra,
        function (respErr, respBody, respInfo) {
          if (respErr) {
            resolve({
              ret: 0,
              data: respErr,
              messages: "上传失败",
            });
          }
          if (respInfo.statusCode == 200) {
            respBody.key = respBody.key;
            resolve({
              ret: 0,
              data: respBody,
              messages: "上传成功",
            });
          }
        }
      );
    });
  }

  static deleteFile(key) {
    let bucket = "space-2-dzr";
    return new Promise((resolve, reject) => {
      bucketManager.delete(bucket, key, function (err, respBody, respInfo) {
        if (err) {
          console.log(err);
          //throw err;
        } else {
          if (respInfo.statusCode == 200) {
            resolve({
              ret: 0,
              data: respBody,
              messages: "删除成功",
            });
          }
        }
      });
    });
  }

  static downloadUrl(key) {
    const deadline = parseInt(Date.now() / 1000) + 3600; // 1小时过期
    const privateDownloadUrl = bucketManager.privateDownloadUrl(
      privateBucketDomain,
      key,
      deadline
    );
    return privateDownloadUrl;
  }
}
