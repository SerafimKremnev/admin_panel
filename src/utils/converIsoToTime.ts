import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

export function convertToTime(durationString: string) {
  const durationInMilliseconds = dayjs.duration(durationString).asMilliseconds();
  const time: string = new Date(durationInMilliseconds).toISOString().substr(11, 8);
  return time;
}
