import dotenv from "dotenv";
dotenv.config();
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const url = "https://localhost:7141/api/SuperHero/";
const request = {
  method: "GET",
  headers: {
    Accept: "application.json",
    "Content-Type": "application/json",
  },
};
async function callServer(url, request) {
  try {
    const promise = await fetch(url, request);
    const data = await promise.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

callServer(url, request);
