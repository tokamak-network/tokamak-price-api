import { createServer } from "graphql-yoga";
import schema from "./schema";
import "dotenv/config";

const PORT = process.env.PORT_NUMBER || 4000;

async function main() {
  try {
    const server = createServer({ schema });
    server.start().then((url) => {
      console.log(`🚀Tokamak-price-api running on port ${PORT}⭐️`);
    });
  } catch (e) {
    console.log("**Error happened to the server**");
    console.log(e);
  }
}

main();
