import type { Work, History, Skill, Contact } from '../types/api';

const endpoint = 'https://shgtkshruch.microcms.io';
const apiKey = import.meta.env.MICRO_CMS_API_KEY;

interface MicroCMSResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}

async function fetchFromMicroCMS<T>(path: string): Promise<T[]> {
  const limit = 'limit=30';
  const activeOnly = 'filters=active[equals]true';
  const url = `${endpoint}/api/v1/${path}?${limit}&${activeOnly}`;

  if (!apiKey) {
    throw new Error('MICRO_CMS_API_KEY environment variable is required');
  }

  const res = await fetch(url, {
    headers: {
      'X-API-KEY': apiKey,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch from microCMS: ${res.statusText}`);
  }

  const response: MicroCMSResponse<T> = await res.json();
  return response.contents;
}

export const getWorks = () => fetchFromMicroCMS<Work>('works');
export const getHistory = () => fetchFromMicroCMS<History>('history');
export const getSkills = () => fetchFromMicroCMS<Skill>('skills');
export const getContacts = () => fetchFromMicroCMS<Contact>('contacts');
