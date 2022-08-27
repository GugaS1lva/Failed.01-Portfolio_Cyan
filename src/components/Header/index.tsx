import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="home" path="/" />
        <NavLink title="projects" path="/projects" />
        <NavLink title="experience" path="/experience" />
        <NavLink title="contact" path="/contact" />
      </ul>
    </Container>
  );
}

export default Header;
