/*
data example
{
  "id": 1,
  "name": "Worker One",
  "phone": "11111111",
  "photo": "http://via.placeholder.com/150x150/DE8142",
  "boatIds": [
  1
]
}*/

export interface Worker {
  id: number;
  name: string;
  phone: string;
  photo: string;
  boatIds: number[];
}
