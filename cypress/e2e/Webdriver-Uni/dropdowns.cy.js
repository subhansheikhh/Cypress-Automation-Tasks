/* 
it("DropDowns ", ()=>{
    //we use select for dropdown
    //.type('{enter}')
    cy.visit("http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    cy.get ( ".section-title > #dropdowm-menu-1").select("C#")
    .should('have.value', "c#")
    cy.get(".section-title > #dropdowm-menu-1").click(); // its not clicking
    cy.visit("https://www.wikipedia.org/")
    cy.get("#searchInput").type("Delhi")
    cy.get('.suggestion-title').contains("Delhi University").click();
 })
 it("Dynamic Dropdown", ()=>{
    cy.visit("https://www.google.com/")
    cy.get ("#APjFqb").type("cypress automation") // searching
    //capture all options
    //count total number of options
//lst =array
//index
    cy.get(".wM6W7d> span").each(($el ,index , $list)=>{
        if($el.text()== "cypress automation tutorial")
        {
            cy.wrap($el).click()
        }
    })
 }) */
describe("Simple Dropdowns", () => {

    it("Simple dropdowns First", () => {
        cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get("#dropdowm-menu-1").select("c#")   //select always has a value not text

    }

    )
    it("Google Task", () => {
        cy.visit("https://www.google.com.pk/")
        cy.get("#APjFqb").type("Cypress Automation")
        cy.get(".erkvQe").contains("cypress automation tutorial").click()
    }
    )
    // Chaining is used for doing multiple tasks together
    it("Dynamic Dropdown", () => {
        cy.visit("https://www.google.com/")
        cy.get("#APjFqb").type("cypress automation") // searching
        //capture all options
        //count total number of options
        //lst =array
        //index
        //.each does iteration of elements and has 3 callback functions 1)Element 2)Index 3)List(array)
        cy.get(".wM6W7d> span").each(($el, index, $list) => {
            if ($el.text() == "cypress automation tutorial") {
                cy.wrap($el).click()
            }
        })

    }

    )
    it.only("Selected and Disabled Dropdown",()=>{
        cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get("#fruit-selects").select("Pear")
        cy.get("option[value='orange']").should("have.text","Orange")
        cy.get("#fruit-selects").select("Orange")
    }
    )

})