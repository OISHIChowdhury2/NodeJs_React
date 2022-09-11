import app from "./app";
import { AppDataSource } from "./db";
async function main() {
  try {
    await AppDataSource.initialize();
    app.listen(PORT);
    console.log("Server on port", PORT);
  } catch (error) {
    console.error(error);
  }
}
main();
 const PORT = process.env.PORT || 3000;