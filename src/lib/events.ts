import fs from 'fs';
import path from 'path';

export interface EventItem {
  id: string;
  date: string;
  time: string;
  title: string;
  location: string;
  people: string[];
  event: string;
  object: string;
  category: string;
  tags: string[];
  source_file: string;
}

const resourcePath = path.join(process.cwd(), 'resource');

export function getAllEvents(): EventItem[] {
  const filePath = path.join(resourcePath, 'events.json');
  if (!fs.existsSync(filePath)) return [];
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export function getEventContent(fileName: string): string {
  const filePath = path.join(resourcePath, fileName);
  if (!fs.existsSync(filePath)) return '';
  return fs.readFileSync(filePath, 'utf8');
}
