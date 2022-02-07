describe("Test Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  afterEach(() => cy.pause());

  it("Username not valid", () => {
    cy.login({
      username: "xxx",
      pwd: "prueba123",
    });
  });

  it("Password not valid", () => {
    cy.login({
      username: "waykiprueba",
      pwd: "xxx",
    });
  });

  it("Username not exist", () => {
    cy.login({
      username: "waykixxx",
      pwd: "prueba123",
    });
  });

  it("Username not match", () => {
    cy.login({
      username: "waykiprueba",
      pwd: "prueba123",
    });
  });

  it("Successful login", () => {
    cy.login({
      username: "waykiprueba",
      pwd: "wayki123",
    });
  });

  it("log out", () => {
    cy.get('[id="dropdown-basic"]').click();
    // my profile and my posts - button
    cy.get('[id="logout-button"]').click();
  });
});
