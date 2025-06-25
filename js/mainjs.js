var darkmode = "darkmode";
var whatsappCHATERPager = "whatsapper";
var Base64page = "Base64page";
var MoRSEPAGE = "moRSEPAGE";
var healthPAge = "healthpage";
var DNAANLYSIS = "DNAANLYSIS";
var qrPAge = "qrPAge";
var audioTuner = "audioTuner";
var foodnutri = "foodnutri";
var smartdelemter="smartdelemter";
var soundtunerPage = "frequanceTuner";


let fileCode = 'json/modulesset.json';
let allModules = []; // to store the original list

// This function loads modules and stores them, then renders them
function loadFmodules() {
    HoldOn.open(); // Assuming HoldOn is a loading indicator
    $("#moduleverse").empty();

    $.getJSON(fileCode, function(data) {
        allModules = data; // Store the full data for searching
        renderModules(data); // Render all modules initially
        HoldOn.close();
    }).fail(function() {
        console.error("Error loading moduleset.json");
        HoldOn.close();
    });
}

// This function renders the provided list of modules
function renderModules(modulesToRender) {
    $("#moduleverse").empty();
    if (modulesToRender.length === 0) {
        $("#moduleverse").append("<p>No modules found matching your search.</p>");
        return;
    }
    modulesToRender.forEach(element => {
        $("#moduleverse").append(createmodelDivs(element)); // Assuming createmodelDivs exists
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
$(document).ready(function() {
    loadFmodules();

    // Attach the event listener for the search input
    $("#moduleSearch").on("input", onchangesSearch);
});
function createmodelDivs(element){
const layer = ` <div class="col p-2 m-4 text-white scale-up-top">


            <div class="cards ${element.css} shadow" onclick="${element.function_call}">
              <div class="cards-content">
                <div class="cards-top">
                  <span class="cards-title">${element.module_name}</span>

                </div>
                <div class="cards-bottom">

                  <svg width="32" viewBox="0 -960 960 960" height="32" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z">
                    </path>
                  </svg>
                </div>
              </div>
              <div class="cards-image">
                <img width="58" height="58"
                  src="${element.image_src}"
                  alt="external-encryption-cryptocurrency-sbts2018-outline-sbts2018" />
              </div>
            </div>


          </div>`;
          return layer

}

function OnchangeDarkmood() {
  if ($('#night').prop('checked')) {
    localStorage.setItem(darkmode, 1);
    $("body").addClass("bg-dark text-white");
    $(".card").addClass("bg-dark text-white");
    console.log('Checkbox is checked');
  } else {
    localStorage.setItem(darkmode, 0);
    console.log('Checkbox is not checked');
    $("body").removeClass("bg-dark text-white");
  }
}


function checkDarkMood() {
  if (localStorage.getItem(darkmode) == 1) {
    $('#night').prop('checked', true);
    $("body").addClass("bg-dark text-white");
  } else {

    $("body").removeClass("bg-dark text-white");

    $('#night').prop('checked', false);
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
