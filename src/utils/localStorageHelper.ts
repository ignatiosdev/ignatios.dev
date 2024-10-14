// Custom event for page changes
const storageEvent = new Event("pageChange");

function setItem(key: string, value: string) {
  localStorage.setItem(key, value);
}

// Function to set the currentPageId and dispatch the page change event
function setCurrentPageId(value: string) {
  localStorage.setItem("currentPageId", value);
  const event = new CustomEvent("pageChange", { detail: value });
  window.dispatchEvent(event);
}

// Function to remove an item from localStorage
function removeItem(key: string) {
  localStorage.removeItem(key);
  window.dispatchEvent(storageEvent);
}

// Function to clear all items from localStorage
function clear() {
  localStorage.clear();
  window.dispatchEvent(storageEvent);
}

export { setItem, setCurrentPageId, removeItem, clear };
