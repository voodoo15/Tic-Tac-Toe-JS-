/*
  Exercise:  Tic Tac Toe
  Name:  Arnold Redoblado
  Date:  2016-04-27
  Purpose:  Make Tic Tac Toe app in javascript/jQuery
*/

$( document ).on( 'ready', function() {

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

    function gameOver() {
      //Because I change the player early before the win, I'm inverting the label
      if ( activePlayer === 1 ) {
        $( "#gametext" ).html( "O's have won!" );
      } else {
        $( "#gametext" ).html( "X's have won!" );
      }
      $( 'td' ).off();

    }

    function winning() {
      for (i = 0; i < 8; i++) {
        if ( gameState[ winningCombos[ i ][ 0 ] ] != 0 &&
             gameState[ winningCombos[ i ][ 0 ] ] === gameState[ winningCombos[ i ][ 1 ] ] &&
             gameState[ winningCombos[ i ][ 1 ] ] === gameState[ winningCombos[ i ][ 2 ] ] ) {
               gameOver();
        }
      }
    }

    $( 'td' ).on( 'click', function() {

      if ( activePlayer === 1 ) {
        $( this ).html("X" );
        gameState[ ( $( this ).attr( 'class' ) ) ] = 1;
        $( '#gametext' ).html( "O's turn!" );
        activePlayer = 2;
        console.log( ($( this ).attr( 'class' ) ) );
      } else {
        $( this ).html( "O" );
        gameState[ ( $( this ).attr( 'class' ) ) ] = 2;
        $( '#gametext' ).html( "X's turn!" );
        activePlayer = 1;
        console.log( ($( this ).attr( 'class' ) ) );
      }

      winning();

      $( this ).off();
       console.log(activePlayer, gameState );
    })

})
