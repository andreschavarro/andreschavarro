<?php

$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
$correo = isset($_POST['correo']) ? $_POST['correo'] : '';
$telefono = isset($_POST['telefono']) ? $_POST['telefono'] : '';
$jornada = isset($_POST['jornada']) ? $_POST['jornada'] : '';
$estadoactual = isset($_POST['estadoactual']) ? $_POST['estadoactual'] : '';
$estadocivil = isset($_POST['estadocivil']) ? $_POST['estadocivil'] : '';
$sexo = isset($_POST['sexo']) ? $_POST['sexo'] : '';
$genero = isset($_POST['genero']) ? $_POST['genero'] : '';
$tranporte = isset($_POST['tranporte']) ? $_POST['tranporte'] : '';
$barrio = isset($_POST['barrio']) ? $_POST['barrio'] : '';
$tiempo_del_trayecto = isset($_POST['tiempo_del_trayecto']) ? $_POST['tiempo_del_trayecto'] : '';
$hora_de_dormir  = isset($_POST['hora_de_dormir ']) ? $_POST['hora_de_dormir '] : '';
$hora_de_despertarse  = isset($_POST['hora_de_despertarse ']) ? $_POST['hora_de_despertarse '] : '';
$sueño  = isset($_POST['sueño ']) ? $_POST['sueño '] : '';
$estudio_adicional = isset($_POST['estudio_adicional']) ? $_POST['estudio_adicional'] : '';
$ingles = isset($_POST['ingles']) ? $_POST['ingles'] : '';
$asignatura  = isset($_POST['asignatura ']) ? $_POST['asignatura '] : '';
$especializacion = isset($_POST['especializacion']) ? $_POST['especializacion'] : '';
$emprendimiento = isset($_POST['emprendimiento']) ? $_POST['emprendimiento'] : '';
$catedra = isset($_POST['catedra']) ? $_POST['catedra'] : '';
$cursos = isset($_POST['cursos']) ? $_POST['cursos'] : '';
$relaciones  = isset($_POST['relaciones ']) ? $_POST['relaciones '] : '';
$amigos  = isset($_POST['amigos']) ? $_POST['amigos'] : '';
$profesores  = isset($_POST['profesores']) ? $_POST['profesores'] : '';


try {

    $conexion = new PDO("mysql:host=localhost;port=3306;dbname=data", "root", "");
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $pdo = $conexion->prepare('INSERT INTO registro(nombre, correo, telefono, jornada , estadoactual, estadocivil, sexo, Genero, tranporte, barrio, tiempo_del_trayecto, hora_de_dormir, hora_de_despertarse, sueño,estudio_adicional, ingles, asignatura, especializacion, emprendimiento, catedr, cursos, relaciones, amigos, profesores) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    
    $pdo->bindParam(1, $nombre);
    $pdo->bindParam(2, $correo);
    $pdo->bindParam(3, $telefono);
    $pdo->bindParam(4, $jornada);
    $pdo->bindParam(5, $estadoactual);
    $pdo->bindParam(6, $estadocivil);
    $pdo->bindParam(7, $sexo);
    $pdo->bindParam(8, $genero);
    $pdo->bindParam(9, $tranporte);
    $pdo->bindParam(10, $barrio);
    $pdo->bindParam(11, $tiempo_del_trayecto);
    $pdo->bindParam(12, $hora_de_dormir);
    $pdo->bindParam(13, $hora_de_despertarse);
    $pdo->bindParam(14, $sueño);
    $pdo->bindParam(15, $estudio_adicional);
    $pdo->bindParam(16, $ingles);
    $pdo->bindParam(17, $asignatura);
    $pdo->bindParam(18, $especializacion);
    $pdo->bindParam(19, $emprendimiento);
    $pdo->bindParam(20, $catedra);
    $pdo->bindParam(21, $cursos);
    $pdo->bindParam(22, $relaciones);
    $pdo->bindParam(23, $amigos);
    $pdo->bindParam(24, $profesores);
    
    $pdo->execute() or die(print($pdo->errorInfo()));

    echo json_encode('true');

} catch(PDOException $error) {
    echo $error->getMessage();
    die();
}