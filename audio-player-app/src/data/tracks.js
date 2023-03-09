// audio files
import beautiful from './src_data_a_beautiful_day.mp3'
import world from './We_Are_The_World.mp3'
import top from './src_data_dbang-world.mp3'
import cinematic from './src_data_cinematic-time-lapse-115672.mp3'
import forest from './src_data_forest-lullaby-110624.mp3'
import podcast from './src_data_the-podcast-intro-111863.mp3'

// audio thumbnails
import lexin from './lexin.jpeg'
import dbanj from './dbanj.png'
import jackson from './jackson.jpeg'
import trinix from './trinix.jpeg'

export const tracks = [
  {
    id: 'song_001',
    title: "It's a beautiful day",
    src: beautiful,
    author: 'Trinix feat Rushawn',
    thumbnail: trinix
  },
  {
    id: 'song_002',
    title: 'We Are The World',
    src: world,
    author: 'Michael Jackson',
    thumbnail: jackson
  },
  {
    id: 'song_003',
    title: 'Top Of The World',
    src: top,
    author: "D'banj",
    thumbnail: dbanj
  },
  {
    id: 'song_004',
    title: 'Cinematic Time Lapse',
    src: cinematic,
    author: 'Lexin Music',
    thumbnail: lexin
  },
  {
    id: 'song_005',
    title: 'Forest Lullaby',
    src: forest,
    author: 'Lesfm'
  },
  {
    id: 'song_006',
    title: 'The Podcast Intro',
    src: podcast,
    author: 'Music Unlimited'
  }
]
