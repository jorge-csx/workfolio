import type { ReactNode } from "react";

type LinkProps = {
    href: string;
    isExternal?: boolean;
    className?: any;
    children: ReactNode;
};

const Link: React.FC<LinkProps> = ({ href, isExternal = false, className = "", children }) => {
    return (
        <a
            href={href}
            // className={`dark:hover:text-white hover:text-black ${className}`}
            className={className}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener" : undefined}
        >
            {children}
        </a>
    );
};

export default Link;
