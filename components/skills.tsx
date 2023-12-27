import { SimpleIcon } from './simple-icons';
import skillsData from '../data/skills.json';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Separator } from './ui/separator';

interface Skill {
  name: string;
  icon: string;
}

interface SkillsData {
  languages: Skill[];
  technologies: Skill[];
  os: Skill[];
  editors: Skill[];
}

export default function Skills() {
  const { languages, technologies, os, editors } = skillsData as SkillsData;

  return (
    <div className="w-full mx-auto md:w-[40vw]">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight my-2">
        Skills
      </h3>
      <Card>
        <CardHeader>
          <CardTitle>Languages</CardTitle>
        </CardHeader>
        <CardContent className="gap-4 flex justify-center flex-wrap min-h-0">
          {languages.map((language) => (
              <div key={language.name} className="flex flex-col items-center">
                <SimpleIcon icon={language.icon} size={24} />
                <p className="text-sm text-muted-foreground mt-2">{language.name}</p>
              </div>
          ))}
          <Separator className="mt-1" />
        </CardContent>
        <CardHeader className="p-0 pb-6 px-6">
          <CardTitle>Technologies</CardTitle>
        </CardHeader>
        <CardContent className="gap-4 flex justify-center flex-wrap min-h-0">
          {technologies.map((technology) => (
            <div key={technology.name} className="flex flex-col items-center">
              <SimpleIcon icon={technology.icon} size={24} />
              <p className="text-sm text-muted-foreground mt-2">{technology.name}</p>
            </div>
          ))}
          <Separator className="mt-1" />
        </CardContent>
        <CardHeader className="p-0 pb-6 px-6">
          <CardTitle>Systems</CardTitle>
        </CardHeader>
        <CardContent className="gap-4 flex justify-center flex-wrap min-h-0">
          {os.map((system) => (
            <div key={system.name} className="flex flex-col items-center">
              <SimpleIcon icon={system.icon} size={24} />
              <p className="text-sm text-muted-foreground mt-2">{system.name}</p>
            </div>
          ))}
          <Separator className="mt-1" />
        </CardContent>
        <CardHeader className="p-0 pb-6 px-6">
          <CardTitle>Editors</CardTitle>
        </CardHeader>
        <CardContent className="gap-4 flex justify-center flex-wrap min-h-0">
          {editors.map((editor) => (
            <div key={editor.name} className="flex flex-col items-center">
              <SimpleIcon icon={editor.icon} size={24} />
              <p className="text-sm text-muted-foreground mt-2">{editor.name}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};