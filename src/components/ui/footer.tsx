import Link from "./link";

const Footer = () => {
    return (
        <div className="divide-y pt-14">
            <div className="flex lg:flex-row flex-col gap-14 pb-14">
                <p className="lg:text-5xl text-2xl">JORGE_SORIAX@OUTLOOK.COM</p>
                <div className="flex gap-8">
                    <div>
                        <p className="mb-2">Secciones</p>
                        <ul className="text-muted-foreground flex flex-col gap-2">
                            <li>
                                <Link href="#projects">Proyectos</Link>
                            </li>
                            <li>
                                <Link href="#about">Acerca de mí</Link>
                            </li>
                            <li>
                                <Link href="#skills">Habilidades</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-2">Contacto</p>
                        <ul className="text-muted-foreground flex flex-col gap-2">
                            <li>
                                <Link href="mailto:jorge_soriax@outlook.com">
                                    jorge_soriax@outlook.com
                                </Link>
                            </li>
                            <li>
                                <Link href="https://wa.me/8112802209">
                                    81 1280 2209
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://github.com/jorge-csx"
                                    isExternal
                                >
                                    Github
                                </Link>
                            </li>
                            <li>Apodaca, Nuevo León, MX</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-muted-foreground py-6 text-sm">
                <p>
                    Portafolio desarrollado utilizando{" "}
                    <Link
                        href="https://astro.build/"
                        className="text-black dark:text-white"
                        isExternal
                    >
                        Astro
                    </Link>
                    , con elementos replicados directamente de la{" "}
                    <Link
                        href="https://www.framer.com/marketplace/templates/notebook/"
                        className="text-black dark:text-white"
                        isExternal
                    >
                        plantilla para Framer creada por Wize
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};
export default Footer;
