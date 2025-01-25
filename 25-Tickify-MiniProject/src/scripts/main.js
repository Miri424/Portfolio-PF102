import { getAll } from "../services/index.js";
import { renderCards } from "./cards.js";

async function init() {
    try {
      const events = await getAll('events');
      renderCards(events);
    } catch (err) {
      console.error("Failed to render cards:", err.message);
    }
  }
  
  init();