export default function Footer() {
    return (
      <footer className="w-full bg-gray-800 text-white py-4 md:py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm md:text-base mb-4 md:mb-0">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 text-sm md:text-base"
            >
              Twitter
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 text-sm md:text-base"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 text-sm md:text-base"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }