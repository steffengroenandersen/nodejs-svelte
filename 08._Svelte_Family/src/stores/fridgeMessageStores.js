import { writable } from "svelte/store"; // It provides a way to create a store that holds a mutable value.

// Create store
export const fridgeMessages = writable([{message: "Svelte Family Fridge"}]);