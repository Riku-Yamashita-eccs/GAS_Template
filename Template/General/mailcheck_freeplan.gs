// Adress etc.
var MailAdress = "Target_Gmail_address"
var SlackUrl = "WebHools URL"  
var ChannelName = "Target_Channel_Name"
var BotName = "Your_Bot_Name"
// Check Interval（Depending on GAS Trigger）
var Interval = 1 //[min]
var Margin = 20 //[s]

function checkMail() {
  var today = new Date;
  today.setMinutes(today.getMinutes() - Interval);
  today.setSeconds(today.getSeconds() - Margin);
  console.log("1分20秒前 : "+Utilities.formatDate(today, 'Asia/Tokyo', 'yyyy/MM/dd: HH:mm:ss'));
  var after = Math.floor(today.getTime()/1000);
  // Search Query
  var query = "after:"+after.toString()+"to:"+MailAdress;
  var threads = GmailApp.search(query);
  console.log(threads.length+" threads");
  for (var i in threads){
    var msgs = threads[i].getMessages();
    console.log((Number(i)+1)+" thread : "+msgs.length+" mails");
    for (var msg in msgs) {
      var body = mailToBody(msgs[msg], after);
      if(body != -1){
        console.log(body);
        sendToSlack(body, ChannelName);
      }else{
        continue;
      }
    }
  }
}

function mailToBody(mail, after){
  var body = ""
  var date = mail.getDate();
  if(Math.floor(date.getTime()/1000) > after){
    body += "Timestamp：" + date.toString() + "\n";
    var who = mail.getFrom();
    body += "Sender：" + who + "\n";
    var title = mail.getSubject();
    body += "Title：" + title + "\n";
    var pbody = mail.getPlainBody();
    body += "Body："　+ pbody;
    return body;
  }
  else{
    return -1
  }
}

function sendToSlack(body, channel){
  var data = { "channel" : channel, "username" : BotName, "icon_emoji": ":coffee:", "text" : body };
  var payload = JSON.stringify(data);
  var options = {
    "method" : "POST",
    "contentType" : "application/json",
    "payload" : payload
  };
  var response = UrlFetchApp.fetch(SlackUrl, options);
}

