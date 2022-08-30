import TitleSection from '../TitleSection';
import Form from './Form';
import { Container } from './styles';

export function FormContact() {
  return (
    <Container>
      <TitleSection
        title={
          <>
            Precisa dos
            <br />
            meus Serviços?
          </>
        }
        description={
          <>
            Preencha o formulário abaixo
            <br />
            que receberá meu retorno em breve.
          </>
        }
      />

      <Form />
    </Container>
  );
}
