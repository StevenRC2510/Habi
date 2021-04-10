import { LivingPlace } from 'shared/entities';
import { v4 as uuidv4 } from 'uuid';

export const data: LivingPlace[] = [
  {
    _id: uuidv4(),
    owner: { _id: uuidv4(), fullName: 'Owner 1', phone: '123123', email: 'Owner1@gmail.com' },
    apartments: [
      { _id: uuidv4(), area: '88', rooms: '2', price: 2000, address: 'avn', city: 'Cali', location: 'sur', date: '2021-03-11' },
      { _id: uuidv4(), area: '88', rooms: '4', price: 2000, address: 'avn', city: 'Cali', location: 'sur', date: '2021-04-12' },
    ],
  },
  {
    _id: uuidv4(),
    owner: { _id: uuidv4(), fullName: 'Owner 2', phone: '123123', email: 'Owner2@gmail.com' },
    apartments: [
      { _id: uuidv4(), area: '88', rooms: '3', price: 2000, address: 'avn', city: 'Cali', location: 'north', date: '2021-03-13' },
      { _id: uuidv4(), area: '88', rooms: '6', price: 2000, address: 'avn', city: 'Medellin', location: 'sur', date: '2021-03-14' },
    ],
  },
  {
    _id: uuidv4(),
    owner: { _id: uuidv4(), fullName: 'Owner 3', phone: '123123', email: 'Owner3@gmail.com' },
    apartments: [
      { _id: uuidv4(), area: '88', rooms: '1', price: 2000, address: 'avn', city: 'Pasto', location: 'west', date: '2021-03-15' },
      { _id: uuidv4(), area: '88', rooms: '9', price: 2000, address: 'avn', city: 'Bogota', location: 'east', date: '2021-03-16' },
    ],
  },
  {
    _id: uuidv4(),
    owner: { _id: uuidv4(), fullName: 'Owner 4', phone: '123123', email: 'Owner3@gmail.com' },
    apartments: [
      { _id: uuidv4(), area: '88', rooms: '4', price: 2000, address: 'avn', city: 'Cartagena', location: 'west', date: '2021-03-17' },
      { _id: uuidv4(), area: '88', rooms: '4', price: 2000, address: 'avn', city: 'Pasto', location: 'north', date: '2021-03-17' },
    ],
  },
  {
    _id: uuidv4(),
    owner: { _id: uuidv4(), fullName: 'Owner 5', phone: '123123', email: 'Owner4@gmail.com' },
    apartments: [
      { _id: uuidv4(), area: '88', rooms: '4', price: 2000, address: 'avn', city: 'Cali', location: 'east', date: '2021-03-18' },
      { _id: uuidv4(), area: '88', rooms: '10', price: 2000, address: 'avn', city: 'Huila', location: 'north', date: '2021-03-19' },
    ],
  },
  {
    _id: uuidv4(),
    owner: { _id: uuidv4(), fullName: 'Owner 6', phone: '123123', email: 'Owner5@gmail.com' },
    apartments: [
      { _id: uuidv4(), area: '88', rooms: '4', price: 2000, address: 'avn', city: 'Cucuta', location: 'sur', date: '2021-04-16' },
      { _id: uuidv4(), area: '88', rooms: '20', price: 2000, address: 'avn', city: 'Bucaramanga', location: 'sur', date: '2021-04-16' },
    ],
  },
];
