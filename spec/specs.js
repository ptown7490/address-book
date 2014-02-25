describe("Contact", function() {
  describe("fullName", function() {
    it("combines the first and last name, separated by a space", function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Patrick";
      testContact.lastName = "McGreevy";
      testContact.fullName().should.equal("Patrick McGreevy");
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
      testAddress.fullAddress().should.equal("123 Main St\nPortland, OR 97201");
    });
  });
});
