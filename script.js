$('document').ready(function() {
    $('.fa-bars').click(function() {
        $('.header').toggleClass('active');
        $('.fa-bars').toggleClass('fa-times');
    });
    $('#standard').click(function() {
        $('.standard-calculator').addClass('active');
        $('.scientific-calculator').removeClass('active');
        $('.landing').addClass('inactive');
    })
    $('#scientific').click(function() {
        $('.scientific-calculator').addClass('active');
        $('.standard-calculator').removeClass('active');
        $('.landing').addClass('inactive');
    })
});