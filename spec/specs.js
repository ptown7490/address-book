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
