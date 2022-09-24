function evento() {
  const nombre = document.getElementsByName("fname");
  const gmail = document.getElementsByName("gmail");
  const telefono = document.getElementsByName("telefono");

  alert(
    "Nombre: " +
      nombre[0].value +
      "\nGmail: " +
      gmail[0].value +
      "\nTelefono: " +
      telefono[0].value
  );
}
