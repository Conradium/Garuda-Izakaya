// <!-- DEAR PROFESSOR, IF YOU ARE READING THIS, I AM SORRY, THIS CODE HAS A LOT OF TRASH CODES THAT DOESNT MAKE IT TO THE FINAL -->
// <!-- DRAFT. FOR YOUR CONVENIENCE, ALL OF THE CODES HAVE BEEN BEAUTIFIED FOR EASY READING. ALSO HALFWAY OF DOING THIS, I JUST -->
// <!-- REALIZED THAT IMG SOURCES THAT ARE PUT INSIDE CSS FILES CANNOT BE ON TOP OF THE DIRECTORY OF THE CSS FILE. -->
// <!-- I WILL USE A BETTER HABIT NEXT TIME. -->
$(document).ready(function() {
    //reset the search filters
    $('#reset_search').on('click', function() {
        $('.combine').each(function(e) {
            $(this).val('');
        });
        $('.event').show();
        $('.month').show();
        $('.accordion_content').hide();
    });
    //combine the results into one selector
    $('.combine').on('change', function() {
        //
        var month_option = $('#month').val();
        var sector_option = $('#sector').val();
        var vendor_option = $('#vendor').val();
        var theme_option = $('#theme').val();
        $('.event').hide();
        $('.month').hide();
        var selector = "";
        if (month_option) {
            selector += "[data-month*=" + month_option + "]";
        }
        if (sector_option) {
            selector += "[data-sector*=" + sector_option + "]";
        }
        // when checking a variable to see if it has any matching values or not, treat it as a boolean. 
        // it will either be true or false - if it's true then the value will be added to the 'selector' variable
        if (vendor_option) {
            selector += "[data-vendor*=" + vendor_option + "]";
        }
        if (theme_option) {
            selector += "[data-theme*=" + theme_option + "]";
        }
        if (selector) {
            var matches = $(selector);
            matches.fadeIn();
            matches.parent().fadeIn();
            if (!matches.length) {
                $('#no_event').addClass('active');
            }
            //keep a track on the values and number found and log them to the console
            console.log(selector + " length:" + $(selector).length);
        }
        else {
            //if none of the above are found then show all
            $('.event').show();
            $('.month').show();
        }
    });
    /* ====================
    =======================
    =======================
    ==================== */
    //CLICK EVENT TO SHOW MODAL POP UP
    $('.showModal').on('click', function() {
        var targetId = $(this).attr('href');
        var eventLink = $(this).data("link-href");
        $(targetId).addClass('active');
        return false;
    });
    // $('.closeModal').on('click',function(){
    //     $('.modal').removeClass('active');
    //     $('.event').show();
    //     $('.month').show();
    //     $('.combine').each(function(e){
    //             $(this).val('');
    //         });
    // }); DONT USE THIS, I REMOVED THE X
    /* ====================
    =======================
    =======================
    ==================== */
});
$('.modal').on('click', function(event) {
    if ($(event.target).is($(this)) || $(event.target).parents('.modalContent').length === 0) {
        $(this).removeClass('active');
        $('.event').show();
        $('.month').show();
        $('.combine').each(function(e) {
            $(this).val('');
        });
    }
});