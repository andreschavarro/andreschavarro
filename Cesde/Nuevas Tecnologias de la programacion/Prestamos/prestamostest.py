
usuarios = ['andres','felipe','anacona']
bicicletas = ['gw','collima','scot']
prestamos = [1,2,3,4,5,6]


def registrar_usuario():
    nombre = input("Ingrese el nombre del usuario: ")
    numero_tarjeta = input("Ingrese el número de tarjeta del usuario: ")
    usuarios.append({"nombre": nombre, "numero_tarjeta": numero_tarjeta})


def tomar_bicicleta():
    numero_tarjeta = input("Ingrese el número de tarjeta del usuario: ")
    origen = input("Ingrese el origen de la bicicleta: ")
    destino = input("Ingrese el destino de la bicicleta: ")
    bicicletas.append({"origen": origen, "destino": destino})
    prestamos.append({"numero_tarjeta": numero_tarjeta, "origen": origen, "destino": destino})


def consultar_usuarios():
    print("Listado de usuarios:")
    for usuario in usuarios:
        print(f"Nombre: {usuario['nombre']}, Número de Tarjeta: {usuario['numero_tarjeta']}")


def consultar_prestamos():
    print("Listado de préstamos:")
    for prestamo in prestamos:
        print(f"Número de Tarjeta: {prestamo['numero_tarjeta']}, Origen: {prestamo['origen']}, Destino: {prestamo['destino']}")

while True:
    print("\nSistema de Préstamos de Bicicletas")
    print("1. Registrar Usuario")
    print("2. Tomar Bicicleta")
    print("3. Consultar Listado de Usuarios")
    print("4. Consultar Listado de Préstamos")
    print("5. Salir")
    
    opcion = input("Seleccione una opción: ")
    
    if opcion == "1":
        registrar_usuario()
    elif opcion == "2":
        tomar_bicicleta()
    elif opcion == "3":
        consultar_usuarios()
    elif opcion == "4":
        consultar_prestamos()
    elif opcion == "5":
        break
    else:
        print("Opción no válida. Por favor, seleccione una opción válida.")
