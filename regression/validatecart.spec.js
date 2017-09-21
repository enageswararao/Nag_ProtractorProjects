describe("validate cart",function(){

   it("Add item to cart and validate",function(){
     browser.ignoreSynchronization = true;
     browser.get("http://automationpractice.com/index.php");
     element(by.linkText("Women")).click();
     element(by.id("layered_id_attribute_group_2")).click();
     element.all(by.css(".product_img_link")).get(0).click();
     element(by.buttonText("Add to cart")).click().then(function(){
       browser.sleep(5000);
         expect(element(by.css('.layer_cart_product')).element(by.css('h2')).getText()).toContain("Product successfully added to your shopping cart");

      });
   });
});
