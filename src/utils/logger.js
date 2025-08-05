export function logEvent(message, data = {}) {
  const timestamp = new Date().toISOString();
  const log = { timestamp, message, ...data };
  // Save to localStorage or IndexedDB if needed
  console.log(`[CUSTOM LOGGER]`, log);
}
