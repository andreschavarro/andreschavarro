empleados = {
    1: {
        "id": 1,
        "nombres": "Pipe",
        "apellidos": "Anacona",
        "cargo": "Gerente",
        "area": "Administración",
        "salario": 5000000,
        "contraseña": "123"
    },
    2: {
        "id": 2,
        "nombres": "Xiomara",
        "apellidos": "valencia",
        "cargo": "Analista",
        "area": "Finanzas",
        "salario": 2000000,
        "contraseña": "456"
    },
    3: {
        "id": 3,
        "nombres": "Juan",
        "apellidos": "Chavez",
        "cargo": "Programador",
        "area": "Tecnología",
        "salario": 4500000,
        "contraseña": "789"
    },
    4: {
        "id": 4,
        "nombres": "Usuario RH",
        "apellidos": "RH",
        "cargo": "Analista de recursos humanos",
        "area": "Recursos Humanos",
        "salario": 2100000,  
        "contraseña": "101112"
    },
   
}

""" 
 def agregar_empleado(empleados):
     id_empleado = int(input('Ingrese su id: '))
     nombres = input('Ingrese su nombre: ')
     apellidos = input('ingrese sus apellidos: ')
     cargo = input('ingrese su cargo: ')
     area = input('Ingrese su area: ')
     salario = input('Ingrese su salario: ')
     contraseña = input('Ingrese su contraseña: ')

     empleado = {
         "id": id_empleado,
         "nombres": nombres,
         "apellidos": apellidos,
         "cargo": cargo,
         "area": area,
         "salario": salario
     }
   
     empleados[id_empleado] = empleado
     print("Perfil agregado con exito")
     ultima_clave = list(empleados.keys())[-1]
     ultimo_empleado = empleados[ultima_clave]
     print(ultimo_empleado)
     login()
"""

def imprimir_colilla_todos(empleados):
    print("-- Colilla de pago de todos los empleados --")
    for id_empleado, empleado in empleados.items():
        print(f"ID: {empleado['id']}")
        print(f"Nombre: {empleado['nombres']} {empleado['apellidos']}")
        print(f"Cargo: {empleado['cargo']}")
        print('Sin deducciones')
        if empleado['salario'] < 2320000:
            salario_final = empleado['salario'] + 140000
            print(f'Con incentivos de transporte de $140,000')
        else:
            salario_final = empleado['salario']
            print('Sin incentivos')
        print(f"Salario final: ${salario_final}\n")


def imprimir_colilla_individual(empleados, id_empleado):
    if id_empleado in empleados:
        empleado = empleados[id_empleado]
        salario_original = int(empleado['salario'])
        if salario_original < 2320000:
            salario_final = salario_original + 140000
            incentivos = 'Con incentivos de transporte de $140,000'
        else:
            salario_final = salario_original + 140000
            incentivos = 'Sin incentivos'
        print("-- Colilla de pago del empleado --")
        print(f"ID: {empleado['id']}")
        print(f"Nombre: {empleado['nombres']} {empleado['apellidos']}")
        print(f"Cargo: {empleado['cargo']}")
        print('Sin deducciones')
        print(incentivos)
        print(f"Salario final: ${salario_final} ")
    else:
        print("Empleado no encontrado.")

def menuPrincipal(empleados, id_logeado):
    print("¿Quieres imprimir tu colilla de pago(1), imprimir colilla de pago de todos los empleados(2), imprimir colilla de un empleado por ID(3) o simplemente saber tu salario neto(4)?: ")
    opcion = int(input(''))

    if opcion == 1:
        if id_logeado in empleados:
            empleado = empleados[id_logeado]
            salario_original = int(empleado['salario'])
            if salario_original < 2320000:
                salario_final = salario_original + 140000
                incentivos = 'Con incentivos de transporte de $140,000'
            else:
                salario_final = salario_original + 140000
                incentivos = 'Sin incentivos'
            print("-- Esta es tu colilla de pago --")
            print(f"ID: {empleado['id']}")
            print(f"Nombre: {empleado['nombres']} {empleado['apellidos']}")
            print(f"Cargo: {empleado['cargo']}")
            print('Sin deducciones')
            print(incentivos)
            print(f"Salario final: ${salario_final} ")
        else:
            print("Empleado no encontrado.")
    elif opcion == 2:
        if id_logeado in empleados and empleados[id_logeado]['cargo'] == 'Analista de recursos humanos' and empleados[id_logeado]['contraseña'] == '101112':
            imprimir_colilla_todos(empleados)
        else:
            print("Acceso no autorizado para imprimir colilla de pago de todos los empleados.")
    elif opcion == 3:
        if id_logeado in empleados and empleados[id_logeado]['cargo'] == 'Analista de recursos humanos' and empleados[id_logeado]['contraseña'] == '101112':
            id_empleado_a_imprimir = int(input("Ingrese el ID del empleado que desea imprimir: "))
            imprimir_colilla_individual(empleados, id_empleado_a_imprimir)
        else:
            print("Acceso no autorizado para imprimir colilla de pago de un empleado por ID.")
    elif opcion == 4:
        if id_logeado in empleados:
            empleado = empleados[id_logeado]
            salario_original = int(empleado['salario'])
            if salario_original < 2320000:
                salario_final = salario_original + 140000
            else:
                salario_final = salario_original
            print("Este es tu salario neto:")
            print(f"ID: {empleado['id']}")
            print(f"Nombre: {empleado['nombres']}")
            print(f"Salario: ${salario_final}")
        else:
            print("Empleado no encontrado.")
    else:
        print("Opción no válida.")



def login():
    print("Bienvenido a PAGUI - ingresa con tu ID y contraseña-")
    id = int(input('ID: '))
    contraseña = input('Contraseña: ')

    if id in empleados:
        empleado = empleados[id]
        if contraseña == empleado.get("contraseña"):
            print("Inicio de sesión exitoso.")
            menuPrincipal(empleados, id) 
            return True
        else:
            print("Contraseña incorrecta.")
            return False
    else:
        print("ID de empleado no encontrado.")
        return False
""" 
 def formularioInicial():
     nuevoViejo = input('¿Eres un empleado nuevo y quieres registrarte?:  ')
     if nuevoViejo == 'si':
         agregar_empleado(empleados)
     elif nuevoViejo == 'no':
         login()

 formularioInicial()
 
""" 
login()