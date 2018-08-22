$(function(){

  $('#dice-roll').on('click', function (event) {
    console.log('hello');
    event.preventDefault();
    let diceCount = $('#dice-count').val();
    let diceSides = $('#dice-sides').val();
    rollDice(diceCount, diceSides);
  });


  function rollDice(dice, sides) {
    console.log(dice, sides);
    const query = `query rollDice($dice: Int!, $sides: Int) {
      rollDice(numDice: $dice, numSides: $sides)
    }`;
    $.ajax({
      method: 'POST',
      url: '/graphql',
      data: {
        query: query,
        variables: {dice, sides}
      }
    })
      .then(respose => {
        console.log(response.data);
        $('#dice-result').empty().append(response.data);
      })
      .catch( ()=> {
        console.log('Error rolling dice');
      })
  }



})