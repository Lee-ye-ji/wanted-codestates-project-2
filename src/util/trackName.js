import trackData from '../store/data/track.json';

export default function trackName(id) {
  const data = trackData.filter((item) => item.id === id);

  return data[0].name;
}
