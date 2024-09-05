<?php

require_once("baglan.php");


// JSON yanıtını HTTP başlıklarıyla gönder
header("Access-Control-Allow-Origin: *"); // Tüm kök etki alanlarından gelen isteklere izin verir. Daha güvenli bir ayar yapabilirsiniz.
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE"); // İzin verilen HTTP yöntemlerini belirtir.
header("Access-Control-Allow-Headers: Content-Type"); // İzin verilen başlıkları belirtir.


$action = isset($_GET['action']) ? $_GET['action'] : null;

switch ($action) {
    case 'satilikbungalov':
        $satilikbungalovSql = "SELECT * FROM `satilikbungalov`";
        $satilikbungalovResult = $con->query($satilikbungalovSql);
        if ($satilikbungalovResult->num_rows > 0) {
            $satilikbungalovData = array();
            while ($satilikbungalovRow = $satilikbungalovResult->fetch_assoc()) {
                $satilikbungalovData[] = $satilikbungalovRow;
            }
            echo json_encode($satilikbungalovData);
        } else {
            echo json_encode(array('error' => 'Kullanıcı bulunamadı.'));
        }
        break;
    case 'kiralikbungalov':
        $kiralisatilikbungalovSql = "SELECT * FROM `kiralikbungalov`";
        $kiralisatilikbungalovResult = $con->query($kiralisatilikbungalovSql);
        if ($kiralisatilikbungalovResult->num_rows > 0) {
            $kiralisatilikbungalovData = array();
            while ($kiralisatilikbungalovRow = $kiralisatilikbungalovResult->fetch_assoc()) {
                $kiralisatilikbungalovData[] = $kiralisatilikbungalovRow;
            }
            echo json_encode($kiralisatilikbungalovData);
        } else {
            echo json_encode(array('error' => 'Kullanıcı bulunamadı.'));
        }
        break;
    case 'satilikbungalovekle':
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
                    $sql = "INSERT INTO satilikbungalov (ilan_no, ilan_m2, oda_sayisi, fiyati, esyali_mi, telefon, kat, adress,isinma_tipi,cephe,banyo_sayisi,satilik_durumu,resim) VALUES ('$ilanNo', '$ilanM2', '$oda_sayisi', '$fiyat', '$esyali_mi', '$telefon', '$kat', '$adress',' $isinma_tipi','$cephe','$banyo_sayisi','$satilikDurumu','$targetFile')";
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
        
    case 'satilikbungalovsil':
            $id = $_GET['id'];
            $deleteSql = "DELETE FROM satilikbungalov WHERE `satilikbungalov`.`id` = $id";
            if (mysqli_query($con, $deleteSql)) {
                echo "Veri başarıyla silindi.";
            } else {
                echo "Veriyi silerken hata oluştu: " . mysqli_error($con);
            }
            break;
    case 'satilikbungalovedit':
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
                            $sql = "UPDATE `satilikbungalov` SET `ilan_no` = '$ilanNo', `ilan_m2` = '$ilanM2',`oda_sayisi` = '$oda_sayisi', `fiyati` = '$fiyat', `esyali_mi` = '$esyali_mi',  `fiyati` = '$fiyat',  `telefon` = '$telefon',  `kat` = '$kat',  `adress` = '$adress', `isinma_tipi` = '$isinma_tipi', `cephe` = '$cephe', `banyo_sayisi` = '$banyo_sayisi', `satilik_durumu` = '$satilikDurumu',  `resim` = '$targetFile'  WHERE `satilikbungalov`.`id` = '$id'";
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

    case 'kiralikbungalovekle':
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
                    $sql = "INSERT INTO kiralikbungalov (ilan_no, ilan_m2, oda_sayisi, fiyati, esyali_mi, telefon, kat, adress,isinma_tipi,cephe,banyo_sayisi,satilik_durumu,resim) VALUES ('$ilanNo', '$ilanM2', '$oda_sayisi', '$fiyat', '$esyali_mi', '$telefon', '$kat', '$adress',' $isinma_tipi','$cephe','$banyo_sayisi','$satilikDurumu','$targetFile')";
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
        
    case 'kiralikbungalovsil':
            $id = $_GET['id'];
            $deleteSql = "DELETE FROM kiralikbungalov WHERE `kiralikbungalov`.`id` = $id";
            if (mysqli_query($con, $deleteSql)) {
                echo "Veri başarıyla silindi.";
            } else {
                echo "Veriyi silerken hata oluştu: " . mysqli_error($con);
            }
            break;

    case 'kiralikbungalovedit':
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
                            $sql = "UPDATE `kiralikbungalov` SET `ilan_no` = '$ilanNo', `ilan_m2` = '$ilanM2',`oda_sayisi` = '$oda_sayisi', `fiyati` = '$fiyat', `esyali_mi` = '$esyali_mi',  `fiyati` = '$fiyat',  `telefon` = '$telefon',  `kat` = '$kat',  `adress` = '$adress', `isinma_tipi` = '$isinma_tipi', `cephe` = '$cephe', `banyo_sayisi` = '$banyo_sayisi', `satilik_durumu` = '$satilikDurumu',  `resim` = '$targetFile'  WHERE `kiralikbungalov`.`id` = '$id'";
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