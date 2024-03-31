export interface CalendarProps {
  data: CalendarEntry[];
}

export interface CalendarEntry {
  date: Date;
  memos: Memo[];
}

export interface Memo {
  timestamp: string;
  content: string;
}
