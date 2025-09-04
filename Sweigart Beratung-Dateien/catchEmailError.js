const form = document.getElementById('contact-form')

const feedback = document.getElementById('feedback');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    feedback.textContent = "Wird gesendet..."; // Status anzeigen

    const data = new FormData(form);

    console.log('data: ',data)

    try {
    const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { "Accept": "application/json" }
    });

    if (response.ok) {
        feedback.style.color = "green";
        feedback.textContent = "✅ Nachricht erfolgreich gesendet!";
        form.reset();
    } else {
        console.log('response: ',response)
        feedback.style.color = "red";
        feedback.textContent = "❌ Fehler: Nachricht konnte nicht gesendet werden.";
    }
    } catch (err) {
        feedback.style.color = "red";
        feedback.textContent = "⚠️ Keine Verbindung (offline?).";
    }
});