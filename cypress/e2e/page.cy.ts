describe("page render", () => {
  it("index", () => {
    cy.visit("/");
  });
  it("todo", () => {
    cy.visit("/todo");
  });
});

describe("TODO", () => {
  beforeEach(() => {
    cy.visit("/todo");
    cy.viewport(1980, 1080);
    // cy.waitForReact();
  });

  context("초기 화면 출력", () => {
    it("Task가 비어있는 상태", () => {
      cy.get(".empty-task").should("have.text", "할일이 없습니다.");
    });
  });

  it("contains test", () => {
    cy.get(".todo-title").contains("할일 목록");
  });

  context("todo add", () => {
    const addTask = () => {
      cy.get("form > input").type("추가{enter}");
      cy.get("form > input").should("have.value", "");
    };

    it("요소가 추가 되었는가?", () => {
      addTask();
      cy.get(".task-item:nth-child(1)")
        .find("input")
        .should("have.value", "추가");
      // cy.react('TodoItem',{props :{task : "Cypress e2e test"}});
    });
    it("요소 추가 후 내용 변경과 삭제가 되는가?", () => {
      addTask();
      cy.get(".task-item:nth-child(1)").find("input").type("변경");
      cy.get(".task-item:nth-child(1)")
        .find("input")
        .invoke("val")
        .should("eq", "추가변경");

      cy.get(".task-item:nth-child(1)")
        .find("input")
        .should("have.value", "추가변경");

      cy.get(".task-item:nth-child(1) > button").click();
      cy.get(".empty-task");
    });
  });
});
