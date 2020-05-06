document.addEventListener("DOMContentLoaded", function () {
  class Model {
    constructor() {
      this.pages = [
        {
          title: "Homepage",
          url: "/",
          background: "red",
        },
        {
          title: "Contact",
          url: "/contact",
          background: "green",
        },
      ];
    }

    getPageByUrl(url) {
      return this.pages.find((page) => page.url === url);
    }
  }

  class View {
    constructor(content) {
      this.content = document.querySelector(`.${content}`);
    }

    changeTitle(word) {
      this.content.innerHTML = word;
    }

    changeBackground(color) {
      this.content.style.background = color;
    }
  }

  function controller() {
    const data = new Model();
    const currentPage = data.getPageByUrl("/contact");

    const page = new View("content");
    page.changeTitle(currentPage.title);
    page.changeBackground(currentPage.background);
  }

  controller();
});
