describe("Registration2", () => {
  it("tests Registration2", () => {
    cy.viewport(1430, 919);
    cy.visit("https://juice-shop-sanitarskyi.herokuapp.com/#/");
    cy.get("button.close-dialog mat-icon").click();
    cy.get("div.cc-window > div > a").click();
    cy.get("mat-sidenav-content i").click();
    cy.get("div.cdk-overlay-container mat-icon").click();
    cy.get("#newCustomerLink > a").click();
    cy.get("mat-form-field.ng-tns-c119-13 div.mat-form-field-infix").click();
    cy.get("#emailControl").type("romawr7@bigmir.net");
    cy.get("#passwordControl").click();
    cy.get("#passwordControl").type("188800r");
    cy.get("mat-form-field.ng-tns-c119-15 div.mat-form-field-infix").click();
    cy.get("#repeatPasswordControl").type("188800r");
    cy.get("#mat-select-2 span").click();
    cy.get("#mat-option-4 > span").click();
    cy.get("mat-form-field.ng-tns-c119-18 div.mat-form-field-infix").click();
    cy.get("#securityAnswerControl").type("Some");
    cy.get("app-register i").click();
  });
});
