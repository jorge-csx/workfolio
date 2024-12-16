import type { ReactNode } from "react";

type HeaderSectionProps = {
    children: ReactNode;
};

const HeaderSection: React.FC<HeaderSectionProps> = ({children}) => {
    return <h2 className="lg:text-5xl sm:text-4xl text-3xl mb-14">{children}</h2>;
};
export default HeaderSection;
