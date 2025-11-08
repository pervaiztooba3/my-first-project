const COMPARE_KEY = "bp_compare_v1";

// Engagement decor data
const engagementDecors = [
  { id: "e1", title: "Elegant Blush-Themed", description: "Outdoor setup with pastel drapes & soft lighting.", image: "asset/engagment/Blush_Serenity_Engagement_Setup.jpg", price: "PKR 25,000", detailA: "Lorem ipsum dolor", detailB: "Lorem ipsum" },
  { id: "e2", title: "Blush Pink Roses", description: "Soft tones that whisper love and admiration.", image: "asset/engagment/59351c003c97357a658ec9f91c65eac9.jpg", price: "PKR 30,000", detailA: "Lorem ipsum dolor", detailB: "Lorem ipsum" },
  { id: "e3", title: "Scarlet Charm", description: "Vibrant hues that speak louder than words.", image: "asset/engagment/a43ea5c04909093940b786e1321f9d86.jpg", price: "PKR 27,500", detailA: "Lorem ipsum dolor", detailB: "Lorem ipsum" },
  { id: "e4", title: "Soft Bloom Mix", description: "Blended tones for an unforgettable gesture.", image: "asset/engagment/14114d276568a229fcec3e076b36dfb8.jpg", price: "PKR 22,000", detailA: "Lorem ipsum dolor", detailB: "Lorem ipsum" },
  { id: "e5", title: "Rosy Glow", description: "Gentle pink roses that brighten every heart.", image: "asset/engagment/e68c5a22071b727523ef0ed444f29bed.jpg", price: "PKR 24,500", detailA: "Lorem ipsum dolor", detailB: "Lorem ipsum" },
  { id: "e6", title: "Rosy Elegance", description: "Classic red roses for timeless expressions.", image: "asset/engagment/e8453f99b9b977b93dcba1657385d7c0.jpg", price: "PKR 28,000", detailA: "Lorem ipsum dolor", detailB: "Lorem ipsum" },
  { id: "e7", title: "Romantic Swing Harmony", description: "Swing with roses — dreamy photos guaranteed.", image: "asset/engagment/Romantic_Rose_Harmony_Swing.jpg", price: "PKR 26,000", detailA: "Lorem ipsum dolor", detailB: "Lorem ipsum" },
  { id: "e8", title: "Semi-Arch Duo", description: "Two semi-arches topped with flowers for an elegant look.", image: "asset/engagment/two+flower+in+semi-arches+.webp", price: "PKR 29,000", detailA: "Lorem ipsum dolor", detailB: "Lorem ipsum" },
  { id: "e9", title: "Blushing Bloom Arch", description: "Graceful arch to frame your special moment.", image: "asset/engagment/Blushing_Bloom_Elegance_Arch.avif", price: "PKR 31,000", detailA: "Lorem ipsum dolor", detailB: "Lorem ipsum" }
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

// Render cards
function renderCards() {
  const compareItems = loadCompareItems();
  const compareIds = compareItems.map(item => item.id);
  container.innerHTML = "";

  engagementDecors.forEach((item, i) => {
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
          <div class="price">${item.price}</div>
        </div>
      </div>
    `;
    container.appendChild(col);
  });

  document.querySelectorAll(".decor-checkbox").forEach(cb => {
    cb.addEventListener("change", e => {
      const id = e.target.dataset.id;
      if (e.target.checked) {
        const item = engagementDecors.find(d => d.id === id);
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

// Build compare grid
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
      <div style="font-weight:600; color:#c7446a;">${item.price || 'Price not available'}</div>
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