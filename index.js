$(`#title`).click(()=>window.location.reload())
$(document).ready(function(){
$('.sidenav').sidenav();
$('.tabs').tabs();
$('.scrollspy').scrollSpy();
$('.materialboxed').materialbox();
$('.tooltipped').tooltip();
$(`.text-contact`).css("margin-right","2rem")
$(`.card`).css("border-radius","15px")
$(`.indicator`).css("border-radius","10px")
$('#front_car').carousel();
// $('#rest_car').carousel();

});