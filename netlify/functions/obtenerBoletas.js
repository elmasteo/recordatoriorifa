// netlify/functions/obtenerBoletas.js

export async function handler() {
  try {
    const res = await fetch("https://sorteopc.netlify.app/boletas.json");
    const data = await res.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error al obtener boletas", details: err.message })
    };
  }
}
