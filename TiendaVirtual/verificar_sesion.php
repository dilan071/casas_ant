<?php
session_start();
header('Content-Type: application/json');

$sesionActiva = isset($_SESSION['user_id']);
echo json_encode(['sesionActiva' => $sesionActiva]);
?>
