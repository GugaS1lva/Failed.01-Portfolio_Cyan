import TitleSection from '../TitleSection';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function Experience() {
  return (
    <Container>
      <TitleSection title="05 Anos" description="de experiência" />

      <section>
        <ExperienceItem
          year="2022"
          title="Dev Front-End"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <ExperienceItem
          year="2022"
          title="Dev Front-End"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <ExperienceItem
          year="2022"
          title="Dev Front-End"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <ExperienceItem
          year="2022"
          title="Dev Front-End"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
      </section>
    </Container>
  );
}

export default Experience;
