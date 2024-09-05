<?php

session_start();

$con = include("baglan.php");

header("Access-Control-Allow-Origin: *"); // Tüm kök etki alanlarından gelen isteklere izin verir. Daha güvenli bir ayar yapabilirsiniz.
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE"); // İzin verilen HTTP yöntemlerini belirtir.
header("Access-Control-Allow-Headers: Content-Type"); // İzin verilen başlıkları belirtir.

$action = isset($_GET['action']) ? $_GET['action'] : null;


switch ($action) {

    case 'kiralikarsa':
        $kiralikarsaSql = "SELECT * FROM `kiralikarsa`";
        $kiralikarsaResult = $con->query($kiralikarsaSql);
        $data = array(); // Verileri saklamak için boş bir dizi oluşturun
        if ($kiralikarsaResult->num_rows > 0) {
            while ($row = $kiralikarsaResult->fetch_assoc()) {
                $data[] = $row; // Her satırı diziye ekleyin
            }
            echo json_encode($data); // Tüm verileri JSON olarak kodlayın
        } else {
            echo "Hiç veri bulunamadı.";
        }
        break;

    case 'satilikarsa':
        $satilikarsaSql = "SELECT * FROM `satilikarsa`";
        $satilikarsaResult = $con->query($satilikarsaSql);
        $data = array();
        if ($satilikarsaResult->num_rows > 0) {
            while ($row = $satilikarsaResult->fetch_assoc()) {
                $data[] = $row;
            }
            echo json_encode($data); // Tüm verileri JSON olarak kodlayın
        } else {
            echo 'data yüklenemedi';
        }
        break;

    case 'kiralikarsaekle':
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
                $imarliMi = $_POST['imarli_mi'];
                $fiyat = $_POST['fiyati'];
                $ada = $_POST['ada'];
                $telefon = $_POST['telefon'];
                $adress = $_POST['adress'];
                $parsel = $_POST['parsel'];
                $satilikDurumu = $_POST['satilik_durumu'];

                if (move_uploaded_file($tempFile, $targetFile)) {
                    echo "Resim başarıyla yüklendi.";
                    $sql = "INSERT INTO kiralikarsa (ilan_no, ilan_m2, imarli_mi, fiyati, ada, parsel, satilik_durumu, resim,adress,telefon) VALUES ('$ilanNo', '$ilanM2', '$imarliMi', '$fiyat', '$ada', '$parsel', '$satilikDurumu', '$targetFile',' $adress','$telefon')";
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

    case 'kiraliarsaksil':
        $id = $_GET['id'];
        $deleteSql = "DELETE FROM kiralikarsa WHERE `kiralikarsa`.`id` = $id";
        if (mysqli_query($con, $deleteSql)) {
            echo "Veri başarıyla silindi.";
        } else {
            echo "Veriyi silerken hata oluştu: " . mysqli_error($con);
        }
        break;
    case 'kiraliarsaedit':
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $uploadDirectory = "uploads/"; // Yüklenen resimlerin saklanacağı klasör

            if (!file_exists($uploadDirectory)) {
                mkdir($uploadDirectory, 0777, true); // Klasörü oluştur, yoksa
            }
            if (isset($_FILES["resim"]) && $_FILES["resim"]["error"] === UPLOAD_ERR_OK) {
                $tempFile = $_FILES["resim"]["tmp_name"];
                $targetFile = $uploadDirectory . basename($_FILES["resim"]["name"]);

                $id = $_GET['id'];
                $ilanNo = $_POST['ilan_no'];
                $ilanM2 = $_POST['ilan_m2'];
                $imarliMi = $_POST['imarli_mi'];
                $fiyat = $_POST['fiyati'];
                $ada = $_POST['ada'];
                $parsel = $_POST['parsel'];
                $adress = $_POST['adress'];
                $telefon = $_POST['telefon'];
                $satilikDurumu = $_POST['satilik_durumu'];

                if (move_uploaded_file($tempFile, $targetFile)) {
                    echo "Resim başarıyla yüklendi.";

                    $sql = "UPDATE `kiralikarsa` SET `ilan_no` = '$ilanNo', `telefon` = '$telefon',`adress` = '$adress', `ilan_m2` = '$ilanM2', `imarli_mi` = '$imarliMi', `fiyati` = '$fiyat', `ada` = '$ada', `parsel` = '$parsel', `satilik_durumu` = '$satilikDurumu', `resim` = '$targetFile' 
                    WHERE `kiralikarsa`.`id` = '$id'";

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

    case 'satilikarsaekle':
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
                $imarliMi = $_POST['imarli_mi'];
                $fiyat = $_POST['fiyati'];
                $ada = $_POST['ada'];
                $parsel = $_POST['parsel'];
                $adress = $_POST['adress'];
                $satilikDurumu = $_POST['satilik_durumu'];
                if (move_uploaded_file($tempFile, $targetFile)) {
                    echo "Resim başarıyla yüklendi.";
                    $sql = "INSERT INTO satilikarsa (ilan_no, ilan_m2, imarli_mi, fiyati, ada, parsel, satilik_durumu, resim,adress) VALUES ('$ilanNo', '$ilanM2', '$imarliMi', '$fiyat', '$ada', '$parsel', '$satilikDurumu', '$targetFile','$adress')";

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

    case 'satilikarsasil':
        $id = $_GET['id'];
        $deleteSql = "DELETE FROM satilikarsa WHERE `satilikarsa`.`id` = $id";
        if (mysqli_query($con, $deleteSql)) {
            echo "Veri başarıyla silindi.";
        } else {
            echo "Veriyi silerken hata oluştu: " . mysqli_error($con);
        }
        break;
    case 'satilikarsaedit':
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $uploadDirectory = "uploads/"; // Yüklenen resimlerin saklanacağı klasör

            if (!file_exists($uploadDirectory)) {
                mkdir($uploadDirectory, 0777, true); // Klasörü oluştur, yoksa
            }


            if (isset($_FILES["resim"]) && $_FILES["resim"]["error"] === UPLOAD_ERR_OK) {
                $tempFile = $_FILES["resim"]["tmp_name"];
                $targetFile = $uploadDirectory . basename($_FILES["resim"]["name"]);

                $id = $_GET['id'];
                $ilanNo = $_POST['ilan_no'];
                $ilanM2 = $_POST['ilan_m2'];
                $imarliMi = $_POST['imarli_mi'];
                $fiyat = $_POST['fiyati'];
                $ada = $_POST['ada'];
                $parsel = $_POST['parsel'];
                $adress = $_POST['adress'];
                $satilikDurumu = $_POST['satilik_durumu'];

                if (move_uploaded_file($tempFile, $targetFile)) {
                    echo "Resim başarıyla yüklendi.";

                    $sql = "UPDATE `satilikarsa` SET `ilan_no` = '$ilanNo', `ilan_m2` = '$ilanM2', `imarli_mi` = '$imarliMi', `fiyati` = '$fiyat', `ada` = '$ada', `parsel` = '$parsel', `satilik_durumu` = '$satilikDurumu', `resim` = '$targetFile',`adress` = '$adress' 
                        WHERE `satilikarsa`.`id` = '$id'";

                    // Veritabanı bağlantısı oluşturulmalıdır, $con burada kullanılıyor gibi görünüyor
                    // Veritabanı bağlantısını $con ile nasıl oluşturduğunuzu kontrol edin.

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
        break;
}
?>