/* ===== MENU ===== */
const menuItems = [
  { name: "Big Breakfast Plate", category: "breakfast", price: "$26.50", desc: "The full spread — eggs, bacon, sausage, mushrooms, tomato, sourdough toast and hash browns.", tags: ["chefs-pick"] },
  { name: "Croissant Eggs Benedict", category: "breakfast", price: null, desc: "Buttery croissant, poached eggs, hollandaise, crispy prosciutto.", tags: ["chefs-pick"] },
  { name: "Brekky Wrap", category: "breakfast", price: null, desc: "Scrambled eggs, bacon, cheese and tomato relish in a toasted tortilla.", tags: [] },
  { name: "Superfood Bowl", category: "breakfast", price: "$22.00", desc: "Acai, banana, granola, coconut, chia seeds and seasonal fruit.", tags: ["vegan"] },
  { name: "Chicken Schnitzel Wrap", category: "lunch", price: null, desc: "Crispy chicken schnitzel with slaw, pickles and spicy aioli.", tags: ["spicy"] },
  { name: "Pumpkin & Eggplant Sandwich", category: "lunch", price: null, desc: "Roasted pumpkin, eggplant, baby spinach and hummus on sourdough.", tags: ["vegan"] },
  { name: "Steak & Mushroom Pie", category: "lunch", price: null, desc: "Slow-cooked beef and mushroom in flaky pastry, served with salad.", tags: ["chefs-pick"] },
  { name: "Soy Cappuccino", category: "drinks", price: "$5.50", desc: "Smooth espresso with creamy soy milk, finished with latte art.", tags: ["dairy-free"] },
  { name: "Dalgona Coffee", category: "drinks", price: null, desc: "Whipped coffee over iced milk — creamy, bold, Instagram-worthy.", tags: [] },
  { name: "Cold Drip Coffee", category: "drinks", price: null, desc: "Slow-dripped over 12 hours for a smooth, complex concentrate.", tags: [] },
  { name: "Chai Latte", category: "drinks", price: null, desc: "Spiced chai blend steamed with your choice of milk.", tags: [] },
  { name: "Fresh Juice & Smoothies", category: "drinks", price: null, desc: "Made to order with seasonal fruits and vegetables.", tags: ["vegan"] },
];

const tagLabels = { "vegan": "Vegan", "dairy-free": "Dairy-free", "spicy": "Spicy", "chefs-pick": "Chef's Pick" };
const grid = document.getElementById("menuGrid");
let activeCategory = "all", searchQuery = "";

function renderMenu() {
  const filtered = menuItems.filter(item => {
    const matchCat = activeCategory === "all" || item.category === activeCategory;
    const matchSearch = !searchQuery || item.name.toLowerCase().includes(searchQuery) || item.desc.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });
  if (!filtered.length) {
    grid.innerHTML = '<div class="menu-empty"><p>No items found. Try a different search.</p></div>';
    return;
  }
  grid.innerHTML = filtered.map(item => `
    <div class="menu-item" role="listitem">
      <div class="menu-item-info">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="menu-tags">${item.tags.map(t => `<span class="menu-tag tag-${t}">${tagLabels[t]}</span>`).join("")}</div>
      </div>
      ${item.price ? `<div class="menu-item-price">${item.price}</div>` : ""}
    </div>
  `).join("");
}

document.querySelectorAll(".menu-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".menu-tab").forEach(t => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
    tab.classList.add("active"); tab.setAttribute("aria-selected", "true");
    activeCategory = tab.dataset.category;
    renderMenu();
  });
});

document.querySelector(".menu-search").addEventListener("input", e => {
  searchQuery = e.target.value.toLowerCase().trim(); renderMenu();
});

renderMenu();

/* ===== NAV ===== */
const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
const navLinksEl = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const open = navLinksEl.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

navLinksEl.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => { navLinksEl.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); });
});

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 60);
}, { passive: true });

/* ===== SCROLL REVEAL ===== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
