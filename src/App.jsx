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
        <div className="bg-linear-to-b from-[#0C0C21] to-[#130821] h-screen text-[#A4A7D8]">
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
                    <li>Linkedin</li>
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
                <section>
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
                <section>
                    <h2>PROYECTOS</h2>
                </section>
                <section>
                    <h2>EXPERIENCIA</h2>
                </section>
                <section>
                    <h2>FORMACIÓN</h2>
                </section>
                <section>
                    <h2>CONTACTO</h2>
                </section>
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
