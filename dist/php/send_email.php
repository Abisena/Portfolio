<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Email tujuan
    $to = "abisena1123@gmail.com";

    // Subjek email
    $subject = "Pesan dari $name";

    // Isi pesan email
    $body = "Nama: $name\n";
    $body .= "Email: $email\n";
    $body .= "Pesan:\n$message";

    // Header email
    $headers = "From: $email" . "\r\n";

    // Kirim email
    if (mail($to, $subject, $body, $headers)) {
        // Jika email berhasil dikirim
        echo json_encode(array("message" => "Pesan Anda telah terkirim!"));
    } else {
        // Jika email gagal dikirim
        http_response_code(500);
        echo json_encode(array("message" => "Pesan gagal terkirim. Silakan coba lagi!"));
    }
} else {
    // Jika bukan metode POST
    http_response_code(405);
    echo json_encode(array("message" => "Metode tidak diizinkan!"));
}
