export interface IUser {
  telegramUser:     User;
  timeSpentOnTask:  string;
  timeTrackedToday: string;
  timersToday: TimersToday[];
  clickupUser:      User;
}


export interface User {
  id:       number;
  username: string;
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
  orderIndex: number;
}

export interface TimersToday {
  end:         Date | null;
  task:        Task | null;
  id:          string;
  start:       Date;
  duration:    string;
  completed:   boolean;
  description: string;
}