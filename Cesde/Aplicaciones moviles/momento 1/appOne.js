const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(bodyParser.json());

// Datos de ejemplo de usuarios y propiedades
const users = [
  { username: 'admin', fullname: 'Administrador', password: 'admin123', role: 1 },
  { username: 'usuario1', fullname: 'Usuario 1', password: 'user123', role: 2 },
];

const properties = [
  { idProperty: 1, addressProperty: 'Calle 123', valueProperty: 100000 },
  { idProperty: 2, addressProperty: 'Avenida XYZ', valueProperty: 150000 },
];

// Middleware para verificar la autenticación del usuario
function authenticateUser(req, res, next) {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).send('Usuario o contraseña incorrectos');
  }

  req.user = user;
  next();
}

// Middleware para verificar el rol de usuario
function checkUserRole(role) {
  return (req, res, next) => {
    if (req.user.role === role) {
      next();
    } else {
      res.status(403).send('Acceso denegado');
    }
  };
}

// Ruta GET para la página de inicio
app.get('/', (req, res) => {
  res.send();
});

// Rutas GET para /customers y /controlpanel
app.get('/customers', authenticateUser, checkUserRole(2), (req, res) => {
  res.send('Página de clientes');
});

app.get('/controlpanel', authenticateUser, checkUserRole(1), (req, res) => {
  res.send('Panel de control');
});

// Ruta GET para /quienessomos
app.get('/quienessomos', (req, res) => {
  res.send('Estás en la página "Quiénes somos"');
});

// Ruta POST para agregar una propiedad
app.post('/property', (req, res) => {
  const { idProperty, addressProperty, valueProperty } = req.body;

  if (properties.find((p) => p.idProperty === idProperty)) {
    return res.status(400).send('La propiedad con este ID ya existe');
  }

  properties.push({ idProperty, addressProperty, valueProperty });
  res.status(201).send('Propiedad agregada correctamente');
});

// Ruta PUT para /
app.put('/', (req, res) => {
  res.send('Has ingresado a la ruta PUT');
});

// Ruta DELETE para /student
app.delete('/student', (req, res) => {
  res.send('Has ingresado a la ruta DELETE para estudiantes');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express en ejecución en http://localhost:${port}`);
});
