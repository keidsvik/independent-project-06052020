$(document).ready(function() {
  $('form#quiz').submit(function(event) {
      $(".answer").hide();
    

    const color = $("input:radio[name=color]:checked").val();
    const animal = $("input:radio[name=animal]:checked").val();
    const whereyoulive = $("select#whereyoulive").val();
    const beverage = $("select#beverage").val();
    const meal = $("select#meal").val();

    if (color === 'red' && animal === 'eels' && whereyoulive === 'portland' && beverage === 'nugget'&& meal === 'hotdoggelatin') {
    $("#swift").show();
    } else if (color === 'green' && animal === 'miniaturedonkey' && whereyoulive === 'quiveringwomb' && beverage === 'hoticecream' && meal === 'gravy') {
    $("#python").show();
    } else if (color === 'blue' && animal === 'pig' && whereyoulive === 'dancingqueen' && beverage === 'milknwhiskey' && meal === 'milkmeal') {
    $("#ruby").show();
    } else {
    $("#nothing").show();

    }
    event.preventDefault();
  });
});
