var darkmode = "darkmode";
var whatsappCHATERPager = "whatsapper";
var Base64page = "Base64page";
var MoRSEPAGE = "moRSEPAGE";
var healthPAge = "healthpage";
var DNAANLYSIS = "DNAANLYSIS";
var qrPAge = "qrPAge";
var audioTuner = "audioTuner";
var foodnutri = "foodnutri";
var smartdelemter = "smartdelemter";
var soundtunerPage = "frequanceTuner";


let fileCode = 'json/modulesset.json';
let whatsnewjson = 'json/whatsnew.json';
let allModules = []; // to store the original list


function firstLoader() {
   $("#whlist").empty();
  var uid = localStorage.getItem("uid");
  $.getJSON(whatsnewjson, function (data) {
    allModules = data.list; // Store the full data for searching
  
    if (uid == null) {
      openModal();
    }
    if (uid != data.uuid) {
      openModal();
      localStorage.setItem("uid", data.uuid);
    }
    allModules.forEach(element => {
      var layer = `<li class="list-group-item">${element}</li>`;
      $("#whlist").append(layer);
    });

  }).fail(function () {
    console.error("Error loading moduleset.json");
    
  });



}
function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}
// This function loads modules and stores them, then renders them
function loadFmodules() {
  HoldOn.open(); // Assuming HoldOn is a loading indicator
  $("#moduleverse").empty();

  $.getJSON(fileCode, function (data) {
    allModules = data; // Store the full data for searching
    renderModules(data); // Render all modules initially
    HoldOn.close();
  }).fail(function () {
    console.error("Error loading moduleset.json");
    HoldOn.close();
  });
}

// This function renders the provided list of modules
function renderModules(modulesToRender) {
  $("#moduleverse").empty();
  if (modulesToRender.length === 0) {
    $("#moduleverse").append(`
      <div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <p>No tools found matching your search.</p>
      </div>`);
    return;
  }
  modulesToRender.forEach((element, index) => {
    var card = createmodelDivs(element, index);
    $("#moduleverse").append(card);
  });
}

// This function handles the search logic
function onchangesSearch() {
  const query = $("#moduleSearch").val().toLowerCase();

  const filtered = allModules.filter(mod =>
    mod.module_name.toLowerCase().includes(query)
  );

  console.log("Filtered modules:", filtered); // For debugging
  renderModules(filtered);
}

// Initialize the modules when the document is ready
$(document).ready(function () {
  loadFmodules();

  // Attach the event listener for the search input
  $("#moduleSearch").on("input", onchangesSearch);
});
function createmodelDivs(element, index) {
  const delay = (index || 0) * 60;
  const layer = `
    <div class="tool-card-wrap" style="animation-delay: ${delay}ms">
      <div class="cards ${element.css}" onclick="${element.function_call}" role="button" tabindex="0" aria-label="Open ${element.module_name}">
        <div class="card-accent-bar"></div>
        <div class="card-icon-bg">
          <img src="${element.image_src}" alt="${element.module_name} icon" loading="lazy" />
        </div>
        <div class="cards-content">
          <div class="cards-top">
            <span class="cards-title">${element.module_name}</span>
            <span class="card-badge">Tool</span>
          </div>
          <div class="cards-bottom">
            <span></span>
            <div class="card-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  return layer;
}

function OnchangeDarkmood() {
  if ($('#night').prop('checked')) {
    localStorage.setItem(darkmode, 1);
    $("body").removeClass("light-mode");
  } else {
    localStorage.setItem(darkmode, 0);
    $("body").addClass("light-mode");
  }
}

function checkDarkMood() {
  if (localStorage.getItem(darkmode) == 0) {
    $('#night').prop('checked', false);
    $("body").addClass("light-mode");
  } else {
    $('#night').prop('checked', true);
    $("body").removeClass("light-mode");
  }
}

function loadWhatsAppChatter() {
  $("#connts").toggle();
  $("#main").load("whatsapp.html");
  location.hash = whatsappCHATERPager;
}

function loadCommponetencription() {

  $("#connts").toggle();
  $("#main").load("encoder.html").after();
  checkDarkMood();
  location.hash = Base64page;
}
function loadCommpMorse() {
  $("#connts").toggle();
  $("#main").load("morse.html");
  location.hash = MoRSEPAGE;

}
function loadsoundtuner() {
  $("#connts").toggle();
  $("#main").load("soundfequance.html");
  location.hash = soundtunerPage;

}
function loadHealth() {
  $("#connts").toggle();
  $("#main").load("health.html");
  location.hash = healthPAge;
}
function loadQRgen() {
  $("#connts").toggle();
  $("#main").load("qr.html");
  location.hash = qrPAge;
}
function loadFoodnutri() {
  $("#connts").toggle();
  $("#main").load("foodnuti.html");
  location.hash = "foodnutri";
}
tunerview = function () {
  $("#connts").toggle();
  $("#main").load("tuner.html");
  location.hash = audioTuner;
}
function loadsmartdele() {
  $("#connts").toggle();
  $("#main").load("smartdelemter.html");
  location.hash = "smartdelemter";
}
function toogs(id) {
  window.location.hash = '';
  location.reload();

}
function loadDanAnylisis() {
  $("#connts").toggle();
  $("#main").load("dnaanalysis.html");
  location.hash = DNAANLYSIS;
}
function trcBramuda() {
  location.replace("https://alphasl.pythonanywhere.com/");
}

function urlHashChecker() {
  var loc = location.hash; // This gets the hash including the '#' symbol
  console.log("Current Hash: ", loc);

  switch (loc) {
    case "#" + Base64page:
      loadCommponetencription();
      break;

    case "#" + whatsappCHATERPager:

      loadWhatsAppChatter();
      break;

    case "#" + MoRSEPAGE:
      loadCommpMorse();
      break;

    case "#" + healthPAge:
      loadHealth();
      break;

    case "#" + qrPAge:
      loadQRgen();
      break;

    case "#" + DNAANLYSIS:
      loadDanAnylisis();
      break;
    case "#" + audioTuner:
      tunerview();
      break;
    case "#" + foodnutri:
      loadFoodnutri();
      break;

    case "#" + smartdelemter:
      loadsmartdele();
      break;
    case "#" + soundtunerPage:
      loadsoundtuner();

    default:
      console.log("No matching case for:", loc);

      break;
  }
}
