import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experience from '../components/Experience';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { FormContact } from '../components/FormContact';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experience />
        <Projects />
        <Skills />
        <FormContact />
      </main>
    </HomeContainer>
  );
}
