import Logo from "@/app/components/Logo";

export default function TopNavLanding() {
    return (
        <nav
            className={`flex w-3/4 z-index items-center justify-between text-white p-4 md:px-20 lg:px-60`}
        >
            <div className="text-xl font-bold">
                <Logo />
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
                </a>
            </div>
        </nav>
    );
}
