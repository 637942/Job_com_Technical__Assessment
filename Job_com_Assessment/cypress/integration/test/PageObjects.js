class PageObjects {
  static getURL() {
    cy.visit("/", {
      onBeforeLoad(win) {
        const latitude = 32.492222;
        const longitude = -84.940277;
        cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake(
          (cb) => {
            return cb({ coords: { latitude, longitude } });
          }
        );
      },
    });
    cy.clearCookies();
  }

  static wait() {
    return cy.wait(4000);
  }

  static urlValidation() {
    return cy.url();
  }

  static getRegister() {
    return cy
      .get("span.e1gdkf0i8.css-1sq571z.e1c1dxn80")
      .find("a")
      .contains("Register");
  }

  static registermsg() {
    return cy.get(".css-kex89b.e1cvirzj0");
  }

  static login() {
    return cy
      .get("span.e1gdkf0i8.css-1sq571z.e1c1dxn80")
      .find("a")
      .contains("Sign In");
  }

  static email() {
    return cy.get("#email");
  }

  static password() {
    return cy.get("#password");
  }

  static signin() {
    return cy.get('[type="submit"]');
  }

  static forgetPassword() {
    return cy
      .get(".css-162whkx.e1c1dxn80")
      .find("a")
      .contains("Forgotten your password?");
  }

  static logoClick() {
    return cy.get(".e1gdkf0i5.css-2k3o8v.eptbtn2");
  }

  static googleSignin() {
    return cy.get(".css-1u6xlhm.evumgq52");
  }

  static googlepage() {
    return cy.get(".kHn9Lb");
  }
  static keywords() {
    return cy.get(".select__placeholder.css-6denu7-placeholder").eq(0);
  }

  static roleSel() {
    return cy.get("#react-select-2-option-0 > span");
  }

  static placelocate() {
    return cy.get(".select__placeholder.css-6denu7-placeholder").eq(1);
  }

  static search() {
    return cy.get(".css-1ffuu0p");
  }

  static resetPassword() {
    return cy.get(".css-vdyotm.e13bgiet5");
  }

  static jobTitle() {
    return cy.get(".css-8x55mx.e1nxh9ar0").eq(1);
  }

  static tabClose(){
    return cy.closeTab();
  }
}
export default PageObjects;
