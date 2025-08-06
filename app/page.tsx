import type { Contact, History, Skill, Work } from "@/types/api";
import { HomeClient } from "./HomeClient";

export default async function HomePage() {
  const works: Work[] = await fetchData("works");
  const history: History[] = await fetchData("history");
  const skills: Skill[] = await fetchData("skills");
  const contacts: Contact[] = await fetchData("contacts");

  return (
    <HomeClient
      works={works}
      history={history}
      skills={skills}
      contacts={contacts}
    />
  );
}

async function fetchData(path: string) {
  const endpoint = "https://shgtkshruch.microcms.io";
  const limit = "limit=30";
  const activeOnly = "filters=active[equals]true";
  const host = `${endpoint}/api/v1/${path}?${limit}&${activeOnly}`;
  const apiKey = process.env.MICRO_CMS_API_KEY;
  if (!apiKey) {
    throw new Error("MICRO_CMS_API_KEY environment variable is required");
  }

  const res = await fetch(host, {
    headers: {
      "X-API-KEY": apiKey,
    },
  });
  const response = await res.json();
  return response.contents;
}
