var value;

chrome.runtime.onMessage.addListener(function(request, sender, callback) {
  if (request.type == 'SAVE_STRING') {
    value = request.value;
    callback();
    console.log("savasdfasd	ing string: " + string);
  } else if (request.type == 'LOAD_STRING') {
    callback(value);
  }
});
