let headerState = {gameStage: "start"}
function renderStartPage(){
    headerState.gameStage = "start";
  const partsButton = `<button class="parts-button">blah1</button>`;
  const galleryButton = `<button class="gallery-button">blah2</button>`;
  const AAbutton =`<button class="AA-button">blah3</button>`;
  const heading = `<h1>365 Subaru</h1>`;
  $(".start-page").html(heading + partsButton + galleryButton + AAbutton);
  $(".parts-button").click(renderPartsPage);
  $(".gallery-button").click(function(){
      renderGalleryPage();
    $(".start-page").html("");
  //convert to form similar to parts page
});
  $(".AA-button").click(function(){
      renderAAPage();
    $(".start-page").html("");
  //convert to form similar to parts page
});
  }
  function renderPartsPage(){
    console.log("clicked parts")
    $(".parts-page").show()
    $(".start-page").hide();
    headerState.gameStage = "parts";
    $(".parts-search-button").click(function(){
    renderWalmartResult();
});
}
 renderStartPage()