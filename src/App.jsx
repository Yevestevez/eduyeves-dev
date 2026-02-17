import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail, MdLightMode, MdDarkMode } from 'react-icons/md';
import { FaBehanceSquare } from 'react-icons/fa';

import { useTheme } from './hooks/useTheme';

function App() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className="web-container flex flex-col gap-4 p-6">
            <aside>
                <button type="button" onClick={toggleTheme}>
                    {isDarkMode ? (
                        <MdLightMode className="size-auto" />
                    ) : (
                        <MdDarkMode className="size-auto" />
                    )}
                </button>
                <button disabled>Idioma</button>
            </aside>

            <header className="flex flex-col gap-4">
                <hgroup className="flex flex-col gap-2">
                    <h1 className="text-secondary font-title text-4xl font-black">
                        Edu Yeves
                    </h1>
                    <p className="text-secondary text-sm font-bold">
                        Desarrollador web y diseñador gráfico
                    </p>
                </hgroup>
                <div>
                    <p>
                        Desarrollo y diseño web de la A a la Z, desde la idea
                        hasta el despliegue.
                    </p>
                    <p>
                        Construyo webs accesibles y escalables de código limpio,
                        siempre con un ojo puesto en UI/UX
                    </p>
                </div>
                <ul className="flex gap-4">
                    <li>
                        <a href="#" title="Linkedin" aria-label="Linkedin">
                            <BsLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="#" title="GitHub" aria-label="GitHub">
                            <BsGithub />
                        </a>
                    </li>
                    <li>
                        <a href="#" title="GitHub" aria-label="GitHub">
                            <FaBehanceSquare />
                        </a>
                    </li>
                    <li>
                        <a href="#" title="Email" aria-label="email">
                            <MdEmail />
                        </a>
                    </li>
                </ul>
                <nav>
                    <ul className="flex flex-col gap-2 font-title text-sm">
                        <li>
                            <a href="#">
                                <span>SOBRE MÍ</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>PROYECTOS</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>EXPERIENCIA</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>FORMACIÓN</span>
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
            </main>

            <footer>
                <p>footer</p>
            </footer>
        </div>
    );
}

export default App;
