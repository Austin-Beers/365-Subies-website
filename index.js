const EBAY_SEARCH_URL = ''
const ETSEY_SEARCH_URL = ''
const WALMART_SEARCH_URL = ''
let headerState = {pageStage: "start"}
function getDataFromApi1(searchTerm, callback) {
  const settings1 = {
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

  $.ajax(settings1);
}

function getDataFromApi2(searchTerm, callback) {
  const settings2 = {
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

  $.ajax(settings2);
}

function getDataFromApi3(searchTerm, callback) {
  const settings3 = {
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

  $.ajax(settings3);
}
function renderStartPage(){
  headerState.gameStage = "start";
const partsButton = `<button class="parts-button">blah1</button>`;
const galleryButton = `<button class="gallery-button">blah2</button`;
const AAbutton =`<button class="AA-button">blah3</button>`;
const heading = `<h1>365 Subaru</h1>`;
$(".start-page").html(heading + partsbutton + galleryButton + AAbutton);
document.getElementById("parts-button").addEventListener("click", function(){
    renderPartsPage();
  $(".start-page").html("");
});
document.getElementById("gallery-button").addEventListener("click", function(){
    renderGalleryPage();
  $(".start-page").html("");
});
document.getElementById("AA-button").addEventListener("click", function(){
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

