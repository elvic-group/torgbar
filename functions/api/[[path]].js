export async function onRequest(context) {
  const url = new URL(context.request.url);
  url.hostname = "187.124.42.2";
  url.port = "8090";
  return fetch(new Request(url.toString(), context.request));
}
