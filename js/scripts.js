$(document).ready(function() {
  $('form#quiz').submit(function(event) {
    event.preventDefault();
    const color = $("input:radio[name=color]:checked").val();
    const animal = $("input:radio[name=animal]:checked").val();
    const whereyoulive = $("#whereyoulive").val();
    const beverage = $("#beverage").val();
    const meal = $("#meal").val();
  });
});