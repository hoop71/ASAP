var message = "";

$("#sendMessage").on("click", function() {
    message = $("#contactform").serialize();
    $.ajax({
        url: "//formspree.io/joey@asapevap.com", 
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    // alert('Thanks for the email, we\'ll be in touch promptly.');
    // return false;
});