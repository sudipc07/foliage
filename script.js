/* ===== MENU DATA ===== */
const menuItems = [
  // BREAKFAST
  { name: "Bread & Spread", cat: "breakfast", desc: "Toast with honey, jam, marmalade, vegemite or nutella." },
  { name: "Muesli Yoghurt Bowl", cat: "breakfast", desc: "Seasonal fruits with muesli.", v: true },
  { name: "Bacon & Egg Roll", cat: "breakfast", desc: "Served on a soft roll." },
  { name: "Eggs on Toast", cat: "breakfast", desc: "Choice of fried, poached or scrambled.", v: true },
  { name: "Smashed Avocado on Sourdough", cat: "breakfast", desc: "Add eggs available.", v: true },
  { name: "Brekky Wrap", cat: "breakfast", desc: "Bacon, scrambled eggs, sausages, hashbrown, cheese, baby spinach, BBQ sauce." },
  { name: "Big Breakfast", cat: "breakfast", desc: "Bacon, scrambled eggs, sausages, hashbrown, baby spinach, grilled tomato, mushroom with toast." },
  { name: "Vegetarian Breakfast", cat: "breakfast", desc: "Scrambled eggs, avocado, grilled halloumi, mushroom, baby spinach, roasted tomato, hashbrown with toast.", v: true },
  { name: "The Omelette", cat: "breakfast", desc: "Bacon, tomato, mushroom, onion, shallot, spinach, feta with toast." },
  { name: "Salmon Croissant", cat: "breakfast", desc: "Smoked salmon, scrambled eggs, capers, onion, spinach on a croissant." },
  { name: "Eggs Benedict", cat: "breakfast", desc: "Salmon, poached eggs, baby spinach, feta, hollandaise sauce on sourdough." },
  { name: "Creamy Mushroom Toast", cat: "breakfast", desc: "Poached eggs, garlic, chilli flakes, parsley, lemon, feta & cream cheese.", v: true },
  { name: "Truffle Eggs", cat: "breakfast", desc: "Truffle scrambled eggs with parmesan, halloumi & avocado on sourdough." },
  { name: "French Toast", cat: "breakfast", desc: "Brioche with strawberries, banana, blueberries, Canadian maple syrup & mascarpone." },
  { name: "Brekky Bowl", cat: "breakfast", desc: "Quinoa, kale, avocado, beetroot, tomato, halloumi, hommus & poached egg.", v: true },
  { name: "The Rustic", cat: "breakfast", desc: "Bread stuffed with bacon, mushroom, tomatoes, sausages, spinach, egg & cheese, oven-baked." },

  // GOURMET PIES
  { name: "Steak & Gravy", cat: "pies", desc: "Classic slow-cooked beef in rich gravy." },
  { name: "Steak & Pepper", cat: "pies", desc: "Tender beef with cracked pepper sauce." },
  { name: "Steak & Mushroom", cat: "pies", desc: "Beef and mushroom in savoury pastry." },
  { name: "Steak & Curry", cat: "pies", desc: "Aromatic curried beef filling." },
  { name: "Steak Bacon & Cheese", cat: "pies", desc: "Beef, smoky bacon and melted cheese." },
  { name: "Beef Burgundy", cat: "pies", desc: "Slow-braised beef in red wine sauce." },
  { name: "Lamb & Feta", cat: "pies", desc: "Tender lamb with creamy feta." },
  { name: "Lamb & Mushroom", cat: "pies", desc: "Lamb and mushroom in buttery pastry." },
  { name: "Lamb & Pepper", cat: "pies", desc: "Seasoned lamb with pepper sauce." },
  { name: "Chicken & Leek", cat: "pies", desc: "Tender chicken with sweet leek." },
  { name: "Chicken & Bacon", cat: "pies", desc: "Chicken and smoky bacon filling." },
  { name: "Curry Chicken", cat: "pies", desc: "Fragrant curried chicken." },
  { name: "Sausage Roll", cat: "pies", desc: "Classic flaky pastry sausage roll." },
  { name: "Apple", cat: "pies", desc: "Sweet apple pie." },
  { name: "Mixed Berries", cat: "pies", desc: "Mixed berry sweet pie." },
  { name: "Extras", cat: "pies", desc: "Add mash peas & gravy, chips & gravy, or a choice of salad." },

  // SIGNATURE FRIED CHICKEN
  { name: "Fried Chicken", cat: "fried-chicken", desc: "Available in 1, 3, 6 or 9 pieces. Small and large sizes available." },
  { name: "Burger Box", cat: "fried-chicken", desc: "Choice of chicken burger or wrap with chips and coke. Flavours: Original, Peri Peri, Smokey BBQ Bacon, Frank's RedHot." },
  { name: "Family Box", cat: "fried-chicken", desc: "10 pieces original chicken, 2 large chips, coleslaw, garden salad, 4 cans, 2 aioli dips." },
  { name: "Kid's Meals", cat: "fried-chicken", desc: "Chicken nuggets & chips or chicken bites & chips." },
  { name: "Hot Chips", cat: "fried-chicken", desc: "Small, large or mega. Add gravy available." },
  { name: "Dipping Sauces", cat: "fried-chicken", desc: "Mayo, aioli, BBQ, tomato, hot chilli, peri peri, Frank's RedHot, sweet chilli, burger sauce." },

  // LUNCH & DINNER
  { name: "Mini Curry Chicken & Toast", cat: "lunch-dinner", desc: "Fragrant curry chicken served with toast." },
  { name: "Salt & Pepper Squid", cat: "lunch-dinner", desc: "Crispy squid with house seasoning." },
  { name: "Mini Wonton Soup", cat: "lunch-dinner", desc: "Delicate wontons in clear broth." },
  { name: "Fish Cake", cat: "lunch-dinner", desc: "Pan-fried fish cake." },
  { name: "Dim Sim", cat: "lunch-dinner", desc: "Steamed or fried dim sim." },
  { name: "Fresh Spring Rolls", cat: "lunch-dinner", desc: "Prawn, chicken or veggie tofu with sweet fish sauce and peanuts (3 pieces)." },
  { name: "Vermicelli Prawn Spring Roll", cat: "lunch-dinner", desc: "Crispy spring roll with veggies option available." },
  { name: "Special Fried Rice \u2014 Seafood", cat: "lunch-dinner", desc: "Wok-tossed rice with fresh seafood." },
  { name: "Special Fried Rice \u2014 Chicken", cat: "lunch-dinner", desc: "Wok-tossed rice with chicken." },
  { name: "Special Fried Rice \u2014 Veggie", cat: "lunch-dinner", desc: "Wok-tossed vegetable fried rice.", v: true },
  { name: "Signature Laksa \u2014 Seafood", cat: "lunch-dinner", desc: "Rich coconut laksa with fresh seafood." },
  { name: "Signature Laksa \u2014 Chicken", cat: "lunch-dinner", desc: "Rich coconut laksa with chicken." },
  { name: "Signature Laksa \u2014 Veggie", cat: "lunch-dinner", desc: "Rich coconut vegetable laksa.", v: true },
  { name: "Vermicelli Salad Bowl \u2014 Prawn", cat: "lunch-dinner", desc: "Light vermicelli salad with prawns." },
  { name: "Vermicelli Salad Bowl \u2014 Beef", cat: "lunch-dinner", desc: "Light vermicelli salad with beef." },
  { name: "Vermicelli Salad Bowl \u2014 Tofu", cat: "lunch-dinner", desc: "Light vermicelli salad with tofu.", v: true },
  { name: "King Prawn Pad Thai", cat: "lunch-dinner", desc: "Wok-tossed rice noodles with king prawns." },
  { name: "Wonton Noodle Soup", cat: "lunch-dinner", desc: "Handmade wontons in noodle broth." },
  { name: "Chicken Curry & Jasmine Rice", cat: "lunch-dinner", desc: "Fragrant curry with steamed jasmine rice." },
  { name: "Pork Chop & Jasmine Rice", cat: "lunch-dinner", desc: "Grilled pork chop with jasmine rice." },

  // MALATANG
  { name: "Choose Your Broth", cat: "malatang", desc: "Chicken Broth, Tomato Broth, Mushroom Broth, or Chongqing Spicy Broth." },
  { name: "Spice Level", cat: "malatang", desc: "No spice, mild, medium or spicy \u2014 your choice." },
  { name: "Meat Skewer", cat: "malatang", desc: "Premium meat per skewer." },
  { name: "Seafood Skewer", cat: "malatang", desc: "Fresh seafood per skewer." },
  { name: "Tofu or Meatball", cat: "malatang", desc: "Per skewer or bunch.", v: true },
  { name: "Vegetables", cat: "malatang", desc: "Fresh vegetables per bunch.", v: true },
  { name: "Noodles", cat: "malatang", desc: "Add noodles to your bowl.", v: true },
  { name: "Egg", cat: "malatang", desc: "Add egg to your bowl.", v: true },

  // DRINKS
  { name: "Latte", cat: "drinks", desc: "Smooth espresso with steamed milk. Small or large." },
  { name: "Flat White", cat: "drinks", desc: "Double ristretto with velvety microfoam." },
  { name: "Cappuccino", cat: "drinks", desc: "Espresso, steamed milk and thick foam." },
  { name: "Macchiato", cat: "drinks", desc: "Espresso with a touch of foam." },
  { name: "Piccolo", cat: "drinks", desc: "Ristretto with a small amount of steamed milk." },
  { name: "Long Black", cat: "drinks", desc: "Double espresso over hot water." },
  { name: "Espresso", cat: "drinks", desc: "Pure single or double shot." },
  { name: "Hot Chocolate", cat: "drinks", desc: "Rich and creamy hot chocolate." },
  { name: "Matcha Latte", cat: "drinks", desc: "Ceremonial grade matcha with steamed milk." },
  { name: "Turmeric Latte", cat: "drinks", desc: "Golden spiced latte." },
  { name: "Chai Latte", cat: "drinks", desc: "Spiced tea latte." },
  { name: "Mocha", cat: "drinks", desc: "Espresso with chocolate and steamed milk." },
  { name: "Vietnamese Iced Coffee", cat: "drinks", desc: "Strong drip coffee with condensed milk over ice." },
  { name: "Iced Mocha", cat: "drinks", desc: "Chilled mocha over ice." },
  { name: "Iced Chocolate", cat: "drinks", desc: "Cold chocolate milk drink." },
  { name: "Iced Latte", cat: "drinks", desc: "Espresso over cold milk and ice." },
  { name: "Iced Chai Latte", cat: "drinks", desc: "Chilled spiced chai over ice." },
  { name: "Iced Long Black", cat: "drinks", desc: "Double espresso over ice." },
  { name: "Iced Coffee and Cream", cat: "drinks", desc: "Classic iced coffee with cream." },
  { name: "Affogato", cat: "drinks", desc: "Vanilla ice cream drowned in hot espresso." },
  { name: "Babyccino", cat: "drinks", desc: "Frothy warm milk for little ones." },
  { name: "T2 English Breakfast", cat: "drinks", desc: "Classic black tea." },
  { name: "T2 Chamomile", cat: "drinks", desc: "Soothing floral tisane.", v: true },
  { name: "T2 Peppermint", cat: "drinks", desc: "Cool and refreshing.", v: true },
  { name: "T2 Lemongrass Ginger", cat: "drinks", desc: "Zesty and warming.", v: true },
  { name: "T2 French Earl Grey", cat: "drinks", desc: "Bergamot black tea." },

  // SMOOTHIES & JUICES
  { name: "Mango Tango", cat: "smoothies-juices", desc: "Mango, strawberry, banana with honey, yoghurt and milk." },
  { name: "Coco Berry", cat: "smoothies-juices", desc: "Mixed berries and coconut with honey, yoghurt and milk." },
  { name: "Green Smoothie", cat: "smoothies-juices", desc: "Kale, spinach, avocado, green apple.", v: true },
  { name: "Gym Booster", cat: "smoothies-juices", desc: "Strawberry, banana, protein \u2014 add protein available.", v: true },
  { name: "Avocado Smoothie", cat: "smoothies-juices", desc: "Creamy blended avocado.", v: true },
  { name: "Coconut Smoothie", cat: "smoothies-juices", desc: "Fresh coconut blend.", v: true },
  { name: "Moo Shake", cat: "smoothies-juices", desc: "Strawberry, caramel, banana, coffee, chocolate or vanilla." },
  { name: "Icy Shake \u2014 Mango Passion", cat: "smoothies-juices", desc: "Mango, pineapple & passionfruit.", v: true },
  { name: "Icy Shake \u2014 Mango Crush", cat: "smoothies-juices", desc: "Chilled mango blend.", v: true },
  { name: "Icy Shake \u2014 Lychee Crush", cat: "smoothies-juices", desc: "Fragrant lychee shake.", v: true },
  { name: "Icy Shake \u2014 Watermelon Crush", cat: "smoothies-juices", desc: "Refreshing watermelon.", v: true },
  { name: "Body Boost Juice", cat: "smoothies-juices", desc: "Apple, orange, carrot & beetroot.", v: true },
  { name: "Detox Juice", cat: "smoothies-juices", desc: "Apple, carrot, beetroot & celery.", v: true },
  { name: "Energiser Juice", cat: "smoothies-juices", desc: "Apple, carrot, beetroot, lemon & ginger.", v: true },
  { name: "Vitamin C Juice", cat: "smoothies-juices", desc: "Carrot, orange, pineapple & ginger.", v: true },
  { name: "Revivor Juice", cat: "smoothies-juices", desc: "Carrot, orange & pineapple.", v: true },
  { name: "Sweet Energy Juice", cat: "smoothies-juices", desc: "Apple, orange & watermelon.", v: true },
  { name: "Skin Tonic Juice", cat: "smoothies-juices", desc: "Orange, pineapple & rockmelon.", v: true },
  { name: "Rejuvenator Juice", cat: "smoothies-juices", desc: "Apple, pineapple & lemon.", v: true },
];

const grid = document.getElementById("menuGrid");
const chalkSun = document.getElementById("chalkSun");
const chalkSpecial = document.getElementById("chalkSpecial");
const chalkNote = document.getElementById("chalkNote");
let activeCategory = "breakfast";

function renderMenu() {
  const items = menuItems.filter(i => i.cat === activeCategory);

  // Breakfast sun
  if (activeCategory === "breakfast") {
    chalkSun.classList.add("visible");
  } else {
    chalkSun.classList.remove("visible");
  }

  // Special content above cards
  let specialHTML = "";

  if (activeCategory === "pies" || activeCategory === "fried-chicken") {
    specialHTML = '<div class="chalk-halal-badge">\u262A Halal Certified</div>';
  }

  if (activeCategory === "malatang") {
    specialHTML = `
      <div class="steam-wrap" aria-hidden="true">
        <div class="steam-line"></div>
        <div class="steam-line"></div>
        <div class="steam-line"></div>
      </div>
      <div class="malatang-intro">
        <div class="malatang-chars">\u9EBB\u8FA3\u70EB</div>
        <div class="malatang-desc">Numbing. Spicy. Piping hot. Build your own bowl, Sichuan street-food style.</div>
      </div>`;
  }

  chalkSpecial.innerHTML = specialHTML;

  // Note at bottom
  if (activeCategory === "malatang") {
    chalkNote.textContent = "Minimum order $15. Build your bowl \u2014 mix and match as many skewers as you like.";
  } else if (activeCategory === "drinks") {
    chalkNote.textContent = "Milk alternatives available: Soy, Oat, Almond. Syrups: Caramel, Vanilla, Hazelnut, Honey.";
  } else {
    chalkNote.textContent = "";
  }

  // Cards
  if (!items.length) {
    grid.innerHTML = '<div class="menu-empty">Nothing here yet.</div>';
    return;
  }

  grid.innerHTML = items.map((item, i) => `
    <div class="menu-item" role="listitem" style="animation-delay:${i * 40}ms">
      <div class="menu-item-name">
        ${item.name}
        ${item.v ? '<span class="veg-mark" aria-label="Vegetarian"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66L7 18"/><path d="M17 8c-4 0-8.5 2-11 6"/><path d="M17 8c.7-2.3 1.1-4.8 1-7.5C14.8.8 12.3 1.2 10 2c0 0 4 4.5 7 6"/></svg></span>' : ''}
      </div>
      <div class="menu-item-desc">${item.desc}</div>
    </div>
  `).join("");
}

document.querySelectorAll(".menu-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".menu-tab").forEach(t => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    activeCategory = tab.dataset.category;
    renderMenu();
  });
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
  a.addEventListener("click", () => {
    navLinksEl.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
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

/* ===== MOBILE BOTTOM SHEET ===== */
(function() {
  const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

  const categories = [
    { key: "breakfast", label: "Breakfast" },
    { key: "pies", label: "Gourmet Pies", halal: true },
    { key: "fried-chicken", label: "Fried Chicken", halal: true },
    { key: "lunch-dinner", label: "Lunch & Dinner" },
    { key: "malatang", label: "Malatang" },
    { key: "drinks", label: "Drinks" },
    { key: "smoothies-juices", label: "Smoothies & Juices" },
  ];

  const overlay = document.getElementById("drawerOverlay");
  const drawer = document.getElementById("drawer");
  const drawerTitle = document.getElementById("drawerTitle");
  const drawerBody = document.getElementById("drawerBody");
  const drawerClose = document.getElementById("drawerClose");
  const drawerHeader = document.getElementById("drawerHeader");
  const menuSection = document.getElementById("menu");
  let mobileGrid = null;

  function buildMobileGrid() {
    if (mobileGrid) return;
    mobileGrid = document.createElement("div");
    mobileGrid.className = "mobile-cat-grid";
    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = "mobile-cat-btn";
      btn.dataset.category = cat.key;
      btn.textContent = cat.label;
      if (cat.halal) {
        const badge = document.createElement("span");
        badge.className = "halal-mini";
        badge.textContent = "Halal";
        btn.appendChild(badge);
      }
      btn.addEventListener("click", () => openDrawer(cat.key));
      mobileGrid.appendChild(btn);
    });
    // Insert after menu-intro
    const intro = menuSection.querySelector(".menu-intro");
    intro.parentNode.insertBefore(mobileGrid, intro.nextSibling);
  }

  function removeMobileGrid() {
    if (mobileGrid) {
      mobileGrid.remove();
      mobileGrid = null;
    }
  }

  function openDrawer(catKey) {
    if (!isMobile()) return;
    const cat = categories.find(c => c.key === catKey);
    const items = menuItems.filter(i => i.cat === catKey);

    // Build title row
    let titleHTML = cat.label;
    if (cat.halal) {
      titleHTML += ' <span class="drawer-title-badge">\u262A Halal Certified</span>';
    }
    if (catKey === "breakfast") {
      titleHTML += ' <span class="drawer-title-note">Until 12pm</span>';
    }
    drawerTitle.innerHTML = titleHTML;

    // Build body
    let bodyHTML = "";

    if (catKey === "malatang") {
      bodyHTML += '<div class="drawer-malatang-intro">';
      bodyHTML += '<div class="malatang-chars">\u9EBB\u8FA3\u70EB</div>';
      bodyHTML += '<div class="malatang-desc">Numbing. Spicy. Piping hot. Build your own bowl, Sichuan street-food style.</div>';
      bodyHTML += '</div>';
    }

    items.forEach(item => {
      bodyHTML += '<div class="drawer-item">';
      bodyHTML += '<div class="drawer-item-name">' + item.name;
      if (item.v) bodyHTML += ' <span class="veg-mark" aria-label="Vegetarian"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66L7 18"/><path d="M17 8c-4 0-8.5 2-11 6"/><path d="M17 8c.7-2.3 1.1-4.8 1-7.5C14.8.8 12.3 1.2 10 2c0 0 4 4.5 7 6"/></svg></span>';
      bodyHTML += '</div>';
      bodyHTML += '<div class="drawer-item-desc">' + item.desc + '</div>';
      bodyHTML += '</div>';
    });

    if (catKey === "malatang") {
      bodyHTML += '<div class="drawer-note">Minimum order $15. Build your bowl \u2014 mix and match as many skewers as you like.</div>';
    } else if (catKey === "drinks") {
      bodyHTML += '<div class="drawer-note">Milk alternatives available: Soy, Oat, Almond. Syrups: Caramel, Vanilla, Hazelnut, Honey.</div>';
    }

    drawerBody.innerHTML = bodyHTML;

    // Show
    overlay.style.display = "block";
    drawer.style.display = "block";
    document.body.style.overflow = "hidden";

    // Force reflow then animate
    void drawer.offsetHeight;
    overlay.classList.add("open");
    drawer.classList.add("open");
  }

  function closeDrawer() {
    overlay.classList.remove("open");
    overlay.classList.add("closing");
    drawer.classList.remove("open");
    drawer.classList.add("closing");

    setTimeout(() => {
      overlay.style.display = "none";
      drawer.style.display = "none";
      overlay.classList.remove("closing");
      drawer.classList.remove("closing");
      document.body.style.overflow = "";
    }, 350);
  }

  // Close handlers
  overlay.addEventListener("click", closeDrawer);
  drawerClose.addEventListener("click", closeDrawer);

  // Swipe to close
  let touchStartY = 0;
  let touchCurrentY = 0;
  let isSwiping = false;

  drawer.addEventListener("touchstart", (e) => {
    // Only start swipe from near top of drawer or when scrolled to top
    if (drawer.scrollTop <= 0) {
      touchStartY = e.touches[0].clientY;
      isSwiping = true;
    }
  }, { passive: true });

  drawer.addEventListener("touchmove", (e) => {
    if (!isSwiping) return;
    touchCurrentY = e.touches[0].clientY;
    const diff = touchCurrentY - touchStartY;
    if (diff > 0) {
      drawer.style.transform = "translateY(" + diff + "px)";
      drawer.style.transition = "none";
    }
  }, { passive: true });

  drawer.addEventListener("touchend", () => {
    if (!isSwiping) return;
    isSwiping = false;
    const diff = touchCurrentY - touchStartY;
    drawer.style.transition = "";
    if (diff > 80) {
      closeDrawer();
    } else {
      drawer.style.transform = "";
      drawer.classList.add("open");
    }
    touchStartY = 0;
    touchCurrentY = 0;
  });

  // Responsive: build/remove mobile grid on resize
  function handleResize() {
    if (isMobile()) {
      buildMobileGrid();
    } else {
      removeMobileGrid();
      // Ensure drawer is closed on desktop
      if (drawer.classList.contains("open")) closeDrawer();
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();
})();
