import { Props } from "@/app/search/page";

async function fetchResults(searchParams: Props["searchParams"]) {
  const username = process.env.OXYLABS_USERNAME;
  const password = process.env.OXYLABS_PASSWORD;
}

export default fetchResults;
