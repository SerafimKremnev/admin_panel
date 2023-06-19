export interface ITimers {
  telegramUser:     User;
  timer:            Timer;
  timeSpentOnTask:  string;
  timeTrackedToday: string;
  clickupUser:      User;
}

export interface User {
  id:       number;
  username: string;
}

export interface Timer {
  end:         Date;
  id:          string;
  start:       Date;
  duration:    string;
  completed:   boolean;
  description: string;
  task:        Task;
}

export interface Task {
  status:         Status;
  location:       Location;
  pointsEstimate: null;
  timeSpent:      string;
  id:             string;
  name:           string;
  url:            string;
  timeEstimate:   null | string;
}

export interface Location {
  list:   Folder;
  folder: Folder;
  space:  Folder;
}

export interface Folder {
  id:   number;
  name: null | string;
}

export interface Status {
  status:     string;
  color:      string;
  type:       Type;
  orderIndex: number;
}

export enum Type {
  Custom = "custom",
  Done = "done",
  Open = "open",
}