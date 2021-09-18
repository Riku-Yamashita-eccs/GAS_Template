// The API key should be stored in the script property.

var APIURL = "Your_API_URL"


// Error return -1/ Success return 0 
function postAPI(){
    var apikey = PropertiesService.getScriptProperties().getProperty("APIKEY");
    // The following is example
    var headers = {
        "Authorization": "Bearer " + apikey
    }
    var payload = {
        "email": "sample@sample.com",
        "memo": "sample text"
    }
    const options = {
        "method": "post",
        "headers": headers,
        "contentType": "application/json",
        "payload": JSON.stringify(payload)
    }
    // Edit Response Code
    try {
        const response = UrlFetchApp.fetch(apiurl,options);
        if(response.getResponseCode() == ResponseCode){
            console.log("Request Done.")
            console.log(response.getContentText());
            return 0;
        }else{
            console.log("Error:");
            console.log(response.getContentText());
            return -1;
        }
    }catch(e){
        console.log("Error:");
        console.log(e);
        return -1;
    }
}