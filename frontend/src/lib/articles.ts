import { getCollection } from "astro:content";
import { selectPublic } from "./article-contract.ts";
export async function publicArticles(section?: string) {
  return selectPublic(await getCollection("articles"), section);
}
