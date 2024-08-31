class MenuPage {

    selectorsList()  {

        const selectors = {

             myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
             adminButton: "[href='/web/index.php/admin/viewAdminModule']",
             pimButton: "[href='/web/index.php/pim/viewPimModule']",
             leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
             timeButton: "[href='/web/index.php/time/viewTimeModule']",
             recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
             performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
             directoryButton: "[href='/web/index.php/directory/viewDirectory']",
             maintenanceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
             clainButton: "[href='/web/index.php/claim/viewClaimModule']",
             buzzButton: "[href='/web/index.php/buzz/viewBuzz']"

        }

        return selectors

    }

    accessMyInfo() {

        cy.get(this.selectorsList().myInfoButton).click()
    }

    accessAdmin() {

        cy.get(this.selectorsList().adminButton).click()
    }

    accessPim() {

        cy.get(this.selectorsList().pimButton).click()
    }

    accessLeave() {

        cy.get(this.selectorsList().leaveButton).click()
    }

    accessTime() {

        cy.get(this.selectorsList().leaveButton).click()
    }

    accessRecruitment() {

        cy.get(this.selectorsList().recruitmentButton).click()
    }

    accessPerformance() {

        cy.get(this.selectorsList().performanceButton).click()
    }

    accessDirectory() {

        cy.get(this.selectorsList().directoryButton).click()
    }

    accessMainTenance() {

        cy.get(this.selectorsList().maintenanceButton).click()
    }

    accessClain() {

        cy.get(this.selectorsList().clainButton).click()
    }

    accessBuzz() {
        
        cy.get(this.selectorsList().buzzButton).click()
    }
}

export default MenuPage