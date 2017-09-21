describe("validate search",function(){

   it("search",function(){
     browser.ignoreSynchronization = true;
     browser.get("http://automationpractice.com/index.php");
     element(by.id("search_query_top")).sendKeys("T-shirt");
     element(by.css(".button-search")).click();
     element(by.css(".heading-counter")).getText().then(function(text){
         expect(text).toContain("1 result has been found");
     });
   }) ;
});
