/*!
 * Habanero Prototype Boilerplate
 * Author: Habanero Consulting Group
 */

(function() {
    'use strict';

    var elements = {
        body: $('body'),
        globalNav: $('.ms-core-listMenu-horizontalBox')
    },
    classes = {
        active: 'active',
        hover: 'hover',
        hoverOff: 'hover-off'
    };


    // Global Navigation
    function globalNavigationHandlers() {
        elements.globalNav.on('mouseenter', 'li.dynamic-children', function (e) {
            $('.' + classes.hoverOff).removeClass(classes.hoverOff);
            $(this).addClass(classes.hover);
        });

        elements.globalNav.on('mouseleave', 'li.dynamic-children', function (e) {
            var $this = $(this);

            $this.removeClass(classes.hover);
            $this.addClass(classes.hoverOff);

            setTimeout(function() {
                $this.removeClass(classes.hoverOff);
            }, 250);
        });
    }

    globalNavigationHandlers();

})();