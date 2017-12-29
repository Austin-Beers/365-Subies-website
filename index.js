const WALMART_SEARCH_URL = 'https://api.walmartlabs.com/v1/search'
const ETSY_SEARCH_URL = 'https://openapi.etsy.com/v2/listings/active'
let headerState = {
    pageStage: "start"
}

function renderBackButton(){
    const backButton = `<button id="back-button">Previous Page</button>`
    $("#back-page").html(backButton)
    $("#back-button").click(returnToStartPage)
    $("#back-page").show()
}

function returnToStartPage(){
    $("#start-page").show()
    $("#back-page").hide()
    $("#parts-page").hide()
    $("#gallery-page").hide()
    $("#aa-page").hide()
}

function renderStartPage() {
    headerState.gameStage = "start";
    const partsButton = `<button id="parts-button">Search Parts</button>`;
    const galleryButton = `<button id="gallery-button">Our Gallery</button>`;
    const AAbutton = `<button id="AA-button">Search Accesories and Apparel </button>`;
    const heading = `<h1>365 Subaru</h1>`;
    $("#parts-button-id").html(partsButton);
    $("#gallery-button-id").html(galleryButton);
    $("#aa-button-id").html(AAbutton);
    $("#parts-button").click(renderPartsPage);
    $("#AA-button").click(renderAAPage);
    $("#gallery-button").click(renderGalleryPage);
    //convert to form similar to parts page
};

function renderGalleryPage() {
    renderBackButton()
    $("#gallery-page").show();
    $("#start-page").hide();
    headerState.pageStage = "gallery";
}

function renderAAPage() {
    renderBackButton()
    console.log("beanbag");
    $("#start-page").hide();
    $("#aa-page").show();
    headerState.pageStage = "AA";
    $("#aa-search-form").submit(event => {
        event.preventDefault();
        const aaTarget = $(event.currentTarget).find("#aa-search-input");
        const aaQuery = aaTarget.val();
        console.log(aaQuery);
        aaTarget.val("");
        getDataFromEtsy(aaQuery, displayEtsyData);
    });
}

 let partsQuery =  "";      
 let partsIndex =  1;

 function addToPartsIndex(addedNumber){
     partsIndex += addedNumber;
    
    }

 function setPartsQuery(setQuery){
    partsQuery = setQuery;
}

 function renderPartsPage() {
    renderBackButton()
    console.log("clicked parts");
    $("#start-page").hide();
    $("#parts-page").show();
    headerState.pageStage = "parts";
    $("#parts-search-form").submit(event => {
        
        event.preventDefault();
        const partsTarget = $(event.currentTarget).find("#parts-search-input");
       setPartsQuery(partsTarget.val());
       //const partsQuery = partsTarget.val();
        partsTarget.val("");
        getDataFromWalmart(partsQuery, displayWalmartData, partsIndex);
    //pass in search term instead of const value inorder for pagination
    });
 $("#get-more-button").click(event =>{
    event.preventDefault();
    console.log(partsQuery,partsIndex);
    getDataFromWalmart(partsQuery, appendWalmartData, partsIndex)
 
})

}
// partsQuery becomes searchTerm & appendWalmartData becomes callback
function getDataFromWalmart(searchTerm, callback, partsIndex) {
    console.log(searchTerm)
    const settings = {
      url: WALMART_SEARCH_URL,
      data: {
        apiKey: 'f4arv7xx2b3a7n6tpvezn945',
        query: searchTerm,
        start: partsIndex,
    },
      dataType: 'jsonp',
      type: 'GET',
      success: callback   
    };
  $.ajax(settings);
  }

 function renderWalmartResult(result){
    
    return `
    <div class="parts-container">
        <h2>
            <a class="parts-search-title" href="${result.productUrl}" target="_blank">${result.name}</a>
            <a class="parts-search-price" href="${result.productUrl}" target="_blank">${result.salePrice}</a>
        </h2>
        <a class="parts-search-image" href="${result.productUrl}" target="_blank"><img src="${result.thumbnailImage}</a>"
    </div>
`
}

function displayWalmartData(data){
    let totalResultsFnd = `<h5> Your search returned <span id='resultNum'>${data.totalResults}</span> result(s).</h5>`;
    $("#totalNum0").html(totalResultsFnd);
    const searchResults = data.items.map((item, index) => renderWalmartResult(item));
    $("#parts-result").html(searchResults);
    
    addToPartsIndex(data.items.length) 
    
    // $("#get-more-button").click(getDataFromWalmart())
    // if(totalReslutsFnd > 10){
    //     $("#get-more-button").show()
    // }
}         

function appendWalmartData(data){
    const searchResults = data.items.map((item, index) => renderWalmartResult(item));
    $("#parts-result").append(searchResults);
    addToPartsIndex(data.items.length) 
}

function getDataFromEtsy(searchTerm, callback) {
    etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords="+
    searchTerm+"&limit=12&includes=Images:1&api_key=6rj4kf3v2ylxpwdsr1xqxgor";
    const settings = {
        url: etsyURL ,
        dataType: 'jsonp',
        type: 'GET',
        success: callback 
    };
   $.ajax(settings);
  }

  function renderEtsyResult(result){
    console.log(result, "result");
    console.log(result.title, result.price, result.Images[0].url_75x75);
     return `
     
    <div class="aa-container">
        <h2>
             <a class="aa-search-title" href="${result.url}" target="_blank">${result.title}</a>
             <a class="aa-search-price" href="${result.url}" target="_blank">${result.price}</a>
         </h2>
         <a class="aa-search-image" href="${result.url}" target="_blank"><img src="${result.Images[0].url_75x75}"></img></a>"
     </div>
     
 `
  }
  
  function displayEtsyData(data){
    console.log(data, "data")
    let totalResultsFnd = `<h5> Your search returned <span id='resultNum'>${data.count}</span> result(s).</h5>`;
    const searchResults = data.results.map((item, index) => renderEtsyResult(item));
    $("#totalNum1").html(totalResultsFnd);
    $("#aa-result").html(searchResults);
}
renderStartPage();
