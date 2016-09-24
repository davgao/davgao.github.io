 function newpage() {
        window.location = newLocation;
 }

function Expand () {   
    $(this).clearQueue();
    $(this).animate({'width': '36em'}, 500);
    $(this).animate({'height': '10em'}, 500);

}

function Contract () {
    $(this).clearQueue();
    $(this).delay( 500 ).animate({'height': '1em'}, 500);
    $(this).animate({'width': '10em'}, 500);                           
}


$(document).ready(function(){
    
        $('#tn-one').hover(Expand, Contract);
    $('#tn-two').hover(Expand, Contract);
     $('#tn-three').hover(Expand, Contract);
         $('#tn-four').hover(Expand, Contract);
             $('#tn-five').hover(Expand, Contract);
});
