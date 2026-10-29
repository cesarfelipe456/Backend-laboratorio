const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal que muestra la interfaz HTML con el botón requerido por el laboratorio
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Laboratorio - Vercel y Render</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background-color: #f4f4f9; }
                button { padding: 12px 24px; font-size: 16px; background-color: #0070f3; color: white; border: none; border-radius: 5px; cursor: pointer; }
                button:hover { background-color: #0051a2; }
                #resultado { margin-top: 20px; font-size: 18px; color: #333; background: white; display: inline-block; padding: 15px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
            </style>
        </head>
        <body>
            <h1>Prueba de Integración de Laboratorio</h1>
            <button onclick="consultarBackend()">Consultar backend</button>
            <div id="resultado">Haz clic en el botón para ver la respuesta...</div>

            <script>
                async function consultarBackend() {
                    const div = document.getElementById('resultado');
                    div.textContent = "Consultando...";
                    try {
                        const res = await fetch('/api/mensaje');
                        const data = await res.json();
                        div.textContent = JSON.stringify(data, null, 2);
                    } catch (err) {
                        div.textContent = "Error al conectar: " + err;
                    }
                }
            </script>
        </body>
        </html>
    `);
});

// Ruta de la API que devuelve el JSON
app.get('/api/mensaje', (req, res) => {
    res.json({
        mensaje: "¡Conexión exitosa entre Vercel y Render!",
        curso: "Despliegue en la nube"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});