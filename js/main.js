const drawer = document.querySelector("#js-drawer");
const drawerButton = document.querySelector(".js-drawer-button");
const drawerLinks = document.querySelectorAll(".header__nav-link");

if (drawer && drawerButton) {
  const closeDrawer = () => {
    drawer.classList.remove("is-open");
    drawerButton.classList.remove("is-open");
    drawerButton.setAttribute("aria-expanded", "false");
    drawerButton.setAttribute("aria-label", "メニューを開く");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-drawer-open");
  };

  drawerButton.addEventListener("click", () => {
    const isOpen = drawer.classList.toggle("is-open");

    drawerButton.classList.toggle("is-open", isOpen);
    drawerButton.setAttribute("aria-expanded", String(isOpen));
    drawerButton.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
    drawer.setAttribute("aria-hidden", String(!isOpen));
    document.body.classList.toggle("is-drawer-open", isOpen);
  });

  drawerLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
      closeDrawer();
      drawer.removeAttribute("aria-hidden");
    } else if (!drawer.classList.contains("is-open")) {
      drawer.setAttribute("aria-hidden", "true");
    }
  });
}
