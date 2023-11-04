export default async function getChataracterisctics() {
  const response = await fetch('https://653032606c756603295e634b.mockapi.io/weatherItems');
  if (!response.ok) throw new Error('could not get characteristics');

  return response.json();
}
