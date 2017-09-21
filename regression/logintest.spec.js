describe("validate customer login test",function(){

   it("Login to the Account",function(){
     //browser.ignoreSynchronization = true;
     browser.get("http://automationpractice.com/index.php");
     element(by.partialLinkText("Sign in")).click();
     element(by.id("email")).sendKeys("Test@login.com");
     element(by.id("passwd")).sendKeys("password");
     element(by.id("SubmitLogin")).click();
     element(by.id("SubmitLogin")).click();
     element(by.css(".alert-danger")).getText().then(function(text){
         expect(text).toContain("Authentication failed.");
     });
   }) ;
});
