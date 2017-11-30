const EBAY_SEARCH_URL = ''
const ETSEY_SEARCH_URL = ''
const WALMART_SEARCH_URL = ''
let headerState = {pageStage: "start"}
function getDataFromApi1(searchTerm, callback) {
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

  $.ajax(settings);
}

function getDataFromApi2(searchTerm, callback) {
  const settings = {
    url: ETSEY_SEARCH_URL,
    data: {
      part: 'snippet',
      key: '',
      q: `${searchTerm} in:name`,
      
      
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };

  $.ajax(settings);
}

function getDataFromApi3(searchTerm, callback) {
  const settings = {
    url: WALMART_SEARCH_URL,
    data: {
      part: 'snippet',
      key: '',
      q: `${searchTerm} in:name`,
      
      
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };

  $.ajax(settings);
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
}