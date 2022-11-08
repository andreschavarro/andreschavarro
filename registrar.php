<?php

$usuario = isset($_POST['txt_usuario']) ? $_POST['txt_usuario'] : '';
$nombre = isset($_POST['txt_nombre']) ? $_POST['txt_nombre'] : '';
$edad = isset($_POST['int_edad']) ? $_POST['int_edad'] : '';
$vivienda = isset($_POST['txt_vivienda']) ? $_POST['txt_vivienda'] : '';
$condicion = isset($_POST['txt_condicion']) ? $_POST['txt_condicion'] : '';

try {

    $conexion = new PDO("mysql:host=localhost;port=3306;dbname=prueba_db", "root", "");
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $pdo = $conexion->prepare('INSERT INTO usuarios(usuario, nombre, edad, vivienda, condicion) VALUES(?, ?, ?, ?, ?)');
    $pdo->bindParam(1, $usuario);
    $pdo->bindParam(2, $nombre);
    $pdo->bindParam(3, $edad);
    $pdo->bindParam(4, $vivienda);
    $pdo->bindParam(5, $condicion);
    $pdo->execute() or die(print($pdo->errorInfo()));

    echo json_encode('true');

} catch(PDOException $error) {
    echo $error->getMessage();
    die();
}