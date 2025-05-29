import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors()); // habilita CORS para TODAS las rutas y TODOS los orígenes

app.get('/api', (req, res) => {
 fetchData(res);
});
app.get('/', (req, res) => {
 res.send("Kaixo");
});

app.listen(3000, () => console.log('🟢 API en http://localhost:3000'));


async function fetchData(res) {
  try {
    const response = await fetch('http://localhost:4000/api');
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const data = await response.json();
    console.log('Respuesta desde el servidor:', data);
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
  }
}



