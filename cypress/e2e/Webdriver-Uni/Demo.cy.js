
///<reference types= "Cypress"/>
describe("Cypress Automation Training",()=>{
    it("Contact Us Test", ()=>{
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.title ().should("eq","WebdriverUniversity.com (New Approach To Learning)")
        cy.get("input[placeholder='First Name']").type("Joe")
        cy.get("input[placeholder='Last Name']").type("Sheikh")
        cy.get("input[placeholder='Email Address']").type("buttsubhan101@gmail.com")
        cy.get("textarea[placeholder='Comments']").type("No Comments")
        cy.get("input[value='SUBMIT']").click()
    })
    it("Visting Title",()=>{
        cy.visit("https://www.webdriveruniversity.com/index.html")
        cy.title().should("eq","WebDriverUniversity.com" )
    })
    it.only("Login Page",()=>{
        cy.visit("https://www.webdriveruniversity.com/Login-Portal/index.html")
        cy.get("#text").type("webdriver")
        cy.get("#password").type("webdriver123")
        cy.get("#login-button").click()
        cy.get("#text").type("webdriver2")
        cy.get("#password").type("webdriver321")
        cy.get("#login-button").click()
    })
})