import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import TitleSection from '../TitleSection';
import SkillItem from './skillItem';
import { Container } from './styles';

export function Skills() {
  return (
    <Container>
      <TitleSection title="Habilidades" />

      <section>
        <SkillItem title="HTML" icon={<AiFillHtml5 />} />
        <SkillItem title="CSS" icon={<FaCss3Alt />} />
        <SkillItem title="JavaScript" icon={<IoLogoJavascript />} />
        <SkillItem title="React" icon={<FaReact />} />
      </section>
    </Container>
  );
}
