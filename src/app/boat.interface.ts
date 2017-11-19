/*
data example
{
  "id": 1,
  "name": "Boat One",
  "type": "Sail",
  "photo": "http://via.placeholder.com/350x150/51A143",
  "length": 7.6,
  "work_description": "Needs a new anchor",
  "arrival_date": "2017-04-23T10:00:00Z",
  "delivery_date": "2017-04-27T10:00:00Z",
  "status": "under repair"
}*/

export interface Boat {
  id: number;
  name: string;
  type: string;
  photo: string;
  length: number;
  work_description: string;
  arrival_date: string;
  delivery_date: string;
  status: string;
}
