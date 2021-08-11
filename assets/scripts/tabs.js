const removeActiveClasses = function (ulElement) {
  ulElement.querySelectorAll("li").forEach(function (li) {
    li.classList.remove("active");
  });
};

const getChildPosition = function (element) {
  const parent = element.parentNode;
  for (let i = 0; i < parent.children.length; i++) {
    if (parent.children[i] === element) {
      return i;
    }
  }

  throw new Error("No parent found");
};

window.addEventListener("load", function () {
  document.querySelectorAll("ul.tab li a").forEach(function (link) {
    link.addEventListener(
      "click",
      function (event) {
        event.preventDefault();

        const liTab = link.parentNode;
        const ulTab = liTab.parentNode;
        if (liTab.className.includes("active")) {
          return;
        }

        removeActiveClasses(ulTab);
        const tabContentId = ulTab.getAttribute("data-tab");
        const tabContentElement = document.getElementById(tabContentId);
        removeActiveClasses(tabContentElement);
        const position = getChildPosition(liTab);

        tabContentElement
          .querySelectorAll("li")
          [position].classList.add("active");
        liTab.classList.add("active");
      },
      false
    );
  });
});
