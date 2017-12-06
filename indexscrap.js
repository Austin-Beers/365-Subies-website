const EBAY_SEARCH_URL = ''
const ETSY_SEARCH_URL = 'https://openapi.etsy.com/v2/shops/:shop_id/listings/active'
const WALMART_SEARCH_URL = 'https://api.walmartlabs.com/v1/search'
let headerState = {pageStage: "start"}
function getDataFromEbay(searchTerm, callback) {
  const settings = {
    url: EBAY_SEARCH_URL,
    data: {
      part: 'snippet',
      key: '',
      q: `${searchTerm} in:name`,
      
      
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };

  return $.ajax(settings);
}

function getAuthEbay(basic){
    const credString = "AustinBe-365Subar-PRD-a5d7a0307-27e9ba44:PRD-5d7a0307fdf5-3f39-4cfd-9f74-b8ee"
    const setting = {
    url: "https://api.ebay.com/identity/v1/oauth2/token",
    data: {
    part: '',
    key: '',
    
}
}
}
function getDataFromApiEtsy(searchTerm, callback) {
  const settings = {
    url: ETSEY_SEARCH_URL,
    data: {
      key: '6rj4kf3v2ylxpwdsr1xqxgor',
      query: searchTerm,
      
      
    },
    dataType: 'jsonp',
    type: 'GET',
    success: callback
  };

  $.ajax(settings);
}

function getDataFromWalmart(searchTerm, callback) {
  const settings = {
    url: WALMART_SEARCH_URL,
    data: {
      
      apiKey: 'f4arv7xx2b3a7n6tpvezn945',
      query: searchTerm,
    },
    dataType: 'jsonp',
    type: 'GET',
    success: callback
  };

  $.ajax(settings);
}
// function makeAllRequests(searchTerm){
//     return $.when(
//         getDataFromEbay(searchTerm),
//         getDataFromApiEtsy(searchTerm),
//         getDataFromApi3(searchTerm)
//     )
//}
function renderSearchResults(ebayData, etsyData, walmartData){
    //build up html string with resulting itmes 
    let HTML = ebayData.results.map(processEbayItem).map(renderResult) 
//push results into DOM 
}
function processEbayItem(item){
//take item form ebay api and return an object with thumbnail and title properties 
}
function renderWalmartResult(result){
//return processedItem.thumbnail + " " + processedItem.title

getDataFromWalmart(searchTerm, displayWalmartData(data))
}
function renderStartPage(){
  headerState.gameStage = "start";
const partsButton = `<button class="parts-button">blah1</button>`;
const galleryButton = `<button class="gallery-button">blah2</button`;
const AAbutton =`<button class="AA-button">blah3</button>`;
const heading = `<h1>365 Subaru</h1>`;
$(".start-page").html(heading + partsbutton + galleryButton + AAbutton);
$("parts-button").click(function(){
    renderPartsPage();
  $(".start-page").html("");
});
$("gallery-button").click(function(){
    renderGalleryPage();
  $(".start-page").html("");
});
$("AA-button").click(function(){
    renderAAPage();
  $(".start-page").html("");
});
}
function renderPartsPage(){
  headerState.gameStage = "parts";
$("parts-search-button").click(function(){
  renderWalmartResult();
});
}

function renderGalleryPage(){
  headerState.gameStage = "gallery";
}
function renderAAPage(){
  headerState.gameStage = "AA";
}

function displayEtsyData(data){
    let totalResultsFnd = `<h5> Your search returned <span class='resultNum'>${data.pageInfo.totalResults}</span> result(s).</h5>`;
        const searchResults = data.items.map((item, index) => renderResult(item));
    $(".totalNum").html(totalResultsFnd);
}

function displayEbayData(data){
    let totalResultsFnd = `<h5> Your search returned <span class='resultNum'>${data.pageInfo.totalResults}</span> result(s).</h5>`;
        const searchResults = data.items.map((item, index) => renderResult(item));
    $(".totalNum").html(totalResultsFnd);
}

function displayWalmartData(data){
    //how do I add the searches together interm of compining the data in the dom and presenting it to the html?
    return `
 <div>
   <h2>
   <a class="js-result-name" href="https://api.walmartlabs.com/v1/search?v=${result.id.videoId}" target="_blank">${result.snippet.title}</a> 
   </h2>
   <a href="https://api.walmartlabs.com/v1/search?v=${result.id.videoId}" target="_blank"><img src="${result.snippet.thumbnails.default.url}"></a>
</div>
 `;

    console.log(data)
let totalResultsFnd = `<h5> Your search returned <span class='resultNum'>${data.totalResults}</span> result(s).</h5>`;
const searchResults = data.items.map((item, index) => renderWalmartResult(item));
$(".totalNum").html(totalResultsFnd);
}

getDataFromWalmart("ipod", displayWalmartData)
//response = "{name:'steve',age:22}"
//response.age
//{id:{videoID:lkjsdlfkjdlsfjk}}
//"google how to copy the raw response"
//response.items
//response.items[0].name
//response.items.forEach(function(item){console.log(item.name)})
//response.items
//var response = JSON.parse(response)
//var parsedResponse = JSON.parse(response)