interface Common {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Work extends Common {
  title: string;
  body: string;
  age: string;
  url: string;
  image: { url: string };
}

export interface History extends Common {
  age: string;
  title: string;
  body: string;
  url: string;
}

export interface Skill extends Common {
  title: string;
  body: string;
}

export interface Contact extends Common {
  title: string;
  url: string;
  color: string;
}
