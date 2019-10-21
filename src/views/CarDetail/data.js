import uuid from 'uuid/v1';
export default
  {
    title: 'Car 1',
    description:
      `Información importante
    DOCUMENTACIÓN
    Necesaria
    A la hora de recoger el vehículo, necesitarás:

    Pasaporte o carnet de identidad
    Permiso de conducir
    Tarjeta de crédito
    El conductor principal deberá tener al menos 25 años para conducir este vehículo.

    DEPÓSITO DE SEGURIDAD
    US$ 360.00
    Al recoger el coche, el conductor principal necesitará su tarjeta de crédito (no de débito ni dinero en efectivo) y el PIN para que el personal del mostrador pueda hacer el bloqueo del depósito de seguridad (US$ 360.00).
    La empresa de alquiler de coches suele desbloquear el depósito a los 3-5 días de la finalización del alquiler.
    Tarjetas aceptadas
    American Express MasterCard Visa
    Importante:
    Esta compañía [no acepta] tarjetas de prepago, recargables ni virtuales, ni cualquier otro tipo de tarjeta que no tenga el estampado en relieve.

    FRANQUICIA POR DAÑOS
    US$ 860.00
    Si la carrocería del vehículo resulta dañada, estarás protegido por la Cobertura Parcial por Colisión. Esto significa que la cantidad máxima que podrías tener que pagar por reparaciones sería (US$ 860.00 ).

    La Cobertura Parcial por Colisión sólo será válida si se cumplen los términos del contrato de alquiler. Dicha cobertura no contempla otras partes del vehículo (como ventanas, ruedas, interiores, techo o bajos), tasas (como por remolque o por tiempo sin uso) ni objetos dentro del mismo (como sillas de niño, dispositivos GPS o efectos personales).

    POLÍTICA DE COMBUSTIBLE
    Lleno/Lleno
    Le entregarán el vehículo con el tanque de combustible lleno o parcialmente lleno. Deberá dejar un depósito para cubrir el coste del combustible. El personal de la oficina boqueará el importe correspondiente en su tarjeta de crédito. Deberá devolver el vehículo con la misma cantidad de combustible con que se lo entregaron.

    KILOMETRAJE
    Ilimitado
    Este alquiler incluye kilómetro ilimitado gratis.`,
    imageUrl: '/images/cars/kia_sportage_blanco_03.png',
    city:'Bogota',
    country:'Colombia',
    price:'366.855,89',
    calification: '4.7',
    createdAt: '25/06/2019',
    address:'carrera 40 # 20',
    email:'car@carino.com',
    phone:'3000001212',
    adiciones:[
	{id: uuid(),tx:'Theft Protection'},
	{id: uuid(),tx:'Air Conditioning'},
	{id: uuid(),tx:'Automatic gearbox'}
	]
  };
