   function Moto(marca, modelo) {
      this.marca = marca
      this.modelo = modelo
  }
  Moto.prototype.acelerar = function() {
    console.log('La moto ' + this.marca + ' ' + this.modelo + ' está acelerando.')
  }
  function crearObjeto(clase, ...args) {
    const nuevoObjeto = Object.create({}) //Crear un nuevo objeto vacío.
    Object.setPrototypeOf(nuevoObjeto, Moto.prototype) //Establecer el prototipo del nuevo objeto al prototipo de la clase Moto.
    clase.apply(nuevoObjeto, args) // Llamar al constructor de la clase Moto con el nuevo objeto como contexto (this).
    return nuevoObjeto //
  }
  
  var moto1 = crearObjeto(Moto, 'Honda', 'CBR')
  moto1.acelerar() // Salida: "La moto Honda CBR está acelerando."
  