import { Axios } from 'axios';

// ここでヘッダーなどの定義をする
const axios = new Axios({
    baseURL: "https://api.gptzero.me/v2/predict",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
        "Access-Control-Allow-Headers": "Content-Type"
    },
    responseType: "json",
    transformRequest: [function (data) {
        // リクエストデータの変換処理
        console.log("変換後：",JSON.stringify(data));
        return JSON.stringify(data);
      }],
    transformResponse: [function (data) {
        //　レスポンスデータの変換処理
        console.log("変換後：",JSON.parse(data));
        return JSON.parse(data);
    }]
});

export default axios;