import { ReactNode } from 'react';
import { SkillsContainer } from './styles';

interface SkillsProps {
  title: string;
  icon: ReactNode;
}

export default function SkillItem({ title, icon }: SkillsProps) {
  return (
    <SkillsContainer>
      <p>{title}</p>
      {icon}
    </SkillsContainer>
  );
}
