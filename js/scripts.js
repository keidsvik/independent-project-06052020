$(document).ready(function() {
  $('form#quiz').submit(function(event) {
    const color = $("input:radio[name=color]:checked").val();
    const animal = $("input:radio[name=animal]:checked").val();
    const whereyoulive = $("select#whereyoulive").val();
    const beverage = $("select#beverage").val();
    const meal = $("select#meal").val();

    if (color === 'red' && animal === 'eels' && whereyoulive === 'portland' && beverage === 'blood'&& meal === 'hot dog gelatin') {
    $("#swift").show();
    } else if (color === 'green' && animal === 'miniaturedonkey' && whereyoulive === 'quiveringwomb' && beverage === 'hoticecream' && meal === 'gravy') {
    $("#go").show();
    } else if (color === 'blue' && animal === 'pig' && whereyoulive === 'dancingqueen' && beverage === 'milk and whiskey on the rocks' && meal === 'milk meal') {
    $("#python").show();
    } else {
    $("#nothing").show();
    }
    event.preventDefault();
  });
});