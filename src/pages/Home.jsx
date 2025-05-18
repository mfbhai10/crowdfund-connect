import HowItWorks from "../components/HowItWorks";
import FundingEvents from "../components/FundingEvents";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const scrollToCampaigns = () => {
    const section = document.getElementById("campaigns");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    //Scroll to top when landing on home
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [text] = useTypewriter({
    words: [
      "Support a Cause.",
      "Empower Communities.",
      "Donate Virtual Coins.",
      "Change Lives, Click by Click."
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat min-h-[80vh] text-white relative"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 min-h-[80vh] flex flex-col justify-center items-center px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to CrowdFund Connect
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-2xl h-[32px] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            {text}<span className="blinking-cursor">|</span>
          </motion.p>

          <motion.button
            onClick={scrollToCampaigns}
            className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See Campaigns
          </motion.button>

          {/* 🔽 Scroll Down Icon */}
          <motion.div
            className="absolute bottom-6 animate-bounce text-3xl"
            onClick={scrollToCampaigns}
            whileHover={{ scale: 1.2 }}
            style={{ cursor: "pointer" }}
          >
            ⬇️
          </motion.div>
        </div>
      </div>

      <HowItWorks />
      <div id="campaigns">
        <FundingEvents />
      </div>
    </div>
  );
};

export default Home;
