import "./styles/global.css";
import "./styles/theme.css";
import { Container } from "./components/Container";
import { MainForm } from "./components/MainForm";
import { DefaultInput } from "./components/DefaultInput";
import { DefaultButton } from "./components/DefaultButton";
import { LockKeyhole, Mail  } from 'lucide-react';

export  function App() {
  return(
    <>
      <Container> 
        <MainForm>
          <DefaultInput 
            Icon={Mail}
            labelText="Digite o seu email" 
            id="email" 
            type="text" 
            placeholder="E-mail"
            />

            <DefaultInput 
            Icon={LockKeyhole}
            labelText="Digite a sua senha" 
            id="senha" 
            type="password" 
            placeholder="Senha"
            />

            <DefaultButton> Enviar</DefaultButton>
        </MainForm>
      </Container>
    </>
  )
}

