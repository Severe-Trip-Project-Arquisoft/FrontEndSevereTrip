import uuid from 'uuid/v1';
export default
{
  title: 'Hilton',
  description:
      'Hilton Garden Inn Bogota Airport es una magnífica elección para los viajeros que visiten Bogotá, ya que ofrece un ambiente con encanto, además de numerosos servicios diseñados para mejorar tu estancia. Como está cerca de la mayoría de los puntos de referencia de Bogotá, como BotaniK (0,9 km) y Catedral de Fontibon (2,9 km), Hilton Garden Inn Bogota Airport es un fantástico destino para turistas.',
  imageUrl: '/images/hotels/hotel1.png',
  city:'Bogota',
  country:'Colombia',
  price:'100.000',
  calification: '4.5',
  createdAt: '31/03/2019',
  address:'carrera 30 # 45',
  email:'hotel@hotel.com',
  phone:'321123456',
  adiciones:[
    {id: uuid(),tx:'Free parking'},
    {id: uuid(),tx:'Restaurant'},
    {id: uuid(),tx:'Laundry service'}
  ]
};
