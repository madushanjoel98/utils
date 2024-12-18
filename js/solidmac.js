var darkmode = "darkmode";



function OnchangeDarkmood() {
    if ($('#night').prop('checked')) {
        localStorage.setItem(darkmode,1);
        $( "body" ).addClass( "bg-dark text-white" );
        $( ".card" ).addClass( "bg-dark text-white" );
        console.log('Checkbox is checked');
    } else {
        localStorage.setItem(darkmode,0);
        console.log('Checkbox is not checked');
        $( "body" ).removeClass( "bg-dark text-white" );
    }
  }


function checkDarkMood() {
if(  localStorage.getItem(darkmode) == 1 ){
    $('#night').prop('checked', true);
    $( "body" ).addClass( "bg-dark text-white" );
}else{
    
  $( "body" ).removeClass( "bg-dark text-white" );
   
    $('#night').prop('checked', false);
}

  }

  function whatsNew() { 

    
   }