// メニューの開閉
const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");
menuButton.addEventListener("click", () => {
  sideMenu.classList.toggle("open");
});

// 検索してスクロール
const searchBox = document.getElementById("search");
const recipes = document.querySelectorAll("#recipes details");

searchBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const keyword = searchBox.value.toLowerCase();
    let found = null;
    recipes.forEach(recipe => {
      const title = recipe.querySelector("summary").textContent.toLowerCase();
      if (title.includes(keyword) && !found) {
        found = recipe;
      }
    });
    if (found) {
      sideMenu.classList.remove("open"); // メニュー閉じる
      found.open = true;
      found.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
});
