document.addEventListener("DOMContentLoaded", function () {
  class Model {
    constructor() {
      this.pages = [
        {
          title: "Homepage",
          url: "#",
          background: "red",
        },
        {
          title: "Contact",
          url: "#contact",
          background: "green",
          form: true,
        },
      ];
    }

    getPageByUrl(url) {
      return this.pages.find((page) => page.url == url);
    }
  }

  class View {
    constructor(pages) {
      this.container = document.querySelector(".container");
      this.container.innerHTML = "";
      this.addHeader(pages);
    }

    addHeader(pages) {
      console.log(pages);
      const homeButton = document.createElement("button");
      const contactButton = document.createElement("button");

      homeButton.innerText = "Homepage";
      contactButton.innerText = "Contact";

      this.container.appendChild(homeButton);
      this.container.appendChild(contactButton);

      homeButton.addEventListener("click", () => {
        location.hash = "#";
      });

      contactButton.addEventListener("click", () => {
        location.hash = "#contact";
      });
    }

    changeTitle(text) {
      const title = document.createElement("h1");

      title.innerText = text;

      this.container.appendChild(title);
    }

    changeBackground(color) {
      this.container.style.background = color;
    }

    addForm() {
      let input = document.createElement("input");
      input.setAttribute("type", "text");
      input.classList.add("input-text");

      this.container.appendChild(input);
    }
  }

  function controller() {
    let data = new Model();

    const currentPage = data.getPageByUrl(location.hash || "#");

    let page = new View(data.pages);
    page.changeTitle(currentPage.title);
    page.changeBackground(currentPage.background);

    if (currentPage.form) {
      page.addForm();
    }
  }

  window.addEventListener("hashchange", () => {
    controller();
  });

  controller();
});
