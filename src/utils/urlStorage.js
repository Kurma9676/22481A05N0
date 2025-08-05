const STORAGE_KEY = "shortened_urls";

export function getUrls() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

export function saveUrl(shortcode, data) {
  const urls = getUrls();
  urls[shortcode] = data;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(urls));
}

export function getUrl(shortcode) {
  const urls = getUrls();
  return urls[shortcode];
}
