export const API = "https://techcrunch.com/wp-json/wp/v2/posts";

export function getDetailedContent(id, list) {
  return list.filter((item) => item.id.toString() === id);
}

export function getMoreContent(id, list) {
  return list.filter((item) => item.id.toString() !== id);
}
