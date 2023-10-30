const axios = require("axios");
//上传文件
export async function uploadFile(data: FormData) {
  axios({
    url: "http://localhost:8080/upload",
    method: "POST",
    data: data,
    headers: { "Content-Type": "multipart/form-data;charset=utf-8;" },
  })
    .then((res: any) => {
      console.log(res);
    })
    .catch((error: any) => {
      console.log(error);
    });
}
//删除文件
export async function deleteFile(key: string) {
  axios
    .delete("http://localhost:8080/upload", {
      params: {
        key,
      },
    })
    .then((res: any) => {
      console.log(res);
    })
    .catch((error: any) => {
      console.log(error);
    });
}
//获取文件URL
export async function getVideoUrl(key: string) {
  return axios("http://localhost:8080/download", {
    params: {
      key,
    },
  }).then((res: any) => {
    return res;
  });
}
