import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

// Importações dos nossos arquivos de configuração
import { appleTheme } from "./styles/theme";

import AppRoutes from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Navbar } from "./components/Navbar";

// Importações de Componentes Globais (quando você os criar)
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={appleTheme}>
      {/* 1. GlobalStyles reseta o CSS e aplica as fontes da Apple */}
      <GlobalStyles />

      {/* 2. BrowserRouter permite a navegação entre as páginas */}
      <BrowserRouter>
        {/* 3. A Navbar fica aqui fora do AppRoutes porque ela é FIXA.
           Ela aparecerá em todas as páginas automaticamente. */}
        <Navbar />
        <main>
          {/* 4. AppRoutes decide QUAL página renderizar no meio do site */}
          <AppRoutes />
        </main>

        {/* 5. O Footer também é fixo no final de todas as páginas */}
        {/* <Footer /> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
