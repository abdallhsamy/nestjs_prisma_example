import * as dotenv from "dotenv";
import * as process from "process";

dotenv.config();
export default {
  app: {
    name: process.env.APP_NAME || "NestJS_StarterKit",
    baseUrl: process.env.BASE_URL || "http://localhost"
  }
};
