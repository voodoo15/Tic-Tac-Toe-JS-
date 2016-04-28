/*
  Exercise:  Tic Tac Toe
  Name:  Arnold Redoblado
  Date:  2016-04-27
  Purpose:  Make Tic Tac Toe app in javascript/jQuery
*/

$( document ).on( 'ready', function() {

    var gameOver = false;
    var gameState = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    var activePlayer = 1;
    var winningCombos = [
      [ 0, 1, 2 ],
      [ 3, 4, 5 ],
      [ 6, 7, 8 ],
      [ 0, 3, 6 ],
      [ 1, 4, 7 ],
      [ 2, 5, 8 ],
      [ 0, 4, 8 ],
      [ 2, 4, 6 ]
    ];

    function winning() {
      for (i = 0; i < 8; i++) {
        if ( gameState[ winningCombos[ i ][ 0 ] ] != 0 && gameState[ winningCombos[ i ][ 0 ] ] === gameState[ winningCombos[ i ][ 1 ] ] &&
             gameState[ winningCombos[ i ][ 1 ] ] === gameState[ winningCombos[ i ][ 2 ] ] ) {
               gameOver = true;
        }
        i++;
      }
    }

    $( 'td' ).on( 'click', function() {

      if ( activePlayer === 1 ) {
        $( this ).html( 'X' ).addClass( 'X' );
        gameState[ ( $( this ).attr( 'class' ) )[ 0 ] ] = 1;
        console.log( ($( this ).attr( 'class' ) )[ 0 ] );
        activePlayer = 2;
      } else {
        $( this ).html( 'O' ).addClass( 'X' );
        gameState[ ( $( this ).attr( 'class' ) )[ 0 ] ] = 2;
        activePlayer = 1;
        console.log( ($( this ).attr( 'class' ) )[ 0 ] );
      }

      winning();

      $( this ).off();
       console.log(gameOver,  gameState );
    })

})
