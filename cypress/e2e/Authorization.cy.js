describe("Authorization", () => {
  it("tests Authorization", () => {
    cy.viewport(1430, 919);
    cy.visit("https://juice-shop-sanitarskyi.herokuapp.com/#/search");
    cy.get("button.close-dialog mat-icon").click();
    cy.get("div.cc-window > div > a").click();
    cy.get("mat-sidenav-content i").click();
    cy.get("div.cdk-overlay-container mat-icon").click();
    cy.get("mat-form-field.ng-tns-c119-11 div.mat-form-field-infix").click();
    cy.get("#email").type("romawr4@bigmir.net");
    cy.get("#password").click();
    cy.get("#password").type("188800r");
    cy.get("span.mat-checkbox-inner-container").click();
    cy.get("app-login mat-icon").click();

    cy.get("mat-grid-tile:nth-of-type(1) img").click();
    cy.get("#mat-input-3").click();
    cy.get("#mat-input-3").type("I like it!");
    cy.get("#submitButton > span.mat-button-wrapper > span").click();
    cy.get("button.close-dialog i").click();
    cy.get("mat-grid-tile:nth-of-type(1) span.mat-button-wrapper > span").click();
    cy.get("mat-grid-tile:nth-of-type(3) span.mat-button-wrapper > span").click();
    cy.get("button:nth-of-type(4) mat-icon").click();
    cy.get("#checkoutButton path").click();
    cy.get("mat-card > div mat-icon").click();
    cy.get("#mat-input-4").click();
    cy.get("#mat-input-4").type("Ukraine");
    cy.get("#mat-input-5").click();
    cy.get("#mat-input-5").type("Roman");
    cy.get("#mat-input-6").type("12345663");
    cy.get("#mat-input-7").click();
    cy.get("#mat-input-7").click();
    cy.get("#mat-input-7").type("02218");
    cy.get("app-address-create > div").click();

    cy.get("mat-form-field.ng-tns-c119-24 div.mat-form-field-flex").click();
    cy.get("mat-form-field.ng-tns-c119-24 > div").click();
    cy.get("#address").click();
    cy.get("#address").type("Raiduzhna str 21");
    cy.get("#mat-input-9").click();
    cy.get("#mat-input-9").type("Kyiv");
    cy.get("app-address-create i").click();
    cy.visit("https://juice-shop-sanitarskyi.herokuapp.com/#/address/select");
    cy.get("mat-row:nth-of-type(1) span.mat-radio-inner-circle").click({force: true});
    cy.get("mat-card > button mat-icon").click();
    cy.get("mat-row:nth-of-type(3) path").click();
    cy.get("button.nextButton mat-icon").click();
    cy.get("app-payment-method span.mat-content").click();
    cy.get("#mat-input-11").click();
    cy.get("#mat-input-11").type("Roman Mazur");
    cy.get("#mat-input-12").type("4441164113455463");

    cy.get("#mat-input-13").select('1', {force: true});
    cy.get("#mat-input-14").select('2080', {force: true});

    cy.get("mat-row:nth-of-type(1) span.mat-radio-inner-circle").click({force: true});
    cy.get("button.nextButton mat-icon").click();
    cy.get("app-order-summary mat-icon").click();
  });
});
