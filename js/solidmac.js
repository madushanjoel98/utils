import './jquery';
var BRLISTER = "brnu";


console.log("HELLO");
var i= await SessionStroageRunnerJSON;

function salterExample() {

    var f = [

        { "name": "joel" },
        { "name": "madushan" },
    ];






    return f;

}

async function SessionStroageRunnerJSON(data, key, url, method) {
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      const responseData = await response.json();
  
      // Get the current data in sessionStorage
      let op = sessionStorage.getItem(key);
      
      // If sessionStorage is empty or the lengths of the data are different, update sessionStorage
      if (!op || op.length !== JSON.stringify(responseData).length) {
        sessionStorage.setItem(key, JSON.stringify(responseData));
      } else {
        return sessionStorage.getItem(key);
      }
  
      console.log(responseData);
  
    } catch (error) {
      console.log(error);
    }
  }
  