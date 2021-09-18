// You can publish doGet function as a web app from the deploy button in the upper right corner of the editor.
// Web App URLs can be checked from the Manage Deploy button.

// Parameter inheritance is possible by adding a parameter to the end of the url
// Ex.) "https://script.google.com/macros/s/your_url/exec?param1=hoge&param2=hogehoge" 


// When the URL is executed, the HTML will be displayed.
// It is also possible to create .html file in the same project and call it.
function doGet(e){
    // Ex.) param1 = hoge, param2 = hogehoge
    var html = "";
    html += "<h1>Web App Title</h1>";
    // The function you want to execute in the web app should be written separately and called below.
    if(yourFunction(param1, param2) != -1){
        html += "<p>param1："+param1+"</p>";
        html += "<p>param2："+param2+"</p>";
        html += "<p>The Function is Completed.</p>";
    }else{
        html += "<p>Failed to run the function</p>";
    }
    return HtmlService.createHtmlOutput(html);
}