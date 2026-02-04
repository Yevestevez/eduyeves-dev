import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

function App() {
    function toggleDarkMode() {
        const root = document.documentElement;
        root.classList.toggle('dark');
        localStorage.setItem(
            'theme',
            root.classList.contains('dark') ? 'dark' : 'light',
        );
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') document.documentElement.classList.add('dark');

    return (
        <div className="bg-gradient min-h-screen text-primary-dark p-20">
            <aside>
                <button
                    onClick={toggleDarkMode}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Cambiar tema
                </button>
                <button disabled>Idioma</button>
            </aside>

            <header className="py-20 flex flex-col gap-10">
                <hgroup className="flex flex-col gap-14">
                    <h1 className="font-extrabold text-9xl font-[inconsolata] leading-26 tracking-tight">
                        Edu Yeves
                    </h1>
                    <p className="font-semibold text-2xl">
                        Desarrollador web junior y diseñador gráfico
                    </p>
                </hgroup>
                <div className="flex flex-col gap-3">
                    <p>
                        Desarrollo y diseño web de la A a la Z, desde la idea
                        hasta el despliegue.
                    </p>
                    <p>
                        Construyo webs accesibles y escalables de código limpio,
                        siempre con un ojo puesto en UI/UX
                    </p>
                </div>
                <ul className="flex gap-8 items-center py-5">
                    <li>
                        <a href="#">
                            <BsLinkedin className="size-10" />
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="GitHub">
                            <BsGithub className="size-10" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <MdEmail className="size-14" />
                        </a>
                    </li>
                </ul>
                <nav className="py-5">
                    <ul className="flex flex-col gap-5">
                        <li>
                            <a
                                href="#"
                                className="flex items-center gap-5 font-bold"
                            >
                                <div className="w-70 h-1 bg-primary-dark"></div>
                                <span>EXPERIENCIA</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center gap-5 opacity-60"
                            >
                                <div className="w-30 h-0.5 bg-primary-dark"></div>
                                <span>EXPERIENCIA</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center gap-5 opacity-60"
                            >
                                <div className="w-30 h-0.5 bg-primary-dark"></div>
                                <span>EXPERIENCIA</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center gap-5 opacity-60"
                            >
                                <div className="w-30 h-0.5 bg-primary-dark"></div>
                                <span>EXPERIENCIA</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center gap-5 opacity-60"
                            >
                                <div className="w-30 h-0.5 bg-primary-dark"></div>
                                <span>EXPERIENCIA</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center gap-5 opacity-60"
                            >
                                <div className="w-30 h-0.5 bg-primary-dark"></div>
                                <span>EXPERIENCIA</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <section aria-labelledby="Sobre mí">
                    <h2>SOBRE MÍ</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Quisque faucibus ex sapien vitae pellentesque sem
                        placerat. In id cursus mi pretium tellus duis convallis.
                        Tempus leo eu aenean sed diam urna tempor. Pulvinar
                        vivamus fringilla lacus nec metus bibendum egestas.
                        Iaculis massa nisl malesuada lacinia integer nunc
                        posuere. Ut hendrerit semper vel class aptent taciti
                        sociosqu. Ad litora torquent per conubia nostra inceptos
                        himenaeos.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Quisque faucibus ex sapien vitae pellentesque sem
                        placerat. In id cursus mi pretium tellus duis convallis.
                        Tempus leo eu aenean sed diam urna tempor. Pulvinar
                        vivamus fringilla lacus nec metus bibendum egestas.
                        Iaculis massa nisl malesuada lacinia integer nunc
                        posuere.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Quisque faucibus ex sapien vitae pellentesque sem
                        placerat.
                    </p>
                </section>

                <section aria-label="Proyectos">
                    <h2>PROYECTOS</h2>
                    {/* Componentes */}
                    <article>
                        <header>
                            <h3>Vegazetas</h3>
                            <a href="https://vegazetas.netlify.app">↗️</a>
                            <p>
                                Aplicación web para organizar recetas. La
                                concebí y desarrollé desde cero: prototipos en
                                Figma, front-end en React y back-end en
                                Node/Express con base de datos MongoDB. Mi
                                objetivo fue transformar una idea en un producto
                                usable, con foco en UI/UX y buenas prácticas de
                                código.
                            </p>
                        </header>
                        <details>
                            <summary>Más info...</summary>
                            <ul>
                                <li>
                                    Desarrollo de una SPA (Single Page
                                    Application) en React Creación de una API
                                    RESTful con Node.js y Express (JSON)
                                </li>
                                <li>Base de datos en MongoDB con Mongoose</li>
                                <li>
                                    Autenticación segura con JWT Protección de
                                    rutas con React Router Gestión de estado con
                                    Context API
                                </li>
                                <li>Pruebas automatizadas con Mocha/Chai</li>
                                <li>Diseño responsive con Tailwind CSS</li>
                                <li>
                                    Restablecimiento de contraseñas con
                                    Nodemailer
                                </li>
                                <li>
                                    Despliegues en producción con Render y
                                    Netlify
                                </li>
                                <li>
                                    Control de versiones con Git/GitHub
                                    siguiendo GitFlow
                                </li>
                                <li>
                                    Integración de IA en el desarrollo de nuevas
                                    funcionalidades
                                </li>
                            </ul>
                            <img src="../favicon-code.svg" alt="#" />
                        </details>
                    </article>
                </section>

                <section aria-label="Experiencia">
                    <h2>EXPERIENCIA</h2>
                </section>

                <section aria-label="Formación">
                    <h2>FORMACIÓN</h2>
                </section>

                <section aria-label="Contacto">
                    <h2>CONTACTO</h2>
                </section>
            </main>

            <footer></footer>
        </div>
    );
}

export default App;
