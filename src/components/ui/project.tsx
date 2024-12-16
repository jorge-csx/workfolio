import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "./badge";

type ProjectsProps = {
    title: string;
    year: number;
    company: string;
    website: string;
    deliverables: string;
    imgs: string[];
    children: ReactNode;
};

const Projects: React.FC<ProjectsProps> = ({
    title,
    year,
    company,
    website,
    deliverables,
    imgs,
    children,
}) => {
    return (
        <div className="flex lg:flex-row flex-col relative gap-16">
            <div className="lg:w-5/12 w-full lg:sticky lg:top-28 h-fit flex flex-col gap-9">
                <Badge variant="secondary" className="w-fit">
                    {year}
                </Badge>
                <div className="mb-6 prose dark:prose-invert">
                    <h3 className="lg:text-2xl text-xl font-medium">{title}</h3>
                    {children}
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between font-light border-b border-input pb-5">
                        <p className="text-muted-foreground">Entregables</p>
                        <p>{deliverables}</p>
                    </div>
                    <div className="flex justify-between font-light border-b border-input py-5">
                        <p className="text-muted-foreground">Empresa</p>
                        <p>{company}</p>
                    </div>
                    <div className="font-light border-b border-input">
                        <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-full flex justify-between items-center py-5 group"
                        >
                            <p className="text-muted-foreground group-hover:text-black dark:group-hover:text-white">
                                Visitar sitio web
                            </p>
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="lg:w-7/12 w-full flex flex-col gap-6">
                {imgs.map((img, index) => (
                    <img key={index} src={img} className="rounded-xl" alt="Project image" />
                ))}
            </div>
        </div>
    );
};

export default Projects;
