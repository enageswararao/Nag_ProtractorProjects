describe("validate secure payment",function(){

   it("secure payment",function(){
     browser.ignoreSynchronization = true;
     browser.get("http://automationpractice.com/index.php");
      element(by.linkText("Women")).click();
     element(by.partialLinkText("Secure payment")).click().then(function(){
         expect(element(by.css('.rte')).getText()).toContain("Secure payment");
      });
   });
});
