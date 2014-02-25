var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var Address = {
  fullAddress: function() {
    return this.street + "\n" + this.city + ", " + this.state + " " + this.zip;
  }
};

$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                '<div class="form-group">' +
                  '<label for="new-street">Street</label>' +
                  '<input type="text" class="form-control" id="new-street">' +
                '</div>' +
                '<div class="form-group">' +
                  '<label for="new-city">City</label>' +
                  '<input type="text" class="form-control" id="new-city">' +
                '</div>' +
                '<div class="form-group">' +
                  '<label for="new-state">State</label>' +
                  '<input type="text" class="form-control" id="new-state">' +
                '</div>' +
                '<div class="form-group">' +
                  '<label for="new-zip">Zip</label>' +
                  '<input type="text" class="form-control" id="new-zip">' +
                '</div>' +
              '</div>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    


    var newContact = Object.create(Contact);
    newContact.firstName = inputtedFirstName;
    newContact.lastName = inputtedLastName;

    newContact.addresses = [];

    $(".new-address").each(function() {
      var inputtedStreet = $("input.new-street").val();
      var inputtedCity = $("input.new-city").val();
      var inputtedState = $("input.new-state").val();
      var inputtedZip = $("input.new-zip").val();

      var newAddress = Object.create(Address);
      newAddress.street = inputtedStreet;
      newAddress.city = inputtedCity;
      newAddress.state = inputtedState;
      newAddress.zip = inputtedZip;

      newContact.addresses.push(newAddress);
    });


    $("ul#contacts").append("<li><span class=\"contact\">" + newContact.fullName() + "</span></li>");

    

    $(".contact").last().click(function() {
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.fullName());
 
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() +"</li>");
      });
    });

    this.reset();
  });
});
