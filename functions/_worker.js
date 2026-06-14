export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Proxy /api/* to PocketBase
    if (url.pathname.startsWith("/api/")) {
      url.hostname = "187.124.42.2";
      url.port = "8090";
      return fetch(new Request(url.toString(), request));
    }
    // Everything else: serve static from Pages
    return env.ASSETS.fetch(request);
  }
}
