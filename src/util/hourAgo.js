export default function hourAgo(time) {
  const currentTime = new Date();
  const gameTime = new Date(time);
  const diff = currentTime.getTime() - gameTime.getTime();

  const seconds = diff / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;

  if (seconds < 60) return `${Math.floor(seconds)}초 전`;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;
  if (days < 7) return `${Math.floor(days)}일 전`;
  return `${Math.floor(weeks)}주 전`;
}
