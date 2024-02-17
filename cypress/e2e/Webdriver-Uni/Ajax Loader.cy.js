describe("Ajax Loader and Wait Concepts",()=>{

    it("Loading Ajax",()=>{
        
        cy.visit("https://www.webdriveruniversity.com/Popup-Alerts/index.html")
        cy.get("button[class='btn btn-default']").click()
        cy.wait(5000)
        cy.get("span[id='button1'] p").click()
        cy.get("button[class='btn btn-default']").click()
    }
    )

}

)