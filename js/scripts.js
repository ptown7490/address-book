var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#first-name").val();
    var inputtedLastName = $("input#last-name").val();
    var inputtedAddress = $("input#address").val();

    var newContact = Object.create(Contact);
    newContact.firstName = inputtedFirstName;
    newContact.lastName = inputtedLastName;
    newContact.address = inputtedAddress;
    $("ul#contacts").append("<li><span class=\"contact\">" + newContact.fullName() + "</span></li>");
    this.reset();

    $(".contact").last().click(function() {
      $("#changeableView").show();
      $("#selectedContact").text(newContact.fullName());
      $("#selectedContactFirstName").text(newContact.firstName);

      $("button#editButton").click(function() {
        $("input#edit-firstName").val(newContact.firstName);
        $("#displayView").hide();
        $("#editView").show();   
      });

    });

    $("form#updateButton").submit(function(event) {
      event.preventDefault();

      newContact.firstName = $("input#edit-firstName").val();
      $("ul#contacts").append("<li><span class=\"contact\">" + newContact.firstName() + "</span></li>");
      this.reset();

      // $("form#updateButton").click() {
      //   $("displayView").show();
      // }

    });


    });
  });
