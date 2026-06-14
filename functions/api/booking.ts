interface Env {
  PB_URL?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const pbUrl = context.env.PB_URL || "http://187.124.42.2:8090";

  try {
    const body = await context.request.text();
    const response = await fetch(`${pbUrl}/api/collections/bookings/records`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });

    const data = await response.text();
    return new Response(data, {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
