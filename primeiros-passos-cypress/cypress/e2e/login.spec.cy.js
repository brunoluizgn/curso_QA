describe('Orange HRM Tests', () => {
    it('login-success', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get("[name='username']").type('Admin')
      cy.get("[name='password']").type('admin123')
      cy.get("[type='submit']").click()
      cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
      cy.get(".oxd-text--h6").contains('Dashboard')
    })
    it('login-Fail', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get("[name='username']").type('test')
      cy.get("[name='password']").type('test')
      cy.get("[type='submit']").click()
      cy.get("[role='alert']")
  })
  })