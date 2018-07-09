//format of Omnibang search: "! site-to-search search-term"
//"! " is captured by omnibox
//remaining "site-to-search search-term" is passed to following function

chrome.omnibox.onInputEntered.addListener(
  function(searchTerm) {
    // Encode user input for special characters , / ? : @ & = + $ #
    var encodedText = encodeURIComponent(searchTerm);
    var newURL = 'https://duckduckgo.com/?q=!' + encodedText;
    chrome.tabs.update({ url: newURL });
  });
