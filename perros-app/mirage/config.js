export default function() {
  this.namespace = '/api';
  this.get('/perros', function() {
    return {
      data: [{
        type: "perros",
        id: "perro1",
        attributes: {
          name: "Trosqui",
          city: "Medellín",
          type: "chihuahua",
          image: "https://i.ytimg.com/vi/WmY3iUURXlY/maxresdefault.jpg"
        }
      }, {
        type: "perros",
        id: "perro2",
        attributes: {
          name: "pachanga",
          city: "Bogota",
          type: "labrador",
          image: "http://www.expertoanimal.com/es/images/3/7/7/img_nombres_para_perros_labradores_20773_paso_4_600.jpg"
        }
      }, {
        type: "perros",
        id: "pero3",
        attributes: {
          name: "lolita",
          city: "Cali",
          type: "salchica",
          image: "https://s-media-cache-ak0.pinimg.com/236x/16/a7/66/16a7663e990009d078dce8924faea269.jpg"
        }
      }]
    };
  });
}