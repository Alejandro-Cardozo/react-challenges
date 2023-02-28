// Icons
import {
  Sun,
  Cloud,
  CloudSun,
  CloudRain,
  CloudMoon,
  Moon,
} from 'phosphor-react';

export const coordinates = {
  posadas: { latitude: -27.37, longitude: -55.9, details: 'Posadas, Misiones' },
  corrientes: {
    latitude: -27.47,
    longitude: -58.83,
    details: 'Corrientes, Corrientes',
  },
  resistencia: {
    latitude: -27.46,
    longitude: -58.98,
    details: 'Resistencia, Chaco',
  },
  formosa: { latitude: -26.18, longitude: -58.17, details: 'Formosa, Formosa' },
  parana: {
    latitude: -31.73,
    longitude: -60.53,
    details: 'Paraná, Entre Ríos',
  },
  rosario: {
    latitude: -32.95,
    longitude: -60.64,
    details: 'Rosario, Santa Fé',
  },
};

export const details = {
  sunny: {
    tag: 'Soleado',
    Icon: Sun,
    color: '#fce94f',
    weight: 'bold',
  },
  cloudy: {
    tag: 'Nublado',
    Icon: Cloud,
    color: '#eeeeec',
    weight: 'bold',
  },
  cloudyDay: {
    tag: 'Algo Nublado',
    Icon: CloudSun,
    color: '#eeeeec',
    weight: 'duotone',
  },
  rainy: {
    tag: 'Lluvioso',
    Icon: CloudRain,
    color: '#eeeeec',
    weight: 'bold',
  },
  cloudyNight: {
    tag: 'Algo Nublado',
    Icon: CloudMoon,
    color: '#eeeeec',
    weight: 'duotone',
  },
  night: {
    tag: 'Templado',
    Icon: Moon,
    color: '#eeeeec',
    weight: 'bold',
  },
  none: {
    tag: '',
    Icon: Sun,
    color: '#eeeeec00',
    weight: 'bold',

  }
};
