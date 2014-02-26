describe("Contact", function() {
  describe("initialize", function() {
    it("initializes an object with a contact's first and last name", function() {
      var testContact = Object.create(Contact);
      testContact.initialize("Elikem", "Adadevoh");
      testContact.firstName.should.equal("Elikem");
      testContact.lastName.should.equal("Adadevoh");
    });
  });

  describe("create", function() {
    it("creates a Contact instance", function() {
      var contact = Contact.create();
      Contact.isPrototypeOf(contact).should.equal(true);
    });
  });

  describe("fullName", function() {
    it("combines the first and last name, separated by a space", function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Patrick";
      testContact.lastName = "McGreevy";
      testContact.fullName().should.equal("Patrick McGreevy");
    });
  });

  describe("createAddress", function() {
    it("creates an Address object", function() {
      var testContact = Contact.create();
      var testAddress = testContact.createAddress();
      Address.isPrototypeOf(testAddress).should.equal(true);
    });

    it("adds the address to the addresses property of the contact", function() {
      var testContact = Contact.create();
      var testAddress = testContact.createAddress();
      testContact.addresses.should.eql([testAddress]);
    });
  });

  describe("createPhone", function() {
    it("creates a Phone object", function() {
      var testContact = Contact.create();
      var testPhone = testContact.createPhone();
      testContact.phones.should.eql([testPhone]);
    });
  });
});

describe("Address", function() {
  describe("fullAddress", function() {
    it("shows the street, city, state, and zip on the same line separated by commas", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "123 Main St";
      testAddress.city = "Portland";
      testAddress.state = "OR";
      testAddress.zip = "97201";
      testAddress.fullAddress().should.equal("123 Main St<br />Portland, OR 97201");
    });
  });

  describe("initialize", function() {
    it("initializes the object with a full address", function() {
      var testAddress = Object.create(Address);
      testAddress.initialize("520 Brett St", "Portland", "OR", "12934");
      testAddress.street.should.equal("520 Brett St");
      testAddress.city.should.equal("Portland");
      testAddress.state.should.equal("OR");
      testAddress.zip.should.equal("12934");
    });
  });

  describe("create", function() {
    it("creates an instance of Address and initializes it", function() {
      var testAddress = Address.create("520 Brett St", "Portland", "OR", "12934");
      Address.isPrototypeOf(testAddress).should.equal(true);
      testAddress.fullAddress().should.equal("520 Brett St<br />Portland, OR 12934");
    });
  });
  
  describe("valid", function() {
    it("returns false if an address is entered incorrectly", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "Main St";
      testAddress.city = "Portl8";
      testAddress.state = "ORR";
      testAddress.zip = "9720";
      testAddress.valid().should.equal(false);      
    });
  });
});

describe("Phone", function() {
  describe("initialize", function() {
    it("initializes a Phone instance with a sequence of digits", function() {
      var testPhone = Object.create(Phone);
      testPhone.initialize("5556667777");
      testPhone.formatted().should.equal("(555) 666-7777");
    });
  });

  describe("create", function() {
    it("creates a Phone object", function() {
      var testPhone = Phone.create();
      Phone.isPrototypeOf(testPhone).should.equal(true);
    });
  });

  describe("formatted", function() {
    it("returns a string of the 10-digit phone number in '(###) ###-####' format", function() {
      var testPhone = Object.create(Phone);
      testPhone.digits = "5035554444";
      testPhone.formatted().should.equal("(503) 555-4444");
    });
  });

  describe("valid", function() {
    it("returns false if a phone number is entered incorrectly", function() {
      var testPhone = Object.create(Phone);
      testPhone.digits = "555666777";
      testPhone.valid().should.equal(false);
    });
  });
});
