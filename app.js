const COMPARE_KEY = "bp_compare_v1";

// Wedding decor data (change this array name and data for each page)
const weddingDecors = [
  { id: "w1", title: "Velvet Red Roses", description: "Passion and romance in every bloom.", image: "asset/wedding/pngtree-bridal-swings-floral-wedding-decor-picture-image_15560970.jpg", price: "PKR 32,000" },
  { id: "w2", title: "Blush Pink Roses", description: "Soft tones that whisper love.", image: "asset/wedding/pngtree-stunning-wedding-sofa-with-gorgeous-flower-arrangements-picture-image_15943068.jpg", price: "PKR 30,000" },
  { id: "w3", title: "Scarlet Charm", description: "Vibrant hues for timeless beauty.", image: "asset/wedding/pngtree-stylish-floral-wedding-decor-with-ornate-ivory-sofa-image_16461535.jpg", price: "PKR 35,000" },
  { id: "w4", title: "Soft Bloom Mix", description: "Elegance blended with affection.", image: "asset/wedding/sophisticated-bridal-table-setting-with-cascading-greenery-blush-pink-roses-and-white-hydrangeas-against-illuminated-ivory-fabric-backdrop-photo.jpeg", price: "PKR 28,500" },
  { id: "w5", title: "Rosy Glow", description: "Gentle blooms that warm every heart.", image: "asset/wedding/1592991921_weddingbling__20200621_171125_3.avif", price: "PKR 26,000" },
  { id: "w6", title: "Rosy Elegance", description: "Classic red for eternal love.", image: "asset/wedding/17_120319032515.jpg", price: "PKR 33,000" },
];

const container = document.getElementById("decor-container");

// Helper functions for localStorage
function loadCompareItems() {
  try { 
    return JSON.parse(localStorage.getItem(COMPARE_KEY)) || []; 
  } catch { 
    return []; 
  }
}

function saveCompareItems(items) { 
  localStorage.setItem(COMPARE_KEY, JSON.stringify(items)); 
}

function updateCompareCounter() {
  document.getElementById("compare-count").textContent = loadCompareItems().length;
}

// Render cards - FIXED VERSION
function renderCards() {
  const compareItems = loadCompareItems();
  const compareIds = compareItems.map(item => item.id);
  container.innerHTML = "";

  weddingDecors.forEach((item, i) => {
    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-6 col-sm-12";
    col.setAttribute("data-aos", "zoom-in");
    col.setAttribute("data-aos-delay", i * 100);

    const isChecked = compareIds.includes(item.id);

    col.innerHTML = `
      <div class="decor-card">
        <input type="checkbox" class="decor-checkbox" data-id="${item.id}" ${isChecked ? "checked" : ""}>
        <img src="${item.image}" alt="${item.title}">
        <div class="decor-card-body">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="price">${item.decor-price}</div>
        </div>
      </div>
    `;
    container.appendChild(col);
  });

  document.querySelectorAll(".decor-checkbox").forEach(cb => {
    cb.addEventListener("change", e => {
      const id = e.target.dataset.id;
      if (e.target.checked) {
        const item = weddingDecors.find(d => d.id === id);
        if (item) addToCompare(item);
      } else {
        removeFromCompare(id);
      }
      updateCompareCounter();
    });
  });
}

function addToCompare(item) {
  let items = loadCompareItems();
  const MAX = 4;
  
  // Check if item already exists
  if (!items.find(i => i.id === item.id)) {
    if (items.length >= MAX) {
      alert("You can compare up to " + MAX + " items.");
      const cb = document.querySelector('.decor-checkbox[data-id="'+item.id+'"]');
      if (cb) cb.checked = false;
      return;
    }
    items.push(item);
    saveCompareItems(items);
  }
}

function removeFromCompare(id) {
  let items = loadCompareItems();
  items = items.filter(x => x.id !== id);
  saveCompareItems(items);
}

// Build compare grid - FIXED VERSION
function buildCompareGrid() {
  const items = loadCompareItems();
  const grid = document.getElementById("compare-grid");
  grid.innerHTML = "";

  if (items.length === 0) {
    grid.innerHTML = "<p>No items selected. Use the checkboxes on cards to add items.</p>";
    return;
  }

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "compare-item";
    div.innerHTML = `
      <label><input type="checkbox" class="cmp-remove-checkbox" data-id="${item.id}"> Remove</label>
      <img src="${item.image || 'placeholder.jpg'}" alt="${item.title}" onerror="this.src='placeholder.jpg'">
      <h5 style="color:#e75480;">${item.title}</h5>
      <p>${item.description}</p>
      <div style="font-weight:600; color:#c7446a;">${item.decor-price || 'Price not available'}</div>
    `;
    grid.appendChild(div);
  });
}

// Modal events
const modal = document.getElementById("compare-modal");
document.getElementById("open-compare").addEventListener("click", () => {
  buildCompareGrid();
  modal.style.display = "flex";
});
document.getElementById("close-compare").addEventListener("click", () => modal.style.display = "none");
modal.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });

document.getElementById("remove-selected").addEventListener("click", () => {
  const checked = Array.from(document.querySelectorAll(".cmp-remove-checkbox:checked")).map(cb => cb.dataset.id);
  if (checked.length === 0) { alert("Select items to remove first."); return; }
  let items = loadCompareItems().filter(item => !checked.includes(item.id));
  saveCompareItems(items);
  buildCompareGrid();
  renderCards();
  updateCompareCounter();
});

document.getElementById("clear-all").addEventListener("click", () => {
  if (!confirm("Clear all compare selections?")) return;
  saveCompareItems([]);
  renderCards();
  updateCompareCounter();
});

// Initialize
renderCards();
updateCompareCounter();