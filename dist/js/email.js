document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Kirim data formulir ke backend menggunakan Fetch API
    fetch("send_email.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Tampilkan pesan balasan dari backend
        alert(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Pesan gagal terkirim. Silakan coba lagi!");
      });
  });
});
