import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, Container } from "@mui/material";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Mission", href: "#mission" },
    { name: "Events", href: "#events" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">H₂</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-700">Green Hydrogen</h1>
              <p className="text-sm text-blue-600">Hub Viet Nam</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-green-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
            <Button 
              variant="contained" 
              sx={{
                background: 'linear-gradient(45deg, #4ade80 30%, #60a5fa 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #22c55e 30%, #3b82f6 90%)',
                }
              }}
            >
              Join Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <IconButton
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            sx={{ color: 'text.primary' }}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </IconButton>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 pb-4 border-t pt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button 
              variant="contained" 
              fullWidth
              sx={{
                mt: 2,
                background: 'linear-gradient(45deg, #4ade80 30%, #60a5fa 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #22c55e 30%, #3b82f6 90%)',
                }
              }}
            >
              Join Us
            </Button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}