<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: inicio_sesion.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Página Protegida</title>
</head>
<body>
    <h1>Bienvenido a la página protegida</h1>
    <p>Contenido solo para usuarios registrados.</p>
    <a href="logout.php">Cerrar sesión</a>
</body>
</html>
