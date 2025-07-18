// Nuevos lugares de origen y sus precios
const origenes = ["Rosario", "Mendoza", "Neuquén", "Tucumán"];

const preciosOrigen = {
  "Rosario": 25000,
  "Mendoza": 40000,
  "Neuquén": 35000,
  "Tucumán": 30000
};

function elegirOrigen() {
  let mensaje = "Lugares de origen disponibles:\n";
  for (let i = 0; i < origenes.length; i++) {
    mensaje += `${i + 1}. ${origenes[i]} – $${preciosOrigen[origenes[i]]}\n`;
  }

  let opcion = prompt(mensaje + "\nIngrese el número del origen:");

  let indice = parseInt(opcion) - 1;

  if (indice >= 0 && indice < origenes.length) {
    let origenElegido = origenes[indice];
    console.log("Origen elegido:", origenElegido);
    return origenElegido;
  } else {
    alert("Opción inválida. Intenta nuevamente.");
    return elegirOrigen();
  }
}

// Array con destinos disponibles
const destinos = ["Buenos Aires", "Córdoba", "Bariloche", "Salta"];

// Precios base de pasaje por destino (ida y vuelta)
const preciosBase = {
  "Buenos Aires": 50000,
  "Córdoba": 60000,
  "Bariloche": 90000,
  "Salta": 75000
};

// Costo por día de hotel (fijo)
const precioHotelPorDia = 15000;

function elegirDestino() {
  let mensaje = "Destinos disponibles:\n";
  for (let i = 0; i < destinos.length; i++) {
    mensaje += `${i + 1}. ${destinos[i]} – $${preciosBase[destinos[i]]}\n`;
  }

  let opcion = prompt(mensaje + "\nIngrese el número del destino:");
  let indice = parseInt(opcion) - 1;

  if (indice >= 0 && indice < destinos.length) {
    let destinoElegido = destinos[indice];
    console.log("Destino elegido:", destinoElegido);
    return destinoElegido;
  } else {
    alert("Opción inválida. Intenta nuevamente.");
    return elegirDestino();
  }
}

function pedirCantidadDias() {
  let dias = prompt("¿Cuántos días planeás quedarte en el destino?");

  // Convertir a número
  dias = parseInt(dias);

  // Validar
  if (!isNaN(dias) && dias > 0) {
    console.log("Cantidad de días:", dias);
    return dias;
  } else {
    alert("Por favor ingresá un número válido mayor a 0.");
    return pedirCantidadDias(); // vuelve a pedirlo
  }
}

function preguntarHotel() {
  let deseaHotel = confirm("¿Querés incluir hotel en tu viaje?\n(Costo: $15.000 por día)");

  console.log("Incluye hotel:", deseaHotel);
  return deseaHotel;
}

function calcularCostoTotal(origen, destino, dias, incluyeHotel) {
  let costoOrigen = preciosOrigen[origen];
  let costoDestino = preciosBase[destino];
  let costoHotel = incluyeHotel ? precioHotelPorDia * dias : 0;
  let total = costoOrigen + costoDestino + costoHotel;

  console.log("Costo del origen:", costoOrigen);
  console.log("Costo del destino:", costoDestino);
  console.log("Costo del hotel:", costoHotel);
  console.log("Total del viaje:", total);

  return {
    total,
    costoOrigen,
    costoDestino,
    costoHotel
  };
}

function iniciarSimulador() {
  alert("¡Bienvenido al Simulador de Viajes!");

  const origen = elegirOrigen();
  const destino = elegirDestino();
  const dias = pedirCantidadDias();
  const incluyeHotel = preguntarHotel();
  const resultado = calcularCostoTotal(origen, destino, dias, incluyeHotel);

  let resumen = `Resumen del viaje:\n\n`;
  resumen += `Origen: ${origen} – $${resultado.costoOrigen}\n`;
  resumen += `Destino: ${destino} – $${resultado.costoDestino}\n`;
  resumen += `Días: ${dias}\n`;
  resumen += `Incluye hotel: ${incluyeHotel ? "Sí" : "No"}\n`;
  if (incluyeHotel) {
    resumen += `Costo hotel: $${resultado.costoHotel}\n`;
  }
  resumen += `\n💰 Total estimado: $${resultado.total}`;

  alert(resumen);
  console.log("----- RESUMEN -----");
  console.log(resumen);

  alert("¡Gracias por usar el simulador de viajes! 🌍");
}

// Ejecutar el simulador automáticamente al cargar
iniciarSimulador();