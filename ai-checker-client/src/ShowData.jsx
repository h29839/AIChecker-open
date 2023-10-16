function ShowData(props){
  const probData = props.data;
  const n = 3;
  const prob = Math.floor( probData * Math.pow( 10, n ) ) / Math.pow( 10, n );
  return(
    <div>
        <h2>文章がAIで作られた確率</h2>
        <h2>{prob}%</h2>
    </div>
  )

}

export default ShowData;