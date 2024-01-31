/*Copyright 1996-2018 Information Builders, Inc. All rights reserved.*/
// $Revision: 1.0 $:

window.addEventListener("iba_pageloading", function (e){
   var page = e.data;
   var infoButtonContainers = page.containers(".add-info-button");
   infoButtonContainers.forEach(function(container){
       container.ibaObject.addButton({"tooltip": "Open the Information Builders website", "glyphClasses": "fa fa-info-circle"}, ".pd-container-title-button-resize", true).addEventListener("click", onInfoButtonClick);
   });
   var downloadMenuContainers = page.containers(".add-download-menu");
   downloadMenuContainers.forEach(function(container){
       container.ibaObject.addMenuItem({"text": "Download data", "glyphClasses": "fa fa-paperclip"}).addEventListener("click", onMenuDownloadData);
   });
});

function onInfoButtonClick(e){
   window.open('https://www.informationbuilders.com', '_blank');
}

function onMenuDownloadData(e){
   window.open(ibaPage.context.appPath + "/rs/ibfs/WFC/Repository/Retail_Samples/Portal/Advanced_Features/Embedded_CSS_and_Javascript/Demo_Resources/Example_1_Download_Data.fex");
}
