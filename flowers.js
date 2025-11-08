// ==============================================
// SIMPLE FLOWER DECOR SYSTEM
// Works for all pages: engagement, birthday, wedding
// ==============================================

// CONFIGURATION
const COMPARE_KEY = "flowers_compare"; // localStorage key
const MAX_COMPARE = 4; // Maximum items to compare

// GLOBAL VARIABLES
let allFlowersData = {}; // Will store all flowers from JSON
let currentCategory = ""; // Current page category

// ==============================================
// 1. DETECT WHICH PAGE WE'RE ON
// ==============================================
function detectCategory() {
  // Check the page URL to determine category
  const url = window.location.pathname.toLowerCase();
  
  if (url.includes("engagement")) {
    return "engagement";
  } else if (url.includes("birthday")) {
    return "birthday";
  } else if (url.includes("wedding")) {
    return "wedding";
  }
  
  // Default fallback
  return "engagement";
}

// ==============================================
// 2. LOAD FLOWERS DATA FROM JSON
// ==============================================
async function loadFlowersData() {
  try {
    const response = await fetch("flowers-data.json");
    allFlowersData = await response.json();
    return true;
  } catch (error) {
    console.error("Error loading flowers data:", error);
    alert("Error loading data. Please refresh the page.");
    return false;
  }
}

// ==============================================
// 3. RENDER FLOWER CARDS
// ==============================================
function renderFlowerCards() {
  const container = document.getElementById("decor-container");
  
  if (!container) {
    console.error("Container not found!");
    return;
  }

  // Get flowers for current category
  const flowers = allFlowersData[currentCategory] || [];
  
  if (flowers.length === 0) {
    container.innerHTML = "<p>No items found for this category.</p>";
    return;
  }

  // Get currently selected items from localStorage
  const compareItems = getCompareItems();
  const compareIds = compareItems.map(item => item.id);

  // Clear container
  container.innerHTML = "";

  // Create cards
  flowers.forEach((flower, index) => {
    const isChecked = compareIds.includes(flower.id);
    
    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-6 col-sm-12";
    col.setAttribute("data-aos", "zoom-in");
    col.setAttribute("data-aos-delay", (index + 1) * 100);

    col.innerHTML = `
      <div class="decor-card">
        <input 
          type="checkbox" 
          class="decor-checkbox" 
          data-id="${flower.id}" 
          ${isChecked ? "checked" : ""}
          aria-label="Add to compare"
        >
        <img src="${flower.image}" alt="${flower.title}">
        <div class="decor-card-body">
          <h3>${flower.title}</h3>
          <p>${flower.description}</p>
          <div class="price">${flower.price}</div>
        </div>
      </div>
    `;

    container.appendChild(col);
  });

  // Attach checkbox events
  attachCheckboxEvents();

  // Refresh animations
  if (window.AOS) {
    AOS.refresh();
  }
}

// ==============================================
// 4. CHECKBOX EVENTS (Add/Remove from Compare)
// ==============================================
function attachCheckboxEvents() {
  const checkboxes = document.querySelectorAll(".decor-checkbox");
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function() {
      const itemId = this.dataset.id;
      
      if (this.checked) {
        // Add to compare
        addToCompare(itemId);
      } else {
        // Remove from compare
        removeFromCompare(itemId);
      }
    });
  });
}

// ==============================================
// 5. ADD ITEM TO COMPARE
// ==============================================
function addToCompare(itemId) {
  const compareItems = getCompareItems();
  
  // Check if already added
  if (compareItems.find(item => item.id === itemId)) {
    return;
  }
  
  // Check max limit
  if (compareItems.length >= MAX_COMPARE) {
    alert(`You can only compare up to ${MAX_COMPARE} items at a time.`);
    // Uncheck the checkbox
    const checkbox = document.querySelector(`.decor-checkbox[data-id="${itemId}"]`);
    if (checkbox) checkbox.checked = false;
    return;
  }
  
  // Find the item in all categories
  const item = findItemById(itemId);
  
  if (item) {
    compareItems.push(item);
    saveCompareItems(compareItems);
    updateCompareCounter();
  }
}

// ==============================================
// 6. REMOVE ITEM FROM COMPARE
// ==============================================
function removeFromCompare(itemId) {
  let compareItems = getCompareItems();
  compareItems = compareItems.filter(item => item.id !== itemId);
  saveCompareItems(compareItems);
  updateCompareCounter();
}

// ==============================================
// 7. FIND ITEM BY ID (searches all categories)
// ==============================================
function findItemById(itemId) {
  // Search in all categories
  for (let category in allFlowersData) {
    const items = allFlowersData[category];
    const found = items.find(item => item.id === itemId);
    if (found) {
      // Add category info to the item
      return { ...found, category: category };
    }
  }
  return null;
}

// ==============================================
// 8. LOCALSTORAGE FUNCTIONS
// ==============================================
function getCompareItems() {
  try {
    const data = localStorage.getItem(COMPARE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error reading compare items:", error);
    return [];
  }
}

function saveCompareItems(items) {
  try {
    localStorage.setItem(COMPARE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error("Error saving compare items:", error);
  }
}

// ==============================================
// 9. UPDATE COMPARE COUNTER
// ==============================================
function updateCompareCounter() {
  const counter = document.getElementById("compare-count");
  const compareBar = document.getElementById("compare-bar");
  
  if (counter) {
    const count = getCompareItems().length;
    counter.textContent = count;
    
    // Show/hide compare bar
    if (compareBar) {
      compareBar.style.display = count > 0 ? "flex" : "none";
    }
  }
}

// ==============================================
// 10. OPEN COMPARE MODAL
// ==============================================
function openCompareModal() {
  const modal = document.getElementById("compare-modal");
  const grid = document.getElementById("compare-grid");
  
  if (!modal || !grid) return;
  
  const compareItems = getCompareItems();
  
  // Clear grid
  grid.innerHTML = "";
  
  if (compareItems.length === 0) {
    grid.innerHTML = `
      <div style="text-align: center; padding: 40px; color: #6b4b52; grid-column: 1/-1;">
        <p>No items selected for comparison.</p>
        <p style="font-size: 0.9rem; margin-top: 10px;">Use the checkboxes on cards to add items.</p>
      </div>
    `;
  } else {
    // Create compare items
    compareItems.forEach(item => {
      const div = document.createElement("div");
      div.className = "compare-item";
      
      div.innerHTML = `
        <label style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
          <input type="checkbox" class="cmp-remove-checkbox" data-id="${item.id}">
          <span style="font-size: 0.9rem;">Remove</span>
        </label>
        <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">
        <h5 style="margin: 10px 0 5px 0; color: #e75480;">${item.title}</h5>
        <p style="color: #6b4b52; font-size: 0.9rem;">${item.description}</p>
        <div style="margin-top: 8px; font-weight: 600; color: #c7446a;">${item.price}</div>
        <div style="margin-top: 5px; font-size: 0.85rem; color: #999; text-transform: capitalize;">
          Category: ${item.category}
        </div>
      `;
      
      grid.appendChild(div);
    });
  }
  
  // Show modal
  modal.style.display = "flex";
}

// ==============================================
// 11. CLOSE COMPARE MODAL
// ==============================================
function closeCompareModal() {
  const modal = document.getElementById("compare-modal");
  if (modal) {
    modal.style.display = "none";
  }
}

// ==============================================
// 12. REMOVE SELECTED FROM MODAL
// ==============================================
function removeSelectedFromModal() {
  const checkboxes = document.querySelectorAll(".cmp-remove-checkbox:checked");
  
  if (checkboxes.length === 0) {
    alert("Please select items to remove.");
    return;
  }
  
  // Get IDs to remove
  const idsToRemove = Array.from(checkboxes).map(cb => cb.dataset.id);
  
  // Remove from compare
  let compareItems = getCompareItems();
  compareItems = compareItems.filter(item => !idsToRemove.includes(item.id));
  saveCompareItems(compareItems);
  
  // Update UI
  updateCompareCounter();
  updateCheckboxesOnPage();
  openCompareModal(); // Refresh modal
}

// ==============================================
// 13. CLEAR ALL COMPARE ITEMS
// ==============================================
function clearAllCompare() {
  if (getCompareItems().length === 0) {
    return;
  }
  
  if (confirm("Clear all compare selections?")) {
    saveCompareItems([]);
    updateCompareCounter();
    updateCheckboxesOnPage();
    openCompareModal(); // Refresh modal
  }
}

// ==============================================
// 14. UPDATE CHECKBOXES ON PAGE
// ==============================================
function updateCheckboxesOnPage() {
  const compareItems = getCompareItems();
  const compareIds = compareItems.map(item => item.id);
  
  const checkboxes = document.querySelectorAll(".decor-checkbox");
  checkboxes.forEach(checkbox => {
    checkbox.checked = compareIds.includes(checkbox.dataset.id);
  });
}

// ==============================================
// 15. ATTACH MODAL EVENTS
// ==============================================
function attachModalEvents() {
  // Open modal button
  const openBtn = document.getElementById("open-compare");
  if (openBtn) {
    openBtn.addEventListener("click", openCompareModal);
  }
  
  // Close modal button
  const closeBtn = document.getElementById("close-compare");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeCompareModal);
  }
  
  // Close on backdrop click
  const modal = document.getElementById("compare-modal");
  if (modal) {
    modal.addEventListener("click", function(e) {
      if (e.target === modal) {
        closeCompareModal();
      }
    });
  }
  
  // Remove selected button
  const removeBtn = document.getElementById("remove-selected");
  if (removeBtn) {
    removeBtn.addEventListener("click", removeSelectedFromModal);
  }
  
  // Clear all button
  const clearBtn = document.getElementById("clear-all");
  if (clearBtn) {
    clearBtn.addEventListener("click", clearAllCompare);
  }
}

// ==============================================
// 16. SYNC ACROSS TABS (Listen to localStorage changes)
// ==============================================
window.addEventListener("storage", function(e) {
  if (e.key === COMPARE_KEY) {
    updateCompareCounter();
    updateCheckboxesOnPage();
  }
});

// ==============================================
// 17. INITIALIZE EVERYTHING
// ==============================================
async function initializeApp() {
  console.log("Initializing app...");
  
  // 1. Detect category
  currentCategory = detectCategory();
  console.log("Current category:", currentCategory);
  
  // 2. Load data
  const loaded = await loadFlowersData();
  if (!loaded) return;
  
  // 3. Render cards
  renderFlowerCards();
  
  // 4. Update compare counter
  updateCompareCounter();
  
  // 5. Attach modal events
  attachModalEvents();
  
  console.log("App initialized successfully!");
}

// ==============================================
// 18. START THE APP WHEN PAGE LOADS
// ==============================================
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}