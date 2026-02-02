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
        <div className="bg-linear-to-b from-[#0C0C21] to-[#130821] h-screen">
            <button
                onClick={toggleDarkMode}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Cambiar tema
            </button>
            <h1 className="text-black bg-blue-200  dark:text-white dark:bg-blue-950 font-bold">
                Hello world!
            </h1>
        </div>
    );
}

export default App;
