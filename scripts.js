$(function () {
    console.log("ready!");
    $("#textOutput").text("");

    
    $("#btnSendText").on("click", function (e) {
        e.preventDefault();
        var getInput = $("#textInput").val();
        
        $("#textOutput")
            .html("<p>" + getInput + "</p>")
            .addClass("capitalize");
        
        $("#textInput").val("");

    });
});

// on each key, replicate to the input box below
  $("#textInput").keyup(function () {
      console.log('key');
      var inputVal = $("#textInput").val();
      $("#textInputType").val(inputVal);
  });

$(function () {
    console.log("ready!");
    $("#textOutput2").text("");

    
    $("#btnSendText2").on("click", function (e) {
        e.preventDefault();
        var getInput = $("#textInput2").val();
        
        $("#textOutput2")
            .html("<p>" + getInput + "</p>")
            .addClass("lowerWithOtherFont");
        
        $("#textInput2").val("");

    });
});

// on each key, replicate to the input box below
  $("#textInput2").keyup(function () {
      console.log('key');
      var inputVal = $("#textInput2").val();
      $("#textInputType2").val(inputVal);
  });

$(function () {
    console.log("ready!");
    $("#textOutput3").text("");

    
    $("#btnSendText3").on("click", function (e) {
        e.preventDefault();
        var getInput = $("#textInput3").val();
        
        $("#textOutput3")
            .html("<p>" + getInput + "</p>")
            .addClass("boldLargerColor");
        
        $("#textInput3").val("");
        
    });

    
  $("#textInput3").keyup(function () {
      console.log('key');
      var inputVal = $("#textInput3").val();
      $("#textInputType3").val(inputVal);
  });

});
