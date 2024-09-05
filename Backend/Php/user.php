<?php
session_start();
include("baglan.php");


$action = isset($_GET['action']) ? $_GET['action'] : null;

switch ($action) {
    case 'user':
        $userSql = "SELECT * FROM user";
        $userResult = $con->query($userSql);
        if ($userResult->num_rows > 0) {
            $userData = array();
            while ($userRow = $userResult->fetch_assoc()) {
                $userData[] = $userRow;
            }
            echo json_encode($userData);
        } else {
            echo json_encode(array('error' => 'Kullanıcı bulunamadı.'));
        }
        break;

  
    
    
    default:
        echo json_encode(array('error' => 'Invalid action.'));
}


?>