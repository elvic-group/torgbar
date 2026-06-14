import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

await pb.collection("_superusers").authWithPassword("admin@torgbar.no", "torgbar2026");

// Delete existing bookings if any
try { await pb.collections.delete("bookings"); } catch {}

// Create with all fields
const collection = await pb.collections.create({
  name: "bookings",
  type: "base",
  fields: [
    { type: "text", name: "id", system: true, required: true, primaryKey: true, autogeneratePattern: "[a-z0-9]{15}", min: 15, max: 15, pattern: "^[a-z0-9]+$" },
    { type: "select", name: "package", required: true, options: { maxSelect: 1, values: ["Festival", "Bedrift", "Privat", "Bryggeri", "Event"] } },
    { type: "text", name: "name", required: true, min: 0, max: 255 },
    { type: "email", name: "email", required: true },
    { type: "text", name: "phone", required: false, min: 0, max: 30 },
    { type: "date", name: "date", required: true },
    { type: "text", name: "location", required: true, min: 0, max: 255 },
    { type: "number", name: "guests", required: false, min: 0 },
    { type: "text", name: "message", required: false, min: 0, max: 1000 },
    { type: "select", name: "status", required: true, options: { maxSelect: 1, values: ["Ny", "Bekreftet", "Fullfort", "Kansellert"] } },
  ],
});

console.log("Collection created:", JSON.stringify(collection, null, 2));
pb.authStore.clear();
