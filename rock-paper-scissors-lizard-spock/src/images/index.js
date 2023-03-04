import rockImg from './rock1.avif';
import paperImg from './paper1.avif';
import scissorsImg from './scissors1.avif';
import lizardImg from './lizard1.avif';
import spockImg from './spock1.avif';
import rockImgFallback from './rock1.webp';
import paperImgFallback from './paper1.webp';
import scissorsImgFallback from './scissors1.webp';
import lizardImgFallback from './lizard1.webp';
import spockImgFallback from './spock1.webp';

export const images = [
  {id: 'img1', image: rockImg, fallbackImage: rockImgFallback, title: 'rock'},
  {id: 'img2', image: paperImg, fallbackImage: paperImgFallback, title: 'paper'},
  {id: 'img3', image: scissorsImg, fallbackImage: scissorsImgFallback, title: 'scissors'},
  {id: 'img4', image: lizardImg, fallbackImage: lizardImgFallback, title: 'lizard'},
  {id: 'img5', image: spockImg, fallbackImage: spockImgFallback, title: 'spock'},
]