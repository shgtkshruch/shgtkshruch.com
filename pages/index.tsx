import { useState } from "react";

import type { Work, History, Skill, Contact } from "../types/api";

import Head from "next/head";
import Container from "../components/layout/Container";
import Intro from "../components/intro";
import Works from "../components/work";
import Histories from "../components/history";
import Skills from "../components/skill";
import Contacts from "../components/contact";
import Footer from "../components/footer";
import GlobalStyle from "../components/common/GlobalStyle";
import ColorTheme from "../components/common/ColorTheme";
import GitHubCorner from "../components/common/GitHub-Corner";

type HomeProps = {
  works: Work[];
  history: History[];
  skills: Skill[];
  contacts: Contact[];
};
const Home = ({ works, history, skills, contacts }: HomeProps) => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex(index + 1);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Shigetaka Shirouchi</title>
      </Head>
      <Container>
        <main>
          <Intro next={next} />
          {index > 0 && <Works next={next} items={works} />}
          {index > 1 && <Histories next={next} items={history} />}
          {index > 2 && <Skills next={next} items={skills} />}
          {index > 3 && <Contacts items={contacts} />}
        </main>
        <Footer />
      </Container>
      <ColorTheme />
      <GitHubCorner />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  return {
    props: {
      works: await fetchData("works"),
      history: await fetchData("history"),
      skills: await fetchData("skills"),
      contacts: await fetchData("contacts"),
    },
  };
};

async function fetchData(path: keyof HomeProps) {
  const endpoint = "https://shgtkshruch.microcms.io";
  const limit = "limit=30";
  const activeOnly = "filters=active[equals]true";
  const host = `${endpoint}/api/v1/${path}?${limit}&${activeOnly}`;
  const res = await fetch(host, {
    headers: {
      "X-API-KEY": process.env.MICRO_CMS_API_KEY,
    },
  });
  const response = await res.json();
  const items: Pick<HomeProps, keyof HomeProps> = response.contents;
  return items;
}
