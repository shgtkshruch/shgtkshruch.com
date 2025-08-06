import { HomeClient } from "./HomeClient";

export default async function HomePage() {
  const works = await fetchData("works");
  const history = await fetchData("history");
  const skills = await fetchData("skills");
  const contacts = await fetchData("contacts");

  return <HomeClient works={works} history={history} skills={skills} contacts={contacts} />;
}

async function fetchData(path: string) {
  const endpoint = "https://shgtkshruch.microcms.io";
  const limit = "limit=30";
  const activeOnly = "filters=active[equals]true";
  const host = `${endpoint}/api/v1/${path}?${limit}&${activeOnly}`;
  const res = await fetch(host, {
    headers: {
      "X-API-KEY": process.env.MICRO_CMS_API_KEY!,
    },
  });
  const response = await res.json();
  return response.contents;
}
