import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const sheets = google.sheets("v4");
    res.status(200).json({ status: "Google Sheets ready!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
