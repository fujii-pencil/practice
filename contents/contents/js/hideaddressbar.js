    window.onload = function() {
        setTimeout(doScroll, 100);
    }
    function doScroll() {
        if (window.pageYOffset == 0) {
            window.scroll(0, 1);
        }
    }