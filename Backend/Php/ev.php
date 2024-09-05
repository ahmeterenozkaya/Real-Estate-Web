<?php
require_once("baglan.php");

// JSON yanıtını HTTP başlıklarıyla gönder
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: DELETE");


$action = isset($_GET['action']) ? $_GET['action'] : null;

switch ($action) {
    case 'satilikev':
        $satilikevSql = "SELECT * FROM `satilikev`";
        $satilikevResult = $con->query($satilikevSql);
        if ($satilikevResult->num_rows > 0) {
            $satilikevData = array();
            while ($satilikevRow = $satilikevResult->fetch_assoc()) {
                $satilikevData[] = $satilikevRow;
            }
            echo json_encode($satilikevData);
        } else {
            echo json_encode(array('error' => 'Kullanıcı bulunamadı.'));
        }
        break;

    case 'kiralikev':
        $kiralikevSql = "SELECT * FROM `kiralikev`";
        $kiralikevResult = $con->query($kiralikevSql);
        if ($kiralikevResult->num_rows > 0) {
            $kiralikevData = array();
            while ($kiralikevRow = $kiralikevResult->fetch_assoc()) {
                $kiralikevData[] = $kiralikevRow;    
            }
            echo json_encode($kiralikevData);
        } else {
            echo json_encode(array('error' => 'Kullanıcı bulunamadı.'));
        }
        break;

    case 'satilikevekle':
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $uploadDirectory = "uploads/"; // Yüklenen resimlerin saklanacağı klasör
            if (!file_exists($uploadDirectory)) {
                mkdir($uploadDirectory, 0777, true); // Klasörü oluştur, yoksa
            }
            if (isset($_FILES["resim"]) && $_FILES["resim"]["error"] === UPLOAD_ERR_OK) {
                $tempFile = $_FILES["resim"]["tmp_name"];
                $targetFile = $uploadDirectory . basename($_FILES["resim"]["name"]);
                $ilanNo = $_POST['ilan_no'];
                $ilanM2 = $_POST['ilan_m2'];
                $oda_sayisi = $_POST['oda_sayisi'];
                $fiyat = $_POST['fiyati'];
                $esyali_mi = $_POST['esyali_mi'];
                $telefon = $_POST['telefon'];
                $kat = $_POST['kat'];
                $adress = $_POST['adress'];
                $isinma_tipi = $_POST['isinma_tipi'];
                $cephe = $_POST['cephe'];
                $banyo_sayisi = $_POST['banyo_sayisi'];
                $satilikDurumu = $_POST['satilik_durumu'];

                if (move_uploaded_file($tempFile, $targetFile)) {
                    echo "Resim başarıyla yüklendi.";
                    $sql = "INSERT INTO satilikev (ilan_no, ilan_m2, oda_sayisi, fiyati, esyali_mi, telefon, kat, adress,isinma_tipi,cephe,banyo_sayisi,satilik_durumu,resim) VALUES ('$ilanNo', '$ilanM2', '$oda_sayisi', '$fiyat', '$esyali_mi', '$telefon', '$kat', '$adress',' $isinma_tipi','$cephe','$banyo_sayisi','$satilikDurumu','$targetFile')";
                    if ($con->query($sql) === TRUE) {
                        echo "Veri başarıyla kaydedildi.";
                    } else {
                        echo "Veri kaydedilirken hata oluştu: " . $con->error;
                    }
                } else {
                    echo "Resim yüklenirken bir hata oluştu.";
                }
            } else {
                echo "Resim yükleme hatası.";
            }
        }
        break;
    case 'satilikevsil':
        $id = $_GET['id'];
        $deleteSql = "DELETE FROM satilikev WHERE `satilikev`.`id` = $id";
        if (mysqli_query($con, $deleteSql)) {
            echo "Veri başarıyla silindi.";
        } else {
            echo "Veriyi silerken hata oluştu: " . mysqli_error($con);
        }
        break;
    case 'satilikevedit':
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $uploadDirectory = "uploads/"; // Yüklenen resimlerin saklanacağı klasör
            if (!file_exists($uploadDirectory)) {
                mkdir($uploadDirectory, 0777, true); // Klasörü oluştur, yoksa
            }
            if (isset($_FILES["resim"]) && $_FILES["resim"]["error"] === UPLOAD_ERR_OK) {
                $id = $_GET['id'];
                $tempFile = $_FILES["resim"]["tmp_name"];
                $targetFile = $uploadDirectory . basename($_FILES["resim"]["name"]);
                $ilanNo = $_POST['ilan_no'];
                $ilanM2 = $_POST['ilan_m2'];
                $oda_sayisi = $_POST['oda_sayisi'];
                $fiyat = $_POST['fiyati'];
                $esyali_mi = $_POST['esyali_mi'];
                $telefon = $_POST['telefon'];
                $kat = $_POST['kat'];
                $adress = $_POST['adress'];
                $isinma_tipi = $_POST['isinma_tipi'];
                $cephe = $_POST['cephe'];
                $banyo_sayisi = $_POST['banyo_sayisi'];
                $satilikDurumu = $_POST['satilik_durumu'];

                if (move_uploaded_file($tempFile, $targetFile)) {
                    echo "Resim başarıyla yüklendi.";
                    $sql = "UPDATE `satilikev` SET `ilan_no` = '$ilanNo', `ilan_m2` = '$ilanM2',`oda_sayisi` = '$oda_sayisi', `fiyati` = '$fiyat', `esyali_mi` = '$esyali_mi',  `fiyati` = '$fiyat',  `telefon` = '$telefon',  `kat` = '$kat',  `adress` = '$adress', `isinma_tipi` = '$isinma_tipi', `cephe` = '$cephe', `banyo_sayisi` = '$banyo_sayisi', `satilik_durumu` = '$satilikDurumu',  `resim` = '$targetFile'  WHERE `satilikev`.`id` = '$id'";
                    if ($con->query($sql) === TRUE) {
                        echo "Veri başarıyla kaydedildi.";
                    } else {
                        echo "Veri kaydedilirken hata oluştu: " . $con->error;
                    }
                } else {
                    echo "Resim yüklenirken bir hata oluştu.";
                }
            } else {
                echo "Resim yükleme hatası.";
            }
        }
        break;
        //!Kiralık bölgesi
    case 'kiralikevekle':
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $uploadDirectory = "uploads/"; // Yüklenen resimlerin saklanacağı klasör
            if (!file_exists($uploadDirectory)) {
                mkdir($uploadDirectory, 0777, true); // Klasörü oluştur, yoksa
            }
            if (isset($_FILES["resim"]) && $_FILES["resim"]["error"] === UPLOAD_ERR_OK) {
                $tempFile = $_FILES["resim"]["tmp_name"];
                $targetFile = $uploadDirectory . basename($_FILES["resim"]["name"]);
                $ilanNo = $_POST['ilan_no'];
                $ilanM2 = $_POST['ilan_m2'];
                $oda_sayisi = $_POST['oda_sayisi'];
                $fiyat = $_POST['fiyati'];
                $esyali_mi = $_POST['esyali_mi'];
                $telefon = $_POST['telefon'];
                $kat = $_POST['kat'];
                $adress = $_POST['adress'];
                $isinma_tipi = $_POST['isinma_tipi'];
                $cephe = $_POST['cephe'];
                $banyo_sayisi = $_POST['banyo_sayisi'];
                $satilikDurumu = $_POST['satilik_durumu'];

                if (move_uploaded_file($tempFile, $targetFile)) {
                    echo "Resim başarıyla yüklendi.";
                    $sql = "INSERT INTO kiralikev (ilan_no, ilan_m2, oda_sayisi, fiyati, esyali_mi, telefon, kat, adress,isinma_tipi,cephe,banyo_sayisi,satilik_durumu,resim) VALUES ('$ilanNo', '$ilanM2', '$oda_sayisi', '$fiyat', '$esyali_mi', '$telefon', '$kat', '$adress',' $isinma_tipi','$cephe','$banyo_sayisi','$satilikDurumu','$targetFile')";
                    if ($con->query($sql) === TRUE) {
                        echo "Veri başarıyla kaydedildi.";
                    } else {
                        echo "Veri kaydedilirken hata oluştu: " . $con->error;
                    }
                } else {
                    echo "Resim yüklenirken bir hata oluştu.";
                }
            } else {
                echo "Resim yükleme hatası.";
            }
        }
        break;
    case 'kiralikevsil':
        $id = $_GET['id'];
        $deleteSql = "DELETE FROM kiralikev WHERE `kiralikev`.`id` = $id";
        if (mysqli_query($con, $deleteSql)) {
            echo "Veri başarıyla silindi.";
        } else {
            echo "Veriyi silerken hata oluştu: " . mysqli_error($con);
        }
        break;
    case 'kiralikevedit':
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $uploadDirectory = "uploads/"; // Yüklenen resimlerin saklanacağı klasör
            if (!file_exists($uploadDirectory)) {
                mkdir($uploadDirectory, 0777, true); // Klasörü oluştur, yoksa
            }
            if (isset($_FILES["resim"]) && $_FILES["resim"]["error"] === UPLOAD_ERR_OK) {
                $id = $_GET['id'];
                $tempFile = $_FILES["resim"]["tmp_name"];
                $targetFile = $uploadDirectory . basename($_FILES["resim"]["name"]);
                $ilanNo = $_POST['ilan_no'];
                $ilanM2 = $_POST['ilan_m2'];
                $oda_sayisi = $_POST['oda_sayisi'];
                $fiyat = $_POST['fiyati'];
                $esyali_mi = $_POST['esyali_mi'];
                $telefon = $_POST['telefon'];
                $kat = $_POST['kat'];
                $adress = $_POST['adress'];
                $isinma_tipi = $_POST['isinma_tipi'];
                $cephe = $_POST['cephe'];
                $banyo_sayisi = $_POST['banyo_sayisi'];
                $satilikDurumu = $_POST['satilik_durumu'];

                if (move_uploaded_file($tempFile, $targetFile)) {
                    echo "Resim başarıyla yüklendi.";
                    $sql = "UPDATE `kiralikev` SET `ilan_no` = '$ilanNo', `ilan_m2` = '$ilanM2',`oda_sayisi` = '$oda_sayisi', `fiyati` = '$fiyat', `esyali_mi` = '$esyali_mi',  `fiyati` = '$fiyat',  `telefon` = '$telefon',  `kat` = '$kat',  `adress` = '$adress', `isinma_tipi` = '$isinma_tipi', `cephe` = '$cephe', `banyo_sayisi` = '$banyo_sayisi', `satilik_durumu` = '$satilikDurumu',  `resim` = '$targetFile'  WHERE `kiralikev`.`id` = '$id'";
                    if ($con->query($sql) === TRUE) {
                        echo "Veri başarıyla kaydedildi.";
                    } else {
                        echo "Veri kaydedilirken hata oluştu: " . $con->error;
                    }
                } else {
                    echo "Resim yüklenirken bir hata oluştu.";
                }
            } else {
                echo "Resim yükleme hatası.";
            }
        }
        break;
    default:
        echo json_encode(array('error' => 'Invalid action.'));
}
?>