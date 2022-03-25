import kartData from '../store/data/kart.json';

export default function kartName(id) {
  if (id.length !== 0 && id !== undefined) {
    const data = kartData.filter((item) => item.id === id);
    return data[0]?.name;
  }
  return null;
}
