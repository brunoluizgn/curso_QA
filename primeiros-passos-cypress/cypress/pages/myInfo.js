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

    updateMyInfo() {
        cy.get(this.selectorsList().firstNameField).clear().type('FirstNTest')
    }
}

export default MyInfo