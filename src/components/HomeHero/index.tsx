/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/pessoa.webp';

function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha Foto" />

      <div>
        <TextContainer>
          <h1>Olá</h1>

          <h2>Me chamo Guga Silva</h2>
        </TextContainer>

        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Guga,</span>
            </div>
            <div>
              SobreNome: <span className="blue">Silva</span>
            </div>
            {'\u007D'}
          </CodeItem>

          <CodeItem>
            <span className="comment">//Minha função</span>
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">Dev Front-End,</span>
            </div>
            <div>
              Empresa: <span className="blue">Unknown</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
