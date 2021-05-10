describe('Activation', function () {
  it('Visit Activation (Missing code)', function () {
    cy.visit('/');
    cy.get('a').contains(
      'Load the form page'
    );
    cy.get('main a[href]').click();
    cy.location('pathname', {
      timeout: 10000
    }).should('eq', '/form');
  });
});
