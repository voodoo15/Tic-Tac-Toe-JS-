$(document).on('ready', function() {

    var turn = 0;

        $('td').on('click', function() {
            if ( turn % 2 === 0 ) {
            $(this).html('X');
          } else {
            $(this).html('O');
          }

          $(this).off();
          turn++
        })



})
