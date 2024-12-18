var darkmode = "darkmode";
var whatsappCHATERPager = "whatsapper";
var Base64page = "Base64page";
var MoRSEPAGE = "moRSEPAGE";
var healthPAge = "healthpage";
var qrPAge = "QRgen";
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
function toogs(id) {
  window.location.hash = '';
  location.reload();

}

function urlHashChecker() {
  var loc = location.hash; // This gets the hash including the '#' symbol
  console.log("Current Hash: ", loc);

  switch (loc) {
    case "#"+Base64page:
      loadCommponetencription();
      break;

    case "#"+whatsappCHATERPager:
     
      loadWhatsAppChatter();
      break;

    case "#"+MoRSEPAGE:
      loadCommpMorse();
      break;

    case "#"+healthPAge:
      loadHealth();
      break;

    case "#qrPAge":
      loadQRgen();
      break;

    default:
      console.log("No matching case for:", loc);
 
      break;
  }
}
