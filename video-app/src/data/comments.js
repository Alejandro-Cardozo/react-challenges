function toLocalDate() {
  const event = new Date(Date.UTC(2022, Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 28), Math.ceil(Math.random() * 12), 0, 0));
  const options = { year: 'numeric', month: 'long', day: 'numeric' }; 
  return event.toLocaleDateString('en-US', options);
}

const comments = [
  {
    id: 0,
    videoId: 'v1',
    userName: 'Diego',
    comment: 'Anda la osa, que pasada de video tío!',
    date: toLocalDate(),
  },
  {
    id: 1,
    videoId: 'v1',
    userName: 'Marcos',
    comment: 'Interesante...',
    date: toLocalDate(),
  },
  {
    id: 2,
    videoId: 'v2',
    userName: 'Sergio',
    comment: 'Super útil. Gracias.',
    date: toLocalDate(),
  },
  {
    id: 3,
    videoId: 'v3',
    userName: 'Bartolo',
    comment: 'Good stuff',
    date: toLocalDate(),
  },
  {
    id: 4,
    videoId: 'v3',
    userName: 'Tristán',
    comment: 'Muy completo y detallado. Gracias.',
    date: toLocalDate(),
  },
  {
    id: 5,
    videoId: 'v4',
    userName: 'Selena',
    comment: 'Hola, como andan?',
    date: toLocalDate(),
  },
  {
    id: 6,
    videoId: 'v4',
    userName: 'Vado',
    comment: 'Buon video mio amico, grazie!',
    date: toLocalDate(),
  },
]

export default comments;