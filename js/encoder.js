function encodeBase64() {
    var inputString = document.getElementById("input").value;
    try {
        var encodedString = btoa(inputString);
        $(".wem").show();
        $("#outputx").val(encodedString);
        $("#output").text('');
    } catch (e) {
        document.getElementById("output").textContent = "Invalid input string";
    }
}

function resetFields() {
    $("#input").val('');
    $("#outputx").val('');
    $("#outputen").val('');
    $("#outputiv").val('');
    $(".wem").hide();
    $("#output").text('');
}
function decodeBase64() {
    var encodedString = document.getElementById("input").value;
    try {
        var decodedString = atob(encodedString);
        $(".wem").show();
        $("#outputx").val(decodedString);
        $("#output").text('');
    } catch (e) {
        document.getElementById("output").textContent = "Invalid Base64 string";
    }
}

function copyToClipboard(idofText) {
    var copyText = document.getElementById(idofText);

    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Modern approach
    navigator.clipboard.writeText(copyText.value).then(function () {
        alert("Copied to clipboard successfully!");
    }, function (err) {
        console.error("Could not copy text: ", err);
    });
}
let morseCodeDict = {}; // This will store the Morse Code data loaded from the JSON file
let reverseMorseCodeDict = {}; // This will be the reverse of morseCodeDict

// Load the Morse code dictionary from an external JSON file
$.getJSON('json/morse.json', function(data) {
    morseCodeDict = data;
    // Create a reverse lookup for Morse to Text
    reverseMorseCodeDict = Object.fromEntries(
        Object.entries(morseCodeDict).map(([key, value]) => [value, key])
    );
    console.log('Morse Code Dictionary Loaded:', morseCodeDict);
});

// Convert Text to Morse
function textToMorse(text) {
    return text.toLowerCase().split('').map(char => morseCodeDict[char] || '').join(' ');
}

// Convert Morse to Text
function morseToText(morse) {
    return morse.split(' ').map(code => reverseMorseCodeDict[code] || '').join('');
}

function texttomosclick() { 

    const inputText = $('#inputText').val().trim();
    if (!inputText) {
        alert('Please enter text to convert.');
        return;
    }
    const morseCode = textToMorse(inputText);
  
    $('#resultTextmorse').val(morseCode);
 }

 function morsetoTextClick() { 
    const inputMorse = $('#inputText').val().trim();
    if (!inputMorse) {
        alert('Please enter morse code to convert.');
        return;
    }
    const text = morseToText(inputMorse);

    $('#resultTextmorse').val(text);
  }
