// netlify/functions/enviarWhatsapp.js

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Allow": "POST" },
      body: "Método no permitido"
    };
  }

  const { number, text } = JSON.parse(event.body);

  try {
    const response = await fetch("https://ip-172-31-43-210.tailf8b5ff.ts.net/message/sendText/misFinanzas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": process.env.EVOLUTIONAPI_TOKEN
      },
      body: JSON.stringify({ number, text })
    });

    const result = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ success: true, data: result })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message })
    };
  }
}
