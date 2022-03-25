import kartData from '../store/data/kart.json';

export default function kartName(id) {
  const data = kartData.filter((item) => item.id === id);
  return data[0].name;
}
