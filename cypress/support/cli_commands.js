Cypress.Commands.add('cloneViaSSH', project => {
  const domain = 'http://localhost'

  cy.exec(`cd cypress/downloads/ && git clone ${domain}/${Cypress.env('user_name')}/${project.name}.git`)
  //http://localhost:root/project-dc4ba25b-f2f8-43d6-b55b-0f0706a338ba.git
  //http://localhost/root/project-96dd20cb-33f5-48c4-9ed5-b5b71193ab49.git

})

