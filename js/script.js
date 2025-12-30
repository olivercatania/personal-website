const form = document.getElementById("contact-form");
const statusEl = document.getElementById("contact-status");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    statusEl.textContent = "Sending...";

    try {
        const res = await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {"Accept": "application/json"}
        });
        
        if (res.ok) {
            statusEl.textContent = "Thanks — message sent!";
            form.reset();
        }else {
            const data = await res.json().catch(() => null);
            statusEl.textContent = data?.errors
            ? data.errors.map(err => err.message).join(", ")
            : "Oops — something went wrong.";
        }
    }catch {
        statusEl.textContent = "Network error — please try again.";
    }
});