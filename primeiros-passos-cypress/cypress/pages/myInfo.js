class MyInfo {

    selectorsList()  {

        const selectors = {

            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            generiField: ".oxd-input--active",
            genericCombobox: ".oxd-select-text-input",
            secondItemCombobox:".oxd-select-dropdown > :nth-child(2)",
            thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
            dataField: "[placeholder='yyyy-dd-mm']",
            saveButton: ".oxd-button"

        }

        return selectors

    }

    fillPersonalDetails(firstName, lastName) {

        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        
    }

    fillEmployee () {

        cy.get(this.selectorsList().generiField).eq(3).clear().type('Employ')
        cy.get(this.selectorsList().generiField).eq(4).clear().type('OtherIdTest')
        cy.get(this.selectorsList().generiField).eq(5).clear().type('DriverTest')
        cy.get(this.selectorsList().dataField).eq(0).clear().type('2025-03-10')
        cy.get(this.selectorsList().saveButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')

    }

    fillNationality () {

        cy.get(this.selectorsList().genericCombobox).eq(0).click()
        cy.get(this.selectorsList().secondItemCombobox).click()  
        cy.get(this.selectorsList().genericCombobox).eq(1).click() 
        cy.get(this.selectorsList().thirdItemCombobox).click()
        cy.get(this.selectorsList().saveButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        
    }
    
    subimitButton() {

        cy.get(this.selectorsList().saveButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')

    }
}

export default MyInfo