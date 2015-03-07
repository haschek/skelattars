/*
    Skelattars Template, forked from Strata by HTML5 UP.
    Free for personal and commercial use under the CC-BY 3.0 license.
    @see https://github.com/haschek/skelattars
*/

(function($) {

    var settings = {

        // Parallax background effect?
            parallax: true,

        // Parallax factor (lower = more intense, higher = less intense).
            parallaxFactor: 20

    };

    skel.init({
        reset: 'full',
        containers: '100%',
        breakpoints: {
            xsmall: { media: '(min-width: 481px)', href: false  },
            small:  { media: '(min-width: 737px)', href: false  },
            medium: { media: '(min-width: 981px)', href: false  },
            large:  { media: '(min-width: 1281px)', href: false },
            xlarge: { media: '(min-width: 1801px)', href: false }
        }
    });

    $(function() {

        var $window = $(window),
            $body = $('body'),
            $header = $('#header');

        // Disable animations/transitions until the page has loaded.
            $body.addClass('is-loading');

            $window.on('load', function() {
                $body.removeClass('is-loading');
            });

        // Touch?
            if (skel.vars.isMobile) {

                // Turn on touch mode.
                    $body.addClass('is-touch');

                // Height fix (mostly for iOS).
                    window.setTimeout(function() {
                        $window.scrollTop($window.scrollTop() + 1);
                    }, 0);

            }

        // Forms (IE<10).

            if (skel.vars.IEVersion < 10) {

                var $form = $('form');

                if ($form.length > 0) {

                    $.fn.n33_formerize = function(){
                        var _fakes= [],
                            _form = $(this);
                        
                        _form.find('input[type=text],textarea')
                        .each(
                            function() {
                                var e = $(this);
                                
                                if (e.val() === '' || e.val() === e.attr('placeholder')) {
                                    e.addClass('formerize-placeholder');
                                    e.val(e.attr('placeholder'));
                                }
                            }
                        )
                        .blur(
                            function() {
                                var e = $(this);
                                
                                if (e.attr('name').match(/_fakeformerizefield$/)) {
                                    return;
                                }
                                
                                if (e.val() === '') {
                                    e.addClass('formerize-placeholder');
                                    e.val(e.attr('placeholder'));
                                }
                            }
                        )
                        .focus(
                            function() {
                                var e = $(this);
                                
                                if (e.attr('name').match(/_fakeformerizefield$/)) {
                                    return;
                                }
                                
                                if (e.val() === e.attr('placeholder')) {
                                    e.removeClass('formerize-placeholder');
                                    e.val('');
                                }
                            }
                        );
                        
                        _form
                        .find('input[type=password]')
                        .each(
                            function() {
                                var e = $(this);
                                var x = $(
                                    $('<div>')
                                    .append(
                                        e.clone()
                                    )
                                    .remove()
                                    .html()
                                    .replace(
                                        /type="password"/i,
                                        'type="text"'
                                    )
                                    .replace(
                                        /type=password/i,
                                        'type=text'
                                    )
                                );
                                
                                if (e.attr('id') !== '') {
                                    x.attr('id', e.attr('id') + '_fakeformerizefield');
                                }
                                
                                if (e.attr('name') !== '') {
                                    x.attr('name', e.attr('name') + '_fakeformerizefield');
                                }
                                
                                x
                                .addClass('formerize-placeholder')
                                .val(x.attr('placeholder'))
                                .insertAfter(e);
                                
                                if (e.val() === '') {
                                    e.hide();
                                }
                                else {
                                    x.hide();
                                }
                                
                                e.blur(
                                    function(event) {
                                        event.preventDefault();
                                        var e = $(this);
                                        var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]');
                                        
                                        if (e.val() === '') {
                                            e.hide();
                                            x.show();
                                        }
                                    }
                                );
                                
                                x.focus(
                                    function(event) {
                                        event.preventDefault();
                                        var x = $(this);
                                        var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']');
                                        x.hide();
                                        e.show().focus();
                                    }
                                );
                                
                                x.keypress(
                                    function(event) {
                                        event.preventDefault();
                                        x.val('');
                                    }
                                );
                            }
                        );
                        
                        _form
                        .submit(
                            function() {
                                $(this)
                                .find('input[type=text],input[type=password],textarea')
                                .each(
                                    function() {
                                        var e = $(this);
                                        
                                        if (e.attr('name').match(/_fakeformerizefield$/)) {
                                            e.attr('name', '');
                                        }
                                        
                                        if (e.val() === e.attr('placeholder')) {
                                            e.removeClass('formerize-placeholder');
                                            e.val('');
                                        }
                                    }
                                );
                            }
                        )
                        .bind(
                            'reset',
                            function(event) {
                                event.preventDefault();
                                $(this).find('select').val($('option:first').val());
                                $(this)
                                .find('input,textarea')
                                .each(
                                    function() {
                                        var e = $(this);
                                        var x;
                                        e.removeClass('formerize-placeholder');
                                        
                                        switch (this.type) {
                                            case 'submit':
                                            case 'reset':
                                                break;
                                            case 'password':
                                                e.val(e.attr('defaultValue'));
                                                x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]');
                                                if (e.val() === '') {
                                                    e.hide();
                                                    x.show();
                                                }
                                                else {
                                                    e.show();
                                                    x.hide();
                                                }
                                                break;
                                            case 'checkbox':
                                            case 'radio':
                                                e.attr('checked', e.attr('defaultValue'));
                                                break;
                                            case 'text':
                                            case 'textarea':
                                                e.val(e.attr('defaultValue'));
                                                if (e.val() === '') {
                                                    e.addClass('formerize-placeholder');
                                                    e.val(e.attr('placeholder'));
                                                }
                                                break;
                                            default:
                                                e.val(e.attr('defaultValue'));
                                                break;
                                        }
                                    }
                                );
                                
                                window.setTimeout(
                                    function() {
                                        var x;
                                        for (x in _fakes) {
                                            _fakes[x].trigger('formerize_sync');
                                        }
                                    },
                                    10
                                );
                            }
                        );
                        
                        return _form;
                    };
                    
                    $form.n33_formerize();

                }

            }

        // Header.

            // Fixed Header
            
                var headeritem = $('#header > *:last-child');
                var footer = $('#footer');
                
                $window.on('resize', function() {
                    var vert_min = headeritem.position().top + headeritem.outerHeight();
                    var vert_max = $(window).height() - footer.outerHeight();

                    if (vert_min < vert_max) {
                        $body.addClass('fixedheader-on');
                    }
                    else {
                        $body.removeClass('fixedheader-on');
                    }
                    
                });
                $window.trigger('resize');
                
            // Parallax background.

                // Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
                if (skel.vars.browser === 'ie' || skel.vars.isMobile) {
                    settings.parallax = false;
                }

                if (settings.parallax) {

                    skel.change(function() {
                        $header.css('background-position', '');
                        $window.trigger('resize');

                        if (!skel.isActive('medium')) {
                            $window.off('scroll.strata_parallax');
                            $body.removeClass('parallax-on');
                        }
                        else {
                            $body.addClass('parallax-on');
                            
                            $window.on('scroll.strata_parallax', function() {
                                $header.css('background-position', '');
                                var bgposleft = $header.css('background-position').split(' ', 1).toString();
                                $header.css(
                                    'background-position',
                                    bgposleft + ' ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px'
                                );
                            });
                        }

                    });

                }

        // Main Sections: Two.

            // Lightbox gallery.
                $('#two').poptrox({
                    caption: function($a) { return $a.siblings('.caption').text() || $a.next().text(); },
                    // overlayColor: '#2c2c2c',
                    // overlayOpacity: 0.85,
                    popupCloserText: '',
                    popupLoaderText: '',
                    selector: '.work-item a',
                    usePopupCaption: true,
                    usePopupDefaultStyling: false,
                    usePopupEasyClose: false,
                    usePopupNav: true,
                    windowMargin: (!skel.isActive('medium') ? 0 : 50)
                });

    });

})(jQuery);
