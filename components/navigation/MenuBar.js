const onToggleNav = () => {
    document.querySelector(".sidebar").classList.toggle("-translate-x-full");
};

export default function MenuBar() {
    return (
        <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
            <a href="#" className="block p-4 text-white font-bold">
                Better Dev
            </a>
            <button
                className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
                onClick={onToggleNav}
            >
                <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </div>
    );
}