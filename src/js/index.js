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
})