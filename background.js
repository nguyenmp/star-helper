var value;

chrome.runtime.onMessage.addListener(function(request, sender, callback) {
  if (request.type == 'SAVE_STRING') {
    value = request.value;
  } else if (request.type == 'LOAD_STRING') {
    callback(value);
  }
});
