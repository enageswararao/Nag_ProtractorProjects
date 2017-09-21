describe("validate contact us link",function(){

   it("contact us link",function(){
     browser.ignoreSynchronization = true;
     browser.get("http://automationpractice.com/index.php");
     element(by.linkText("Contact us")).click();
     element(by.id("submitMessage")).click();
     element(by.css(".alert-danger")).getText().then(function(text){
         expect(text).toContain("Invalid email address.");
     });
   }) ;
});
