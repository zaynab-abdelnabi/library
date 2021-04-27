import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.css';
import 'jquery/dist/jquery';
import 'popper.js/dist/popper';
import '../sass/style.scss';

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    $('a.scroll').on('click', function (event) {
        var hash = this.hash;
        $('html,body').animate({ scrollTop: $(hash).offset().top - 100 }, 800, function () { });
    });

    $('.add-book').on('click', function(){
        alert('لقد تمت إضافة الكتاب الى عربة التسوق, شكراً لتسوقك من دارنا.');
    });

    $('.thumbnail1').hover(function () {
        $(this).find('.project-category').hide();
        $(this).find('.caption1').slideDown(250);
    },
        function () {
            $(this).find('.caption1').slideUp(250);
            $(this).find('.project-category').show();
        }
    );

    var pathname = window.location.pathname;
    console.log(pathname);
    $('.navbar-nav > li > a[href="' + pathname + '"]').parent().addClass('active');
    if (pathname === '/add-blog.html' || pathname === '/blog-details.html') {
        $('.navbar-nav > li > a[href="/blog.html"]').parent().addClass('active');
    }
    if (pathname === '/project-details.html') {
        $('.navbar-nav > li > a[href="/projects.html"]').parent().addClass('active');
    }

    let modalId = $('#image-gallery');
    loadGallery(true, 'a.thumbnail');
    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
        $('#show-previous-image, #show-next-image')
            .show();
        if (counter_max === counter_current) {
            $('#show-next-image')
                .hide();
        } else if (counter_current === 1) {
            $('#show-previous-image')
                .hide();
        }
    }

    function loadGallery(setIDs, setClickAttr) {
        let current_image,
            selector,
            counter = 0;

        $('#show-next-image, #show-previous-image')
            .on('click', function () {
                if ($(this)
                    .attr('id') === 'show-previous-image') {
                    current_image--;
                } else {
                    current_image++;
                }

                selector = $('[data-image-id="' + current_image + '"]');
                updateGallery(selector);
            });

        function updateGallery(selector) {
            let $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-title')
                .text($sel.data('title'));
            $('#image-gallery-image')
                .attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }

        if (setIDs == true) {
            $('[data-image-id]')
                .each(function () {
                    counter++;
                    $(this)
                        .attr('data-image-id', counter);
                });
        }
        $(setClickAttr)
            .on('click', function () {
                updateGallery($(this));
            });
    }
});


