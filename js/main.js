var translator = {};

$(function () {
  // Handler for .ready() called.

  var $in = $('#in'),
    $out = $('#out'),
    $go = $('#go');

  $in.val('{"deco": "20% de réduction","print": "20% de réduction","wall_deco": "20% de réduction"}'); // fake


  translator = {

    process: function (input) {

      console.log(typeof input, input);

      var jsonInput = JSON.parse(input);

      var output = '';

      for (var key in jsonInput) {

        if (jsonInput.hasOwnProperty(key)) {
          var value = jsonInput[key];
          console.log(key, value);
        }
        output += key + ' => "' + value + '",';

      }

      console.log(typeof jsonInput, jsonInput);

      return output;
    }

  };

  $go.click(function () {

    var translatedText = translator.process($in.val());
    $out.val(translatedText);
  });

});