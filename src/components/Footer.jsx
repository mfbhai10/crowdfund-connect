const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center py-4 mt-10 border-t dark:border-gray-700">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} CrowdFund Connect. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="/about" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
          About
        </a>
        <a href="/contact" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
          Contact
        </a>
        <a href="/terms" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
          Terms
        </a>
      </div>
    </footer>
  );
};

export default Footer;