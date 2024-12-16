import { ArrowUpRight, Menu } from "lucide-react";
import { Button, buttonVariants } from "./button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "./dropdown-menu";
import Link from "./link";

const Navbar = () => {
    return (
        <nav className="animate-nav-slide-from-above w-full flex justify-between items-center py-3 sticky top-0 z-10 dark:bg-[rgba(0,0,0,0.8)] bg-[rgba(255,255,255,0.95)]">
            <div>
                <p className="text-xl font-semibold">Wooorkfolio</p>
            </div>
            <div className="lg:block hidden">
                <ul className="flex gap-6 text-muted-foreground text-sm">
                    <Link href="#projects">Proyectos</Link>
                    <Link href="#about">Acerca de mí</Link>
                    <Link href="#skills">Habilidades</Link>
                </ul>
            </div>
            <div className="lg:block hidden">
                <Link
                    href="https://wa.me/8112802209"
                    isExternal
                    className={buttonVariants({ variant: "default" })}
                >
                    WhatsApp
                </Link>
            </div>
            {/* Mobile menu */}
            <div className="lg:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>
                            <Link href="#projects" className="font-normal">
                                Proyectos
                            </Link>
                        </DropdownMenuLabel>
                        <DropdownMenuLabel>
                            <Link href="#about" className="font-normal">
                                Acerca de mí
                            </Link>
                        </DropdownMenuLabel>
                        <DropdownMenuLabel>
                            <Link href="#skills" className="font-normal">
                                Habilidades
                            </Link>
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
};

export default Navbar;
