import Header from '../../components/Header';
import ProjectItem from '../../components/Projects/ProjectItem';
import TitleSection from '../../components/TitleSection';
import { ProjectsContainer } from '../../styles/projectstyles';

export default function Projects() {
  return (
    <ProjectsContainer>
      <Header />

      <TitleSection title="Ultimos projetos" />

      <main className="container">
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
      </main>
    </ProjectsContainer>
  );
}
