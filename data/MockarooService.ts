import fetch from "node-fetch";
import dotenv from "dotenv";

export class MockarooService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = process.env.MOCKAROO_API_KEY!;
  }

  async fetchMockarooData(tableName: string, count: number) {
    const response = await fetch(
      ` https://api.mockaroo.com/api/generate.json?key=${this.apiKey}&schema=Organization&count=1`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  }
}
