/* ===== MENU DATA ===== */
const menuItems = [
  // BREAKFAST
  { name: "Bread & Spread", category: "breakfast", desc: "Toast with choice of honey, jam, marmalade, vegemite or nutella.", tags: [] },
  { name: "Muesli Yoghurt Bowl", category: "breakfast", desc: "Seasonal fruits with muesli.", tags: [] },
  { name: "Bacon & Egg Roll", category: "breakfast", desc: "Classic bacon and egg roll.", tags: [] },
  { name: "Eggs on Toast", category: "breakfast", desc: "Choice of fried, poached or scrambled.", tags: [] },
  { name: "Smashed Avocado on Sourdough", category: "breakfast", desc: "Fresh smashed avocado on sourdough. Add eggs available.", tags: [] },
  { name: "Brekky Wrap", category: "breakfast", desc: "Bacon, scrambled eggs, sausages, hashbrown, cheese, baby spinach, BBQ sauce.", tags: [] },
  { name: "Big Breakfast", category: "breakfast", desc: "Bacon, scrambled eggs, sausages, hashbrown, baby spinach, grilled tomato, mushroom with toast.", tags: [] },
  { name: "Vegetarian Breakfast", category: "breakfast", desc: "Scrambled eggs, avocado, grilled halloumi, mushroom, baby spinach, roasted tomato, hashbrown with toast.", tags: ["vegetarian"] },
  { name: "The Omelette", category: "breakfast", desc: "Bacon, tomato, mushroom, onion, shallot, spinach, feta with toast.", tags: [] },
  { name: "Salmon Croissant", category: "breakfast", desc: "Smoked salmon, scrambled eggs, capers, onion, spinach on a croissant.", tags: [] },
  { name: "Eggs Benedict", category: "breakfast", desc: "Salmon, poached eggs, baby spinach, feta, hollandaise sauce on sourdough.", tags: [] },
  { name: "Creamy Mushroom Toast", category: "breakfast", desc: "Poached eggs, garlic, chilli flakes, parsley, lemon, feta & cream cheese.", tags: ["vegetarian"] },
  { name: "Truffle Eggs", category: "breakfast", desc: "Truffle scrambled eggs with parmesan, halloumi & avocado on sourdough.", tags: [] },
  { name: "French Toast", category: "breakfast", desc: "Brioche with strawberries, banana, blueberries, Canadian maple syrup & mascarpone.", tags: [] },
  { name: "Brekky Bowl", category: "breakfast", desc: "Quinoa, kale, avocado, beetroot, tomato, halloumi, hommus & poached egg.", tags: [] },
  { name: "The Rustic", category: "breakfast", desc: "Bread stuffed with bacon, mushroom, tomatoes, sausages, spinach, egg & cheese (oven-baked).", tags: [] },

  // GOURMET PIES
  { name: "Steak & Gravy Pie", category: "pies", desc: "Classic slow-cooked steak in rich gravy.", tags: ["halal"], group: "savoury" },
  { name: "Steak & Pepper Pie", category: "pies", desc: "Tender steak with cracked pepper.", tags: ["halal"], group: "savoury" },
  { name: "Steak & Mushroom Pie", category: "pies", desc: "Steak with earthy mushrooms in a flaky pastry.", tags: ["halal"], group: "savoury" },
  { name: "Steak & Curry Pie", category: "pies", desc: "Spiced curry steak filling.", tags: ["halal"], group: "savoury" },
  { name: "Steak Bacon & Cheese Pie", category: "pies", desc: "Steak, smoky bacon and melted cheese.", tags: ["halal"], group: "savoury" },
  { name: "Beef Burgundy Pie", category: "pies", desc: "Slow-braised beef in red wine sauce.", tags: ["halal"], group: "savoury" },
  { name: "Lamb & Feta Pie", category: "pies", desc: "Tender lamb with crumbled feta.", tags: ["halal"], group: "savoury" },
  { name: "Lamb & Mushroom Pie", category: "pies", desc: "Lamb with earthy mushroom filling.", tags: ["halal"], group: "savoury" },
  { name: "Lamb & Pepper Pie", category: "pies", desc: "Seasoned lamb with cracked pepper.", tags: ["halal"], group: "savoury" },
  { name: "Chicken & Leek Pie", category: "pies", desc: "Creamy chicken and leek.", tags: ["halal"], group: "savoury" },
  { name: "Chicken & Bacon Pie", category: "pies", desc: "Chicken and smoky bacon.", tags: ["halal"], group: "savoury" },
  { name: "Curry Chicken Pie", category: "pies", desc: "Chicken in fragrant curry sauce.", tags: ["halal"], group: "savoury" },
  { name: "Sausage Roll", category: "pies", desc: "Classic sausage roll in flaky pastry.", tags: ["halal"], group: "savoury" },
  { name: "Apple Pie", category: "pies", desc: "Sweet baked apple in pastry.", tags: ["halal"], group: "sweet" },
  { name: "Mixed Berries Pie", category: "pies", desc: "Mixed berry filling in flaky pastry.", tags: ["halal"], group: "sweet" },
  { name: "Pie Extras", category: "pies", desc: "Mash, peas & gravy · Chips & gravy · Choice of salad.", tags: [], isExtra: true },

  // SIGNATURE FRIED CHICKEN
  { name: "Fried Chicken", category: "fried-chicken", desc: "Available in 1, 3, 6 or 9 pieces.", tags: ["halal"] },
  { name: "Burger Box", category: "fried-chicken", desc: "Choice of chicken burger or wrap, chips, coke. Flavours: Original, Peri Peri, Smokey BBQ Bacon, Frank's RedHot.", tags: ["halal"] },
  { name: "Family Box", category: "fried-chicken", desc: "10 pieces chicken, 2 large chips, coleslaw, garden salad, 4 cans, 2 aioli dips.", tags: ["halal"] },
  { name: "Kid's Meals", category: "fried-chicken", desc: "Chicken nuggets & chips or chicken bites & chips.", tags: ["halal"] },
  { name: "Hot Chips", category: "fried-chicken", desc: "Small, large or mega. Add gravy.", tags: ["halal"] },
  { name: "Dipping Sauces", category: "fried-chicken", desc: "Mayo, aioli, BBQ, tomato, hot chilli, peri peri, Frank's RedHot, sweet chilli, burger sauce.", tags: [], isExtra: true },

  // LUNCH & DINNER SPECIALS
  { name: "Mini Curry Chicken & Toast", category: "lunch-dinner", desc: "Fragrant curry chicken with toasted bread.", tags: [], group: "entree" },
  { name: "Salt & Pepper Squid", category: "lunch-dinner", desc: "Crispy salt and pepper seasoned squid.", tags: [], group: "entree" },
  { name: "Mini Wonton Soup", category: "lunch-dinner", desc: "Light wonton soup with fresh herbs.", tags: [], group: "entree" },
  { name: "Fish Cake", category: "lunch-dinner", desc: "Pan-fried fish cakes.", tags: [], group: "entree" },
  { name: "Dim Sim", category: "lunch-dinner", desc: "Steamed or fried dim sims.", tags: [], group: "entree" },
  { name: "Fresh Spring Rolls", category: "lunch-dinner", desc: "Prawn, chicken or veggie tofu.", tags: [], group: "entree" },
  { name: "Vermicelli Prawn Spring Roll", category: "lunch-dinner", desc: "Vermicelli spring roll with prawn or veggies.", tags: [], group: "entree" },
  { name: "Special Fried Rice", category: "lunch-dinner", desc: "Seafood, chicken or veggie.", tags: [] },
  { name: "Signature Laksa", category: "lunch-dinner", desc: "Rich and creamy laksa — seafood, chicken or veggie.", tags: [] },
  { name: "Vermicelli Salad Bowl", category: "lunch-dinner", desc: "Fresh vermicelli bowl with prawn, beef or tofu.", tags: [] },
  { name: "King Prawn Pad Thai", category: "lunch-dinner", desc: "Wok-tossed pad thai with king prawns.", tags: [] },
  { name: "Wonton Noodle Soup", category: "lunch-dinner", desc: "Hearty wonton soup with egg noodles.", tags: [] },
  { name: "Chicken Curry & Jasmine Rice", category: "lunch-dinner", desc: "Aromatic chicken curry served with jasmine rice.", tags: [] },
  { name: "Pork Chop & Jasmine Rice", category: "lunch-dinner", desc: "Grilled pork chop with jasmine rice.", tags: [] },

  // MALATANG SOUP
  { name: "Malatang — Build Your Own Bowl", category: "malatang", desc: "Choose your soup base: Chicken Broth, Tomato Broth, Mushroom Broth, or Chongqing Spicy Broth. Chilli is optional — choose your spice level.", tags: [], isFeatured: true },
  { name: "Meat Skewers", category: "malatang", desc: "Selection of fresh meat skewers for your bowl.", tags: [] },
  { name: "Seafood Skewers", category: "malatang", desc: "Prawns, fish and seafood selections.", tags: [] },
  { name: "Tofu & Meatball", category: "malatang", desc: "Tofu varieties and meatball selections.", tags: [] },
  { name: "Vegetables", category: "malatang", desc: "Fresh seasonal vegetables for your bowl.", tags: ["vegetarian"] },
  { name: "Noodles", category: "malatang", desc: "Choose from a variety of noodle types.", tags: [] },
  { name: "Egg", category: "malatang", desc: "Add an egg to your Malatang bowl.", tags: [] },

  // DRINKS
  { name: "Latte", category: "drinks", desc: "Small or large. Milk alternatives: soy, oat, almond.", tags: [] },
  { name: "Flat White", category: "drinks", desc: "Small or large.", tags: [] },
  { name: "Cappuccino", category: "drinks", desc: "Small or large.", tags: [] },
  { name: "Macchiato", category: "drinks", desc: "Small or large.", tags: [] },
  { name: "Piccolo", category: "drinks", desc: "A short, strong milk coffee.", tags: [] },
  { name: "Long Black", category: "drinks", desc: "Double shot over hot water.", tags: [] },
  { name: "Espresso", category: "drinks", desc: "Single or double shot.", tags: [] },
  { name: "Hot Chocolate", category: "drinks", desc: "Rich and creamy hot chocolate.", tags: [] },
  { name: "Matcha Latte", category: "drinks", desc: "Ceremonial grade matcha with your choice of milk.", tags: [] },
  { name: "Turmeric Latte", category: "drinks", desc: "Warming turmeric with milk.", tags: [] },
  { name: "Chai Latte", category: "drinks", desc: "Spiced chai blend steamed with your choice of milk.", tags: [] },
  { name: "Mocha", category: "drinks", desc: "Espresso, chocolate, and steamed milk.", tags: [] },
  { name: "Vietnamese Iced Coffee", category: "drinks", desc: "Strong coffee with condensed milk over ice.", tags: [], group: "cold" },
  { name: "Iced Mocha", category: "drinks", desc: "Espresso, chocolate and milk over ice.", tags: [], group: "cold" },
  { name: "Iced Chocolate", category: "drinks", desc: "Rich chocolate milk over ice.", tags: [], group: "cold" },
  { name: "Iced Latte", category: "drinks", desc: "Smooth espresso over ice with milk.", tags: [], group: "cold" },
  { name: "Iced Chai Latte", category: "drinks", desc: "Spiced chai over ice.", tags: [], group: "cold" },
  { name: "Iced Long Black", category: "drinks", desc: "Double shot over ice water.", tags: [], group: "cold" },
  { name: "Iced Coffee and Cream", category: "drinks", desc: "Iced coffee topped with cream.", tags: [], group: "cold" },
  { name: "Affogato", category: "drinks", desc: "Espresso poured over vanilla ice cream.", tags: [], group: "cold" },
  { name: "Babyccino", category: "drinks", desc: "Frothy warm milk for the little ones.", tags: [], group: "cold" },
  { name: "T2 Teas", category: "drinks", desc: "English Breakfast, Chamomile, Peppermint, Lemongrass Ginger, French Earl Grey. Teabag or tea pot.", tags: [], group: "tea" },

  // SMOOTHIES & JUICES
  { name: "Mango Tango Smoothie", category: "smoothies-juices", desc: "Made with honey, yoghurt and milk. Add protein available.", tags: [], group: "smoothie" },
  { name: "Coco Berry Smoothie", category: "smoothies-juices", desc: "Coconut and mixed berries blend.", tags: [], group: "smoothie" },
  { name: "Green Smoothie", category: "smoothies-juices", desc: "A fresh green blend with seasonal ingredients.", tags: [], group: "smoothie" },
  { name: "Gym Booster Smoothie", category: "smoothies-juices", desc: "Protein-packed energy smoothie.", tags: [], group: "smoothie" },
  { name: "Avocado Smoothie", category: "smoothies-juices", desc: "Creamy avocado smoothie.", tags: [], group: "smoothie" },
  { name: "Coconut Smoothie", category: "smoothies-juices", desc: "Smooth coconut blend.", tags: [], group: "smoothie" },
  { name: "Strawberry Moo Shake", category: "smoothies-juices", desc: "Classic strawberry milkshake.", tags: [], group: "shake" },
  { name: "Caramel Moo Shake", category: "smoothies-juices", desc: "Rich caramel milkshake.", tags: [], group: "shake" },
  { name: "Banana Moo Shake", category: "smoothies-juices", desc: "Creamy banana milkshake.", tags: [], group: "shake" },
  { name: "Coffee Moo Shake", category: "smoothies-juices", desc: "Coffee-infused milkshake.", tags: [], group: "shake" },
  { name: "Chocolate Moo Shake", category: "smoothies-juices", desc: "Indulgent chocolate milkshake.", tags: [], group: "shake" },
  { name: "Vanilla Moo Shake", category: "smoothies-juices", desc: "Classic vanilla milkshake.", tags: [], group: "shake" },
  { name: "Mango Passion Icy Shake", category: "smoothies-juices", desc: "Mango and passionfruit icy blend.", tags: [], group: "icy" },
  { name: "Mango Crush Icy Shake", category: "smoothies-juices", desc: "Pure mango icy crush.", tags: [], group: "icy" },
  { name: "Lychee Crush Icy Shake", category: "smoothies-juices", desc: "Refreshing lychee icy crush.", tags: [], group: "icy" },
  { name: "Watermelon Crush Icy Shake", category: "smoothies-juices", desc: "Fresh watermelon icy crush.", tags: [], group: "icy" },
  { name: "Body Boost Juice", category: "smoothies-juices", desc: "Revitalising fresh juice blend.", tags: [], group: "juice" },
  { name: "Detox Juice", category: "smoothies-juices", desc: "Cleansing juice for wellness.", tags: [], group: "juice" },
  { name: "Energiser Juice", category: "smoothies-juices", desc: "A zesty pick-me-up juice.", tags: [], group: "juice" },
  { name: "Vitamin C Juice", category: "smoothies-juices", desc: "Citrus-packed vitamin boost.", tags: [], group: "juice" },
  { name: "Revivor Juice", category: "smoothies-juices", desc: "Refreshing revival juice blend.", tags: [], group: "juice" },
  { name: "Sweet Energy Juice", category: "smoothies-juices", desc: "Naturally sweet energy juice.", tags: [], group: "juice" },
  { name: "Skin Tonic Juice", category: "smoothies-juices", desc: "Fresh juice for glowing skin.", tags: [], group: "juice" },
  { name: "Rejuvenator Juice", category: "smoothies-juices", desc: "Rejuvenating fresh juice blend.", tags: [], group: "juice" },
];

/* Section metadata */
const sectionMeta = {
  "breakfast": { subtitle: "Served until 12pm" },
  "pies": { title: "Gourmet Pies", halal: true },
  "fried-chicken": { title: "Signature Fried Chicken", halal: true },
  "lunch-dinner": { title: "Lunch & Dinner Specials" },
  "malatang": { title: "Malatang Soup", subtitle: "Build your own bowl — minimum order $15", highlight: true },
  "drinks": { note: "Syrups available: Caramel, Vanilla, Hazelnut, Honey" },
  "smoothies-juices": {},
};

const tagLabels = { "vegetarian": "Vegetarian", "halal": "Halal Certified", "spicy": "Spicy" };
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

  let html = "";
  let lastCategory = null;

  filtered.forEach(item => {
    // Show section header when category changes (only in "all" view)
    if (activeCategory === "all" && item.category !== lastCategory) {
      lastCategory = item.category;
      const meta = sectionMeta[item.category] || {};
      const catNames = {
        "breakfast": "Breakfast", "pies": "Gourmet Pies", "fried-chicken": "Signature Fried Chicken",
        "lunch-dinner": "Lunch & Dinner Specials", "malatang": "Malatang Soup",
        "drinks": "Drinks", "smoothies-juices": "Smoothies & Juices"
      };
      const title = meta.title || catNames[item.category] || item.category;
      html += `<div class="menu-section-header">
        <h3>${title}</h3>
        ${meta.halal ? '<span class="halal-badge">Halal Certified</span>' : ''}
      </div>`;
      if (meta.subtitle) {
        html += `<div class="menu-section-subtitle">${meta.subtitle}</div>`;
      }
    }

    // Show subtitle when entering a specific tab
    if (activeCategory !== "all" && lastCategory === null) {
      lastCategory = item.category;
      const meta = sectionMeta[item.category] || {};
      if (meta.halal) {
        html += `<div class="menu-section-header"><h3>&nbsp;</h3><span class="halal-badge">Halal Certified</span></div>`;
      }
      if (meta.subtitle) {
        html += `<div class="menu-section-subtitle">${meta.subtitle}</div>`;
      }
    }

    const isMalatang = item.category === "malatang" && item.isFeatured;
    const extraClass = isMalatang ? " malatang-highlight" : "";
    const vegTag = item.tags.includes("vegetarian") ? '<span class="veg-indicator">Vegetarian</span>' : '';

    html += `
      <div class="menu-item${extraClass}" role="listitem">
        <div class="menu-item-info">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <div class="menu-tags">
            ${vegTag}
          </div>
        </div>
      </div>`;
  });

  // Add note for drinks section
  if (activeCategory === "drinks") {
    const meta = sectionMeta["drinks"];
    if (meta && meta.note) {
      html += `<div class="menu-section-subtitle" style="margin-top:8px;font-style:normal;opacity:0.7;">${meta.note}</div>`;
    }
  }

  grid.innerHTML = html;
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
