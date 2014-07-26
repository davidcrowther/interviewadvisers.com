jQuery(document).ready(function(){

    jQuery(".cta-2").css({backgroundSize: "cover"});

    jQuery('a[href*=#]').bind("click", function(e){
        var anchor = jQuery(this);
        var name = anchor.attr('href').replace(new RegExp("#",'gi'), '');
        jQuery('html, body').stop().animate({
            scrollTop: jQuery('a[class=anchor-'+name+']').offset().top
        }, 1500);
        e.preventDefault();
        return false;
    });

    if (window.PIE) {
        jQuery('.rounded, .btn, .ready-box ul li span, .s-quote').each(function() {
            PIE.attach(this);
        });
    }


    jQuery(".testimonial-slides").responsiveSlides({
        auto: true,             // Boolean: Animate automatically, true or false
        speed: 500,            // Integer: Speed of the transition, in milliseconds
        timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
        pager: true,           // Boolean: Show pager, true or false
        nav: false,             // Boolean: Show navigation, true or false
        random: false,          // Boolean: Randomize the order of the slides, true or false
        pause: false,           // Boolean: Pause on hover, true or false
        pauseControls: true,    // Boolean: Pause when hovering controls, true or false
        prevText: "Previous",   // String: Text for the "previous" button
        nextText: "Next",       // String: Text for the "next" button
        maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
        navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
        manualControls: "",     // Selector: Declare custom pager navigation
        namespace: "rslides",   // String: Change the default namespace used
        before: function(){},   // Function: Before callback
        after: function(){}     // Function: After callback
    });

});







