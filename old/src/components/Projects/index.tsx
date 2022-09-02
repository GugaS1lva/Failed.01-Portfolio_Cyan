import Link from 'next/link';
import TitleSection from '../TitleSection';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

export function Projects() {
  return (
    <Container>
      <TitleSection title="Ultimos projetos" />

      <section>
        <ProjectItem
          img="https://portfolio-guga-silva.vercel.app/_next/static/media/portfolio.87506d03.png"
          title="Projeto - 01"
          type="Website"
          slug="teste"
        />
        <ProjectItem
          img="https://portfolio-guga-silva.vercel.app/_next/static/media/portfolio.87506d03.png"
          title="Projeto - 01"
          type="Website"
          slug="teste"
        />
        <ProjectItem
          img="https://portfolio-guga-silva.vercel.app/_next/static/media/portfolio.87506d03.png"
          title="Projeto - 01"
          type="Website"
          slug="teste"
        />
        <ProjectItem
          img="https://portfolio-guga-silva.vercel.app/_next/static/media/portfolio.87506d03.png"
          title="Projeto - 01"
          type="Website"
          slug="teste"
        />
      </section>

      <button type="button">
        <Link href="/projects">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
