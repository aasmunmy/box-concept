$(document).ready(function() {

    // Function to update the image based on the current size and stacked/singular selection
    function updateImage() {
        var boxSize = $('.size-choose input:checked').attr('data-image');
        var isSelectedStacked = $('#stacked').is(':checked'); // Check if 'stacked' is selected

        // Modify boxSize based on the selection
        if (isSelectedStacked) {
            switch(boxSize) {
                case 'single':
                    boxSize = 'stackedsingle';
                    break;
                case 'double':
                    boxSize = 'stackeddouble';
                    break;
                case 'triple':
                    boxSize = 'stackedtriple';
                    break;
            }
        }

        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + boxSize + ']').addClass('active');
    }

    // Event listener for size selection
    $('.size-choose input').on('click', function() {
        updateImage();
    });

    // Event listener for stacked/singular selection
    $('.height-choose input').on('click', function() {
        updateImage();
    });

});
