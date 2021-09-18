// Webhook API added to target Slack Channel
var ChannelURL = "https://hooks.slack.com/services/your/api/url"

// send body(message) to channel.
// The icon of the bot can be selected by changing the icon_emoji.
function sendToSlack(body, channel) {
  var data = { "channel" : channel, "username" : "your bot name", "icon_emoji": ":robot_face:", "text" : body };
  var payload = JSON.stringify(data);
  var options = {
    "method" : "POST",
    "contentType" : "application/json",
    "payload" : payload
  };
  var response = UrlFetchApp.fetch(ChannelURL, options);
}

// send form contents to channel.
function newSubmitToSlack(e){
    var body = "New response received."
    // Define as many variables as there are questions to forward
    var question1 = "";
    var question2 = "";

    var itemResponse = e.response.getItemResponses();
    for (var j = 0; j < itemResponse.length; j++){
        var formData = itemResponse[j];    
        var title = formData.getItem().getTitle();
        var response = formData.getResponse();
        switch (title) {
            case "question1_title":
                question1 = response;
                break;
            case "question2_title":
                question2 = response;
                break;
            default:
                break
        }
    }
    // Rewrite the text below to the format of the message you want to forward.
    var body = body + "```question1_title:" + question1;
    var body = body + "\nquestion2_title:" + question2 + "```";

    sendToSlack(body, "#Target_Channel_Name")
}