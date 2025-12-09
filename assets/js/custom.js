// =============================
//  CUSTOM FORM HANDLER (Lab darbas)
//  Surenkami duomenys, skaičiuojamas vidurkis,
//  atvaizduojama formoje, stabdomas reload
// =============================

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const resultBox = document.getElementById("formResults");

    // Jei forma nerasta – nerodome klaidos, tiesiog sustojame
    if (!form) {
        console.error("❌ Klaida: Forma su id='contactForm' nerasta.");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // sustabdo puslapio persikrovimą

        // =============================
        //   1. Surenkame įvestus duomenis
        // =============================

        const data = {
            vardas: document.getElementById("vardas")?.value || "",
            pavarde: document.getElementById("pavarde")?.value || "",
            pastas: document.getElementById("pastas")?.value || "",
            telefonas: document.getElementById("telefonas")?.value || "",
            adresas: document.getElementById("adresas")?.value || "",
            klausimas1: Number(document.getElementById("klausimas1")?.value || 0),
            klausimas2: Number(document.getElementById("klausimas2")?.value || 0),
            klausimas3: Number(document.getElementById("klausimas3")?.value || 0)
        };

        console.log("📌 Įvesti duomenys:", data);

        // =============================
        //   2. Vidurkio skaičiavimas
        // =============================
        const vidurkis = (
            (data.klausimas1 + data.klausimas2 + data.klausimas3) / 3
        ).toFixed(1);

        // =============================
        //   3. Gražus rezultatų atvaizdavimas
        // =============================

        resultBox.innerHTML = `
            <h4>📋 Pateikti duomenys</h4>
            <p><strong>Vardas:</strong> ${data.vardas}</p>
            <p><strong>Pavardė:</strong> ${data.pavarde}</p>
            <p><strong>El. paštas:</strong> ${data.pastas}</p>
            <p><strong>Telefonas:</strong> ${data.telefonas}</p>
            <p><strong>Adresas:</strong> ${data.adresas}</p>
            <hr>
            <p><strong>Įvertinimas 1:</strong> ${data.klausimas1}</p>
            <p><strong>Įvertinimas 2:</strong> ${data.klausimas2}</p>
            <p><strong>Įvertinimas 3:</strong> ${data.klausimas3}</p>
            <h5><strong>Vidurkis:</strong> ${vidurkis}</h5>
        `;

        // =============================
        //   4. Pop-up pranešimas
        // =============================
        alert("🎉 Duomenys pateikti sėkmingai!");
    });

});
