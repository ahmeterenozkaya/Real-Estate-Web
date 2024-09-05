<?php 
$serverName = "localhost";
$userName = "admin";
$password = "191006";
$dbName = "emlakevve";

$con = new mysqli($serverName, $userName, $password, $dbName);

if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

$userTableSQL = "CREATE TABLE IF NOT EXISTS user (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(30) NOT NULL,
    userPassword VARCHAR(30) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

$kiralikArsaTableSQL = "CREATE TABLE IF NOT EXISTS kiralikArsa (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    ilan_no VARCHAR(30) NOT NULL,
    ilan_m2 VARCHAR(30) NOT NULL,
    imarli_mi TINYINT(1) NOT NULL,
    fiyati BIGINT(20) NOT NULL,
    ada VARCHAR(30) NOT NULL,
    adress VARCHAR(30) NOT NULL,
    parsel VARCHAR(30) NOT NULL,
    telefon VARCHAR(30) NOT NULL,
    satilik_durumu TINYINT(1) DEFAULT NULL,
    resim VARCHAR(255) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

$satilikArsaTableSQL = "CREATE TABLE IF NOT EXISTS satilikArsa (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    ilan_no INT(11) NOT NULL,
    ilan_m2 INT(11) NOT NULL,
    imarli_mi TINYINT(1) NOT NULL,
    fiyati BIGINT(20) NOT NULL,
    ada INT(11) NOT NULL,
    adress VARCHAR(30) NOT NULL,
    telefon VARCHAR(30) NOT NULL,
    parsel INT(11) NOT NULL,
    satilik_durumu TINYINT(1) DEFAULT NULL,
    resim VARCHAR(255) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

$satilikEvTableSQL = "CREATE TABLE IF NOT EXISTS satilikEv (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    ilan_no INT(11) NOT NULL,
    satilik_durumu TINYINT(1) NOT NULL,
    ilan_m2 INT(11) NOT NULL,
    oda_sayisi VARCHAR(255) NOT NULL,
    esyali_mi TINYINT(1) NOT NULL,
    isinma_tipi VARCHAR(255) NOT NULL,
    cephe VARCHAR(255) NOT NULL,
    kat VARCHAR(255) NOT NULL,
    adress VARCHAR(255) NOT NULL,  
    banyo_sayisi TINYINT(4) NOT NULL,
    fiyati BIGINT(20) NOT NULL,
    telefon BIGINT(20) NOT NULL,
    resim VARCHAR(255) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

$kiralikEvTableSQL = "CREATE TABLE IF NOT EXISTS kiralikEv (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    ilan_no INT(11) NOT NULL,
    satilik_durumu TINYINT(1) NOT NULL,
    ilan_m2 INT(11) NOT NULL,
    oda_sayisi VARCHAR(255) NOT NULL,
    esyali_mi TINYINT(1) NOT NULL,
    isinma_tipi VARCHAR(255) NOT NULL,
    cephe VARCHAR(255) NOT NULL,
    kat VARCHAR(255) NOT NULL,
    adresS VARCHAR(255) NOT NULL,  
    banyo_sayisi TINYINT(4) NOT NULL,
    fiyati BIGINT(20) NOT NULL,
    telefon BIGINT(20) NOT NULL,
    resim VARCHAR(255) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

$satilikBungalovTableSQL = "CREATE TABLE IF NOT EXISTS satilikBungalov (
   id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    ilan_no INT(11) NOT NULL,
    satilik_durumu TINYINT(1) NOT NULL,
    ilan_m2 INT(11) NOT NULL,
    oda_sayisi VARCHAR(255) NOT NULL,
    esyali_mi TINYINT(1) NOT NULL,
    isinma_tipi VARCHAR(255) NOT NULL,
    cephe VARCHAR(255) NOT NULL,
    kat VARCHAR(255) NOT NULL,
    adress VARCHAR(255) NOT NULL,  
    banyo_sayisi TINYINT(4) NOT NULL,
    fiyati BIGINT(20) NOT NULL,
    telefon BIGINT(20) NOT NULL,
    resim VARCHAR(255) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

$kiralikBungalovTableSQL = "CREATE TABLE IF NOT EXISTS kiralikBungalov (
   id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    ilan_no INT(11) NOT NULL,
    satilik_durumu TINYINT(1) NOT NULL,
    ilan_m2 INT(11) NOT NULL,
    oda_sayisi VARCHAR(255) NOT NULL,
    esyali_mi TINYINT(1) NOT NULL,
    isinma_tipi VARCHAR(255) NOT NULL,
    cephe VARCHAR(255) NOT NULL,
    kat VARCHAR(255) NOT NULL,
    adress VARCHAR(255) NOT NULL,  
    banyo_sayisi TINYINT(4) NOT NULL,
    fiyati BIGINT(20) NOT NULL,
    telefon BIGINT(20) NOT NULL,
    resim VARCHAR(255) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if (
    $con->query($userTableSQL) === TRUE &&
    $con->query($kiralikArsaTableSQL) === TRUE &&
    $con->query($satilikArsaTableSQL) === TRUE &&
    $con->query($satilikEvTableSQL) === TRUE &&
    $con->query($kiralikEvTableSQL) === TRUE&&
    $con->query($satilikBungalovTableSQL) === TRUE &&
    $con->query($kiralikBungalovTableSQL) === TRUE
) {
    echo "Tables created successfully";
} else {
    echo "Error creating tables: " . $con->error;
}

$con->close();
?>