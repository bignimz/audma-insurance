'use strict';

$(document).ready(function(){
    // When the menu bar is clicked
    $('.menu-bar').click(function(){
        $('.menu-bar').toggle('hide');
        $('.close-menu').toggle('show');
        $('.mobile-menu-section').slideToggle('slow');
    });

    // When the close menu icon is clicked
    $('.close-menu').click(function(){
        $('.menu-bar').toggle('show');
        $('.close-menu').toggle('hide');
        $('.mobile-menu-section').slideToggle('hide');
    });

    // When Nav-item is clicked
    $('.mobile-menu-body .nav-item').click(function(){
        // $('.mobile-menu-section').slideToggle('slow');
    });

});

