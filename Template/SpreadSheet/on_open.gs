// It is possible to provide a tab in the toolbar to execute your own functions.
// onOpen function is executed when the spreadsheet is opened.


// This function can be executed by pressing the "display_name" button for the main function
function onOpen() {
  var ui = SpreadsheetApp.getUi(); 
  var menu = ui.createMenu("Your Additionl Function");
  menu.addItem("display_name", "main"); 
  menu.addToUi();
}

function main(){
    // ~~~~~~~~~~~
}