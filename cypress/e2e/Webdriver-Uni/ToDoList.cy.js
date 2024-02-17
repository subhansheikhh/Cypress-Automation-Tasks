
describe("To Check TO Do List Page",()=>{
   it("Should be able to add a Note in To DO List ",()=>{
    cy.visit("https://www.webdriveruniversity.com/To-Do-List/index.html")
    cy.get("input[placeholder='Add new todo']").type("Demo To Do{enter}")
    cy.get("li:nth-child(3)").contains("Practice magic")
   }
   )

}
)