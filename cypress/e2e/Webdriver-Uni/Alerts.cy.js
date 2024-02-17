
describe("Alerts Practise",()=> {
    /* it("Alerts", ()=>{
        //1.javascript alerts : it will have some text and a "OK" button
        //2.javascript confirm alerts : it will have some text with "OK" and "Cancel" button
        //3. javascript Prompt alert : it will have some text with textboxes for user input along  with "ok"
        //4.authentictad alert
        //cypress automatically handles alert window but for validations on alert window you have to write code
        //so we have to triger "event"
               //JavaScript Alert
        cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html")
        cy.get(".section-title > #button1").click()  //can't see alert window because it is handled by cypress
        //in order to validate text inside alert window
        cy.on("window:alert", (t)=>{
            expect(t).to.contains("I am an alert box!")
        })
              //js Confirm Alert
        cy.get(".section-title >#button4").click() //by default cypress clicks on ok button
        cy.on("window:confirm", (t)=>{
            expect(t).to.contains("Press a button!")
        })
        //for cancel button
        cy.get(".section-title >#button4").click()
        cy.on("window:confirm",()=> false )
        cy.get("#confirm-alert-text").should("have.text", "You pressed Cancel!")
        }) */
       
        beforeEach(() => {
            cy.visit("https://www.webdriveruniversity.com/Popup-Alerts/index.html")
    })
        it("Verifying How Alerts Work",()=>{
            cy.get("span[id='button1'] p").click()
            cy.on("window:alert", (t)=>{
                expect(t).to.contains("I am an alert box!")
            })
          
        })
        it("Java Script Confirm Box",()=>{
         cy.get(".section-title >#button4").click()
         cy.on("window:alert",(y)=>{
            expect(y).to.contains("Press a button!")
         }
         )   
        })
        it("To Press Cancel",()=>{
            cy.get(".section-title >#button4").click()
            cy.on("window:confirm",()=> false )
            cy.get("#confirm-alert-text").should("have.text", "You pressed Cancel!")
            })
        it.only("Popup",()=>{
            cy.get("span[id='button2'] p").click()
            cy.wait(5000);
            cy.get("button[class='btn btn-default']").click()
            cy.wait(5000);  //5000 seconds wait
            
        }
        )
        }
)