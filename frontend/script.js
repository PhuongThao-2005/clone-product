document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('helloBtn').addEventListener('click', async () => {
        const response = await fetch('http://localhost:3000/hello');
        const text = await response.text();
        document.getElementById('helloResponse').innerText = text;
    });

    document.getElementById("capitalizeBtn").addEventListener("click", async () => {
        const inputText = document.getElementById("inputText").value.trim();

        if (!inputText) {
            alert("Please enter text.");
            return;
        }

        const response = await fetch("http://localhost:3000/capitalize", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: inputText })
        });

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        document.getElementById("capitalizeResponse").innerText = `${data.result}`;

    });
});

document.addEventListener("DOMContentLoaded", function () {
    const desc = document.querySelector("#introduction .desc");
    function handleScroll() {
        const rect = desc.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 50) {
            desc.classList.add("show");
        }
    }
    window.addEventListener("scroll", handleScroll);
});
