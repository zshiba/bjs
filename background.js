
chrome.browserAction.onClicked.addListener(function(tab){
  let origin = new URL(tab.url).origin;

  chrome.contentSettings.javascript.get({
    primaryUrl: origin
  }, function(details){
       let currentSetting = details.setting;
       if(currentSetting !== undefined){
         let setting = "";
         if(currentSetting === "allow" || currentSetting === "default")
           setting = "block";
         else
           setting = "allow";

         chrome.contentSettings.javascript.set({
           primaryPattern: origin + "/*",
           setting: setting
         });
         chrome.tabs.reload(tab.id);
       }
     });
});
