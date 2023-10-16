import React,{ useState } from "react";
import './App.css';
import axios from "./UtilAxios";
import ShowData from "./ShowData";
import Loading from "./Loading";

function PostCheckText(){
  // 送るためのテキスト
  const [postText, setPostText] = useState("");
  // 返ってくるテキスト
  const [resNum, setResNum] = useState(0);
  // ロード
  const [isLoading, setIsLoading] = useState(false);

  //　判定ハンドラ
  async function checkText() {
    setIsLoading(true);
    await axios.post('/text',{
        document: postText
      }).then((response)=>{
      console.log("レスポンス：",response.data.documents[0].completely_generated_prob);
      setIsLoading(false);
      setResNum(response.data.documents[0].completely_generated_prob);
    }).catch((error)=>{
      console.log("エラー：",error);
      setIsLoading(false);
    });
  };

  return(
    <div className="App">
      <img src="/images/main_illust.png" className="image"/>
      <div className="welcome-text">
      <p>ようこそ！</p>
      <p>ここでは文章がAIで生成されたものかチェックすることができるよ！</p>
      <p>フェイクニュースから身を守るために使ってね！</p>
      </div>
        <textarea name="text" cols="50" rows="5" 
        onChange={(e)=> setPostText(e.target.value)} />

        <input type="image" value="チェックする！"
          disabled={postText.length===0}
          onClick={checkText}
          src="/images/checkButton.png" className="button"/>

      { isLoading ? <Loading /> : <ShowData data={resNum} /> }
    </div>
  );
}

export default PostCheckText;