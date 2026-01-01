async function generateVideo() {
    const duration = document.getElementById("duration").value;
    const language = document.getElementById("language").value;
    const contentType = document.getElementById("contentType").value;
    const voiceTone = document.getElementById("voiceTone").value;

    document.getElementById("result").innerText = "جاري التوليد...";

    try {
        const response = await fetch("https://altheeb-backend.onrender.com/api/generate-video", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                duration,
                language,
                contentType,
                voiceTone
            })
        });

        const data = await response.json();

        if (data.status === "success") {
            document.getElementById("result").innerText = data.script;
        } else {
            document.getElementById("result").innerText = "حدث خطأ أثناء التوليد.";
        }
    } catch (error) {
        console.error(error);
        document.getElementById("result").innerText = "تعذر الاتصال بالخادم.";
    }
}
