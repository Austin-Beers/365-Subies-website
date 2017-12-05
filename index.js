const EBAY_SEARCH_URL = ''
const ETSY_SEARCH_URL = ''
const WALMART_SEARCH_URL = 'http://api.walmartlabs.com/v1/search'
let headerState = {
    pageStage: "start"
}

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

function getAuthEbay(basic) {
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

function makeAllRequests(searchTerm) {
    return $.when(
        getDataFromEbay(searchTerm), getDataFromApiEtsy(searchTerm), getDataFromApi3(searchTerm)
    )
}

function renderSearchResults(ebayData, etsyData, walmartData) {
    //build up html string with resulting itmes 
    let HTML = ebayData.results.map(processEbayItem)
        .map(renderResult)
        //push results into DOM 
}

function processEbayItem(item) {
    //take item form ebay api and return an object with thumbnail and title properties 
}

function renderResult(processedItem) {
    return processedItem.thumbnail + " " + processedItem.title
}

function renderStartPage() {
    headerState.gameStage = "start";
    const partsButton = `<button class="parts-button">blah1</button>`;
    const galleryButton = `<button class="gallery-button">blah2</button`;
    const AAbutton = `<button class="AA-button">blah3</button>`;
    const heading = `<h1>365 Subaru</h1>`;
    $(".start-page")
        .html(heading + partsbutton + galleryButton + AAbutton);
    $("parts-button")
        .click(function () {
            renderPartsPage();
            $(".start-page")
                .html("");
        });
    $("gallery-button")
        .click(function () {
            renderGalleryPage();
            $(".start-page")
                .html("");
        });
    $("AA-button")
        .click(function () {
            renderAAPage();
            $(".start-page")
                .html("");
        });
}

function renderPartsPage() {
    headerState.gameStage = "parts";
}

function renderGalleryPage() {
    headerState.gameStage = "gallery";
}

function renderAAPage() {
    headerState.gameStage = "AA";
}

function displayEtsyData(data) {
    let totalResultsFnd = `<h5> Your search returned <span class='resultNum'>${data.pageInfo.totalResults}</span> result(s).</h5>`;
    const searchResults = data.items.map((item, index) => renderResult(item));
    $(".totalNum")
        .html(totalResultsFnd);
}

function displayEbayData(data) {
    let totalResultsFnd = `<h5> Your search returned <span class='resultNum'>${data.pageInfo.totalResults}</span> result(s).</h5>`;
    const searchResults = data.items.map((item, index) => renderResult(item));
    $(".totalNum")
        .html(totalResultsFnd);
}

function displayWalmartData(data) {
    //how do I add the searches together interm of compining the data in the dom and presenting it to the html?
    console.log(data)
}

getDataFromWalmart("ipod", displayWalmartData)
