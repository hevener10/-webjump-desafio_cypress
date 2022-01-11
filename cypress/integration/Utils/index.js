class Utils {
  goHome() {
    cy.visit("/");
  }

  preencherLogin() {
    cy.wait("@getUrl");
  }
  0;
}

export default new Utils();
