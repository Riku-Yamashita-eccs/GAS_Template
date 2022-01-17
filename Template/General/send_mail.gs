/* sendAdress:送信元メールアドレス */
/* デフォルトのメールアドレス以外（グーグルグループ等）から送信したい時 */

var sendAddress = "send_mail_address@example.com"

function sendMail(name, recipient, content) {
  var subject = "タイトル（自動送信）";
  var body = name + "様\nお世話になっております。\n~~~です。";
  /* 必要に応じてcontentからbodyに追記 */
  var options = {from: sendAddress};

  GmailApp.sendEmail(recipient,subject,body,options);

}