//navbar
$(document).ready(function() {
    $.ajax({
        url: '/Navbar/Navbar.html',
        dataType: 'html',
        success: function(data) {
            $('#navbar-placeholder').html(data);
        }
    });
});

// carousel
$(document).ready(function() {
    $.ajax({
        url: '/Carousel/Carousel.html',
        dataType: 'html',
        success: function(data) {
            $('#carousel-placeholder').html(data);
        }
    });
});

// newsfeed
$(document).ready(function() {
    $.ajax({
        url: '/NewsFeed/NewsFeed.html',
        dataType: 'html',
        success: function(data) {
            $('#newsfeed-placeholder').html(data);
        }
    });
});

// events
$(document).ready(function() {
    $.ajax({
        url: '/Events/Events.html',
        dataType: 'html',
        success: function(data) {
            $('#events-placeholder').html(data);
        }
    });
});

// jobs
$(document).ready(function() {
    $.ajax({
        url: '/Jobs/Jobs.html',
        dataType: 'html',
        success: function(data) {
            $('#jobs-placeholder').html(data);
        }
    });
});

// footer
$(document).ready(function() {
    $.ajax({
        url: '/Footer/Footer.html',
        dataType: 'html',
        success: function(data) {
            $('#footer-placeholder').html(data);
        }
    });
});



