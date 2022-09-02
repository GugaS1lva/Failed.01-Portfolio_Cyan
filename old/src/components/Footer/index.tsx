import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';
import { Container } from './styles';

export function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>

        <section>
          <AiOutlineTwitter
            onClick={() => handleRedirect('https://google.com')}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://google.com')}
          />
          <AiFillLinkedin
            onClick={() => handleRedirect('https://google.com')}
          />
        </section>
      </div>
    </Container>
  );
}
