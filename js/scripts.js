var Contact = {
  initialize: function(firstName, lastName) {
    this.firstName  = firstName;
    this.lastName  = lastName;
    this.addresses = [];
    this.phones = [];
  },

  create: function(firstName, lastName) {
    var contact = Object.create(Contact);
    contact.initialize(firstName, lastName);
    return contact;
  },

  fullName: function() {
    return this.firstName + " " + this.lastName;
  },

  createAddress: function(street, city, state, zip) {
    var address = Address.create(street, city, state, zip);
    this.addresses.push(address);
    return address;
  },

  createPhone: function(digits) {
    var phone = Phone.create(digits);
    this.phones.push(phone);
    return phone;
  }
};

var Address = {
  create: function(street, city, state, zip) {
    var address = Object.create(Address); 
    address.initialize(street, city, state, zip);
    return address;
  },

  fullAddress: function() {
    return this.street + "<br />" + this.city + ", " + this.state + " " + this.zip;
  },

  initialize: function(street, city, state, zip) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
  },

  valid: function() {
    if (this.street.search(/[0-9]/) == -1)
      return false;
    if (this.city.search(/[0-9]/) != -1)
      return false;
    if (this.state.length != 2 || this.state.search(/[0-9]/) != -1)
      return false;
    if (this.zip.length != 5 || this.zip.search(/[a-z]/i) != -1)
      return false;

    return true;
  }
};

var Phone = {
  initialize: function(digits) {
    this.digits = digits;
  },

  create: function(digits) {
    var testPhone = Object.create(Phone);
    testPhone.initialize(digits);
    return testPhone;
  },

  formatted: function() {
    return "(" + this.digits.slice(0,3) + ") " + this.digits.slice(3,6) + "-" + this.digits.slice(6);
  },

  valid: function() {
    if (this.digits.length !== 10) {
      return false;
    }
    return true;
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

  $("#add-phone").click(function() {
    $("#new-phones").append('<div class="new-phone">' +
                              '<div class="form-group">' +
                                '<label for="new-phone-in">Phone</label>' +
                                '<input type="text" class="form-control" id="new-phone-in">' +
                              '</div>' +
                            '</div>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    
    var newContact = Contact.create(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input#new-street").val();
      var inputtedCity = $(this).find("input#new-city").val();
      var inputtedState = $(this).find("input#new-state").val();
      var inputtedZip = $(this).find("input#new-zip").val();

      newContact.createAddress(inputtedStreet, inputtedCity, inputtedState, inputtedZip);
    });

    $(".new-phone").each(function() {
      var inputtedPhone = $(this).find("input#new-phone-in").val();
      
      newContact.createPhone(inputtedPhone);
    });

    $("ul#contacts").append("<li><span class=\"contact\">" + newContact.fullName() + "</span></li>");

    

    $(".contact").last().click(function() {
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.fullName());
 
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        if (address.valid())
          $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
        else
          $("ul#addresses").append("<li>Invalid Address Submitted</li>");
      });

      $("ul#phones").text("");
      newContact.phones.forEach(function(phone) {
        if (phone.valid())
          $("ul#phones").append("<li>" + phone.formatted() + "</li>");
        else
          $("ul#phones").append("<li>Invalid phone number submitted</li>");
      });
    });

    this.reset();
  });
});
