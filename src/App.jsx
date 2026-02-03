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
        <div className="bg-linear-to-b from-[#0C0C21] to-[#130821] min-h-screen text-[#A4A7D8]">
            <aside>
                <button
                    onClick={toggleDarkMode}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Cambiar tema
                </button>
                <button disabled>Idioma</button>
            </aside>

            <header>
                <hgroup>
                    <h1 className="text-[#A4A7D8] font-bold">Edu Yeves</h1>
                    <p>Junior front-end developer</p>
                </hgroup>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Consectetur. Ex sapien vitae pellentesque sem placerat in
                    id. Placerat in id cursus mi pretium tellus duis. Pretium
                    tellus duis convallis tempus leo eu aenean.
                </p>
                <ul>
                    <li>LinkedIn</li>
                    <li>Github</li>
                    <li>Email</li>
                </ul>
                <nav>
                    <ul>
                        <li>SOBRE MÍ</li>
                        <li>PROYECTOS</li>
                        <li>EXPERIENCIA</li>
                        <li>FORMACIÓN</li>
                        <li>HABILIDADES TÉCNICAS</li>
                        <li>CONTACTO</li>
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
