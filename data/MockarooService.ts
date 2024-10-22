import https from "https";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export class MockarooService {
  private apiKey: string;

  constructor() {
    this.apiKey = process.env.MOCKAROO_API_KEY!;
    if (!this.apiKey) {
      throw new Error("MOCKAROO_API_KEY environment variable is not set");
    }
  }

  async fetchMockarooData(tableName: string, count: number): Promise<any[]> {
    const url = `https://api.mockaroo.com/api/generate.json?key=${this.apiKey}&schema=${tableName}&count=${count}`;
    console.log(url);

    return new Promise((resolve, reject) => {
      https
        .get(url, (res) => {
          let data = "";

          // A chunk of data has been received.
          res.on("data", (chunk) => {
            data += chunk;
          });

          // The whole response has been received.
          res.on("end", () => {
            if (res.statusCode === 200) {
              try {
                const jsonData = JSON.parse(data);
                resolve(jsonData);
              } catch (error) {
                reject(new Error("Failed to parse JSON response"));
              }
            } else {
              reject(
                new Error(
                  `Failed to fetch data: ${res.statusCode} ${res.statusMessage}`
                )
              );
            }
          });
        })
        .on("error", (error) => {
          reject(new Error(`Request failed: ${error.message}`));
        });
    });
  }
}
