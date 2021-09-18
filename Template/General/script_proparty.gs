// Script property can store data in pairs of keys and values.
// For example, it's not secure to write the API key directly in the code.


// Set value in Script Proparty
// If you want multiple sets, use setProperties
function setVal(key, value){
  PropertiesService.getScriptProperties().setProperty(key, value);
}

// Get Value
function getVal(key){
  var value = PropertiesService.getScriptProperties().getProperty(key);
}