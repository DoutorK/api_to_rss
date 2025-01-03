import { listen } from './app';

const PORT = 3000;

listen(PORT, () =>{
    console.log(`o Servidor está em https://localhostl:${PORT}`)
});