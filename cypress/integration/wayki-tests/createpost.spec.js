describe("Test Create Post", () => {
  afterEach(() => cy.pause());

  it.only("Successful login", () => {
    cy.visit("http://localhost:3000/login");
    cy.login({
      username: "waykiprueba",
      pwd: "wayki123",
    });
  });

  it("profile edit", () => {
    cy.request("DELETE", "http://localhost:3003/api/v1/cleanposts");
    cy.contains("Publicar").click();

    cy.create_post({
      title: "Gato perdido en Peru Lima",
      name: "Horus",
      specie: "Gato Angora",
      tags: "Gato Perdido Lima Ayuda",
      color: "blanco",
      age: "4 años",
      location: "Lima",
      description: "Es tierna, se deja acariciar. Porfavor ayuda !",
    });
  });

  it.only("view my posts", () => {
    cy.visit("http://localhost:3000/");
    cy.url().should("include", "/");
    cy.get('[id="dropdown-basic"]').click();
    cy.get('[id="see-post"]').click();
  });
});
