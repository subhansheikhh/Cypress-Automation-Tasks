/* it("Radio Buttons and Checkboxes", ()=>{
            cy.visit("http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
            //cy.get(".radio-buttons > [value='yellow']").click()
            cy.get(".radio-buttons > [value='yellow']").check().should('be.checked')
            //cy.get(".radio-buttons > [value='yellow']").check().should('not.be.checked') //negative test
            //uncheck don't work on radio buttons
            //checkboxes
            cy.get('.section-title input[value="option-1"]').should("be.visible") //present or not
           // cy.get("#checkboxes > :nth-child(1)").check().should('be.checked')
            cy.get('.section-title input[value="option-1"]').check().should('be.checked');
            // the checkboxes are inside <label> elements, and they don't have a direct parent-child relationship with the .section-title element. Therefore, using > (child combinator) in the selector might not be appropriate.
            cy.get('.section-title input[value="option-3"]').uncheck().should('not.be.checked');
            //selecting all the checkboxes
            cy.get("input[type='checkbox']").check().should("be.checked")
            //.first and .last can be used to select first and last checkbox
         }) */

         describe("Radiobuttons and Checkboxes",()=>{
            
            it("Testing Radio Buttons",()=>{
             cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
             //cy.get("input[value='blue']").click()
             cy.get(".radio-buttons > [value='yellow']").check().should('be.checked')
             cy.get("input[value='blue']").should('not.be.checked') //to validate if the other radio button is not clicked
             //cy.get(".radio-buttons > [value='yellow']").uncheck().should('not.be.checked')   dk why it doesn't work         
            }

            )
            it.only("Testing Check Boxes",()=>{
               cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
               cy.get("input[value='option-2']").click()
               cy.get("input[value='option-2']").should("be.visible")
               cy.get("input[value='option-2']").check().should('be.checked')
             } )
             it("Disabled Radio Buttons",()=>{
               cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
               cy.get("input[value='lettuce']").check().should("be.checked")

             }
             )
         }

         )