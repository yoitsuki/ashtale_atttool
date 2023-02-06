$(document).ready( function(){
  var undefined;//未定義の判定用
  var cookie_var;

  // ページ読み込み時にcookieから値を読み込む
  //入力値
  cookie_var = Cookies.get('def1');
  document.getElementById("def1").value = cookie_var===undefined ? "63000" : cookie_var;
  cookie_var = Cookies.get('att1_before');
  document.getElementById("att1").value = cookie_var===undefined ? "" : cookie_var;
  cookie_var = Cookies.get('att2_before');
  document.getElementById("att2").value = cookie_var===undefined ? "" : cookie_var;
  cookie_var = Cookies.get('att3_before');
  document.getElementById("att3").value = cookie_var===undefined ? "" : cookie_var;
  cookie_var = Cookies.get('att4_before');
  document.getElementById("att4").value = cookie_var===undefined ? "" : cookie_var;
  cookie_var = Cookies.get('att5_before');
  document.getElementById("att5").value = cookie_var===undefined ? "" : cookie_var;
  cookie_var = Cookies.get('att6_before');
  document.getElementById("att6").value = cookie_var===undefined ? "" : cookie_var;
  cookie_var = Cookies.get('att7_before');
  document.getElementById("att7").value = cookie_var===undefined ? "" : cookie_var;
  cookie_var = Cookies.get('att8_before');
  document.getElementById("att8").value = cookie_var===undefined ? "" : cookie_var;
  cookie_var = Cookies.get('att9_before');
  document.getElementById("att9").value = cookie_var===undefined ? "" : cookie_var;
  //入力値(結果テーブル)
  cookie_var = Cookies.get('att1_before');
  document.getElementById("input1").textContent = cookie_var===undefined ? "" : cookie_var;
  cookie_var = Cookies.get('att2_before');
  document.getElementById("input2").textContent = cookie_var===undefined ? "" : cookie_var;
  cookie_var = Cookies.get('att3_before');
  document.getElementById("input3").textContent = cookie_var===undefined ? "" : cookie_var;
  cookie_var = Cookies.get('att4_before');
  document.getElementById("input4").textContent = cookie_var===undefined ? "" : cookie_var;
  cookie_var = Cookies.get('att5_before');
  document.getElementById("input5").textContent = cookie_var===undefined ? "" : cookie_var;
  cookie_var = Cookies.get('att6_before');
  document.getElementById("input6").textContent = cookie_var===undefined ? "" : cookie_var;
  cookie_var = Cookies.get('att7_before');
  document.getElementById("input7").textContent = cookie_var===undefined ? "" : cookie_var;
  cookie_var = Cookies.get('att8_before');
  document.getElementById("input8").textContent = cookie_var===undefined ? "" : cookie_var;
  cookie_var = Cookies.get('att9_before');
  document.getElementById("input9").textContent = cookie_var===undefined ? "" : cookie_var;
  //結果
  cookie_var = Cookies.get('att1_after');
  document.getElementById("result1").textContent = cookie_var===undefined ? "---" : cookie_var+" または攻撃1%";
  cookie_var = Cookies.get('att2_after');
  document.getElementById("result2").textContent = cookie_var===undefined ? "---" : cookie_var+"%";
  cookie_var = Cookies.get('att3_after');
  document.getElementById("result3").textContent = cookie_var===undefined ? "---" : cookie_var+"%";
  cookie_var = Cookies.get('att4_after');
  document.getElementById("result4").textContent = cookie_var===undefined ? "---" : cookie_var+"%";
  cookie_var = Cookies.get('att5_after');
  document.getElementById("result5").textContent = cookie_var===undefined ? "---" : cookie_var+"%";
  cookie_var = Cookies.get('att6_after');
  document.getElementById("result6").textContent = cookie_var===undefined ? "---" : cookie_var+"%";
  cookie_var = Cookies.get('att7_after');
  document.getElementById("result7").textContent = cookie_var===undefined ? "---" : cookie_var+"%";
  cookie_var = Cookies.get('att8_after');
  document.getElementById("result8").textContent = cookie_var===undefined ? "---" : cookie_var+"%";
  cookie_var = Cookies.get('att9_after');
  document.getElementById("result9").textContent = cookie_var===undefined ? "---" : cookie_var+"%";
  cookie_var = Cookies.get('att10_after');
  document.getElementById("result10").textContent = cookie_var===undefined ? "---" : cookie_var;
});

//ボタンを押した時の挙動を制御
$('#send_st').click(function(e){
  let error;
  // クラスは複数につけられるので、全部チェックする必要がある
  $("input.num-only").each(function () {
    let value = $(this).val();
    if (!isNumber(value)) {
      error = true;
    }
  });
  if (error) {
    //エラー時の処理
    alert('0または数値が入力されていない箇所があります。\n入力してから再度実行してください。');
    //preventDefaultで、デフォルトの挙動を止められる→submitを止める
    return e.preventDefault();
  }else{
    clickBtn1();
    clickBtn2();
  }
});

$(document).keypress(function(e){
  // エンターキーだったら計算ボタン押下を発火
  if (e.key === 'Enter') {
    document.getElementById("send_st").click();
  }
});

//ボタンを押した時の挙動を制御
$('#copy_st').click(function(e){
  const date1 = new Date();
	console.log(date1); // Sat Feb 01 2020 20:49:28 GMT+0900 (日本標準時)
	console.log(date1.toLocaleString()); // 2020/2/1 20:49:28

  // コピー対象をJavaScript上で変数として定義する
  var targetTxt = date1.toLocaleString()+"\n"
                  +"敵防御力\t"+document.getElementById("def1").value+"\n"
                  +"攻撃力\t"+document.getElementById("att1").value+"\t"+document.getElementById("result1").textContent+"\n"
                  +"ダメージ倍率\t"+document.getElementById("att2").value+"\t"+document.getElementById("result2").textContent+"\n"
                  +"与ダメージ増加\t"+document.getElementById("att3").value+"\t"+document.getElementById("result3").textContent+"\n"
                  +"会心ダメージ\t"+document.getElementById("att4").value+"\t"+document.getElementById("result4").textContent+"\n"
                  +"防御無視\t"+document.getElementById("att5").value+"\t"+document.getElementById("result5").textContent+"\n"
                  +"対ボス与ダメ増\t"+document.getElementById("att6").value+"\t"+document.getElementById("result6").textContent+"\n"
                  +"状態異常与ダメ増\t"+document.getElementById("att7").value+"\t"+document.getElementById("result7").textContent+"\n"
                  +"対高HP与ダメ増\t"+document.getElementById("att8").value+"\t"+document.getElementById("result8").textContent+"\n"
                  +"対低HP与ダメ増\t"+document.getElementById("att9").value+"\t"+document.getElementById("result9").textContent+"\n"
                  +"基礎攻撃力\t"+"\t"+document.getElementById("result10").textContent;

  //ブラウザの対応状況で分岐
  if(navigator.clipboard){
    //クリップボードにコピーを実行
    navigator.clipboard.writeText(targetTxt).then(function(){
      //コピーに成功したときの処理...
      console.log('copied.');
    },function(){
      //コピーに失敗したときの処理...
      console.log('clipboard denied.');
    });
  }else if(window.clipboardData){
    //IE用の処理...
    console.log('IE.');
  }else if(document.execCommand){
    //非SSLサイトと古いブラウザ用の処理...
    console.log('Old.');
  }else{
    //クリップボードにアクセスできなかった場合の処理
    console.log('Can not copy. No permission and execCommand died.');
  }
  // コピーをお知らせする
  alert("クリップボードにコピーしました。");
});

function clickBtn1() {
  var att_predict = 0;
  var att_predict101 = 0;
  const diam = 1.01; // 倍率
  var diam_otr = 1.00; // 倍率(調整用)
  const flo = 100; // 小数点第二位で切り詰め
  var result_st; //結果保存用
  const exp_date = 1; //cookieの保持日数

  //データの入手と結果への出力
  var df1 = Number(document.getElementById("def1").value); //敵防御力
  Cookies.set('def1', df1);
  var at1 = Number(document.getElementById("att1").value); //攻撃力
  document.getElementById("input1").textContent = at1;
  Cookies.set('att1_before', at1, {expires: exp_date});
  var at2 = Number(document.getElementById("att2").value); //ダメージ倍率
  document.getElementById("input2").textContent = at2;
  Cookies.set('att2_before', at2, {expires: exp_date});
  var at3 = Number(document.getElementById("att3").value); //与ダメージ増加
  document.getElementById("input3").textContent = at3;
  Cookies.set('att3_before', at3, {expires: exp_date});
  at3 = at3*0.01;
  var at4 = Number(document.getElementById("att4").value); //会心ダメージ
  document.getElementById("input4").textContent = at4;
  Cookies.set('att4_before', at4, {expires: exp_date});
  at4 = at4*0.01;
  var at5 = Number(document.getElementById("att5").value); //防御無視
  document.getElementById("input5").textContent = at5;
  Cookies.set('att5_before', at5, {expires: exp_date});
  at5 = at5*0.01;
  var at6 = Number(document.getElementById("att6").value); //対ボス与ダメ増
  document.getElementById("input6").textContent = at6;
  Cookies.set('att6_before', at6, {expires: exp_date});
  at6 = at6*0.01;
  var at7 = Number(document.getElementById("att7").value); //状態異常与ダメ増
  document.getElementById("input7").textContent = at7;
  Cookies.set('att7_before', at7, {expires: exp_date});
  at7 = at7*0.01;
  var at8 = Number(document.getElementById("att8").value); //対高HP与ダメ増
  document.getElementById("input8").textContent = at8;
  Cookies.set('att8_before', at8, {expires: exp_date});
  at8 = at8*0.01;
  var at9 = Number(document.getElementById("att9").value); //対低HP与ダメ増
  document.getElementById("input9").textContent = at9;
  Cookies.set('att9_before', at9, {expires: exp_date});
  at9 = at9*0.01;

  //防御無視が100%を超えている場合は100%で計算
  if(at5 > 1){
    at5 = 1;
    console.log("防御無視が100%を超えています。");
  }

  //基礎攻撃力と1.01倍
  att_predict = ((at1*at1)/(at1+(df1*(1-at5))))*at2*at3*at4*at6*(at7+at8+at9);
  att_predict101 = ((at1*diam*at1*diam)/(at1*diam+(df1*(1-at5))))*at2*at3*at4*at6*(at7+at8+at9);

  //結果の計算と出力、cookieへの保存
  //攻撃力
  result_st = numRound(at1*diam-at1, flo);
  document.getElementById("result1").textContent = result_st + " or 1%";
  Cookies.set('att1_after', result_st, {expires: exp_date});
  //ダメージ倍率
  diam_otr = att_predict101/att_predict
  result_st = numRound((at2*diam_otr-at2)*100,flo);
  document.getElementById("result2").textContent = result_st+"%";
  Cookies.set('att2_after', result_st, {expires: exp_date});
  //与ダメ増加
  diam_otr = att_predict101/att_predict
  result_st = numRound((at3*diam_otr-at3)*100,flo);
  document.getElementById("result3").textContent = result_st+"%";
  Cookies.set('att3_after', result_st, {expires: exp_date});
  //会心ダメージ
  diam_otr = att_predict101/att_predict
  result_st = numRound((at4*diam_otr-at4)*100, flo);
  document.getElementById("result4").textContent = result_st+"%";
  Cookies.set('att4_after', result_st, {expires: exp_date});
  //防御無視(100%以上の場合は出力しない：威圧を計算していないため)
  if(at5 ==1){
    document.getElementById("result5").textContent = "---";
    Cookies.set('att5_after', result_st, {expires: exp_date});
  }else{
    diam_otr = ((at2*at3*at4*at6*(at7+at8+at9)*(at1*at1/att_predict101)-at1)/df1-1)/(-1*at5)
    result_st = numRound((at5*diam_otr-at5)*100, flo);
    document.getElementById("result5").textContent = result_st+"%";
    Cookies.set('att5_after', result_st, {expires: exp_date});
  }
  //対ボス与ダメ増
  diam_otr = att_predict101/att_predict
  result_st = numRound((at6*diam-at6)*100, 100);
  document.getElementById("result6").textContent = result_st+"%";
  Cookies.set('att6_after', result_st, {expires: exp_date});
  //状態異常与ダメ増
  diam_otr = (att_predict101/att_predict*(at7+at8+at9)-(at8+at9))/at7
  result_st = numRound(2*(at7*diam_otr-at7)*100, 100);
  document.getElementById("result7").textContent = result_st+"%";
  Cookies.set('att7_after', result_st, {expires: exp_date});
  //対高HP与ダメ増
  diam_otr = (att_predict101/att_predict*(at7+at8+at9)-(at7+at9))/at8
  result_st = numRound(2*(at8*diam_otr-at8)*100, 100);
  document.getElementById("result8").textContent = result_st+"%";
  Cookies.set('att8_after', result_st, {expires: exp_date});
  //対低HP与ダメ増
  diam_otr = (att_predict101/att_predict*(at7+at8+at9)-(at7+at8))/at9
  result_st = numRound(2*(at9*diam_otr-at9)*100, 100);
  document.getElementById("result9").textContent = result_st+"%";
  Cookies.set('att9_after', result_st, {expires: exp_date});
  //基礎攻撃力
  result_st = numFloor(att_predict101,100)
  result_st = Math.floor(result_st) //小数点四捨五入
  document.getElementById("result10").textContent = Number(result_st).toLocaleString();
  Cookies.set('att10_after', result_st, {expires: exp_date});
}

/**
 * ボタン押下時にスクリーンショットを撮る
 * @param {number} value 切り捨てする数値
 * @param {number} base どの桁で切り捨てするか（100→小数点第二位、0.1→10の位）
 * @return {number} 切り捨てした値
 */
function clickBtn2() {
      //HTML内に画像を表示
      html2canvas(document.getElementById("target"),{
        onrendered: function(canvas){
          //imgタグのsrcの中に、html2canvasがレンダリングした画像を指定する。
          var imgData = canvas.toDataURL();
          document.getElementById("result").src = imgData;
        }
      });

      //ボタンを押下した際にダウンロードする画像を作る
      html2canvas(document.body,{
        onrendered: function(canvas){
          //aタグのhrefにキャプチャ画像のURLを設定
          var imgData = canvas.toDataURL();
          document.getElementById("ss").href = imgData;
        }}
      });
}

/**
 * 任意の桁で切り捨てする関数
 * @param {number} value 切り捨てする数値
 * @param {number} base どの桁で切り捨てするか（100→小数点第二位、0.1→10の位）
 * @return {number} 切り捨てした値
 */
function numFloor(value, base) {
    return Math.floor(value * base) / base;
}

/**
 * 任意の桁で四捨五入する関数
 * @param {number} value 切り捨てする数値
 * @param {number} base どの桁で切り捨てするか（100→小数点第二位、0.1→10の位）
 * @return {number} 切り捨てした値
 */
function numRound(value, base) {
    return Math.round(value * base) / base;
}

/**
* 数値チェック
* val = 入力値
* 戻り値	数値		= true
*		数値以外	= false
*/
function isNumber(val){
  var pattern = /^([1-9]\d*|0)(\.\d+)?$/;
  return pattern.test(val);
}
