// Saves options to chrome.storage
function save_options() {
    var source = document.getElementById('source').value;
    var target = document.getElementById('target').value;
    var location = document.getElementById('location').value;

    chrome.storage.sync.set({
      sourceLang: source,
      targetLang: target,
      locationString: location
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
}
  
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
      sourceLang: 'en',
      targetLang: 'es',
      lastTranslation: '',
      lastSource: '',
      locationString: ''
    }, function(items) {
      document.getElementById('source').value = items.sourceLang;
      document.getElementById('target').value = items.targetLang;
      document.getElementById('lastTranslation').innerHTML = items.lastSource + "    >     " + items.lastTranslation;
      document.getElementById('location').value = items.locationString;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
      save_options);