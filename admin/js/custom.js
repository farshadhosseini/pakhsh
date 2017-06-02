$(document).ready(function(){

    $(".button-collapse").sideNav(
        {
            menuWidth: 245, // Default is 300
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        }
    );
    $(".button-collapse-products").sideNav(
        {
            menuWidth: 245, // Default is 300
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        }
    );

    $('.collapsible').collapsible();

    $('.modal').modal();

    $('.carousel.carousel-slider').carousel({fullWidth: true});

    $('select').material_select();
    
});


