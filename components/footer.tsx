"use client"

import Link from "next/link"
import Image from "next/image"
import { Clock, MapPin, Mail, Phone, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="Annapoorna Interio Logo"
                width={180}
                height={50}
                className="h-12 w-auto bg-white p-1 rounded"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Transforming spaces with innovative design and quality craftsmanship since 2010.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-gray-300 hover:text-secondary transition-colors p-2 bg-white/10 rounded-full"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-gray-300 hover:text-secondary transition-colors p-2 bg-white/10 rounded-full"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-gray-300 hover:text-secondary transition-colors p-2 bg-white/10 rounded-full"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-gray-300 hover:text-secondary transition-colors p-2 bg-white/10 rounded-full"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </motion.a>
            </div>
          </div>

          {/* Open Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Clock className="h-5 w-5 text-secondary mr-2" />
              Open Hours
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-secondary/20 p-1 rounded-full mr-3 mt-0.5">
                  <Clock className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-gray-300">9:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-secondary/20 p-1 rounded-full mr-3 mt-0.5">
                  <Clock className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <p className="font-medium">Saturday</p>
                  <p className="text-gray-300">10:00 AM - 4:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-secondary/20 p-1 rounded-full mr-3 mt-0.5">
                  <Clock className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <p className="font-medium">Sunday</p>
                  <p className="text-gray-300">Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#home-interior"
                  className="text-gray-300 hover:text-secondary transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2 transform transition-transform duration-300 group-hover:scale-150"></span>
                  Home Interior
                </Link>
              </li>
              <li>
                <Link
                  href="/services#office-interior"
                  className="text-gray-300 hover:text-secondary transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2 transform transition-transform duration-300 group-hover:scale-150"></span>
                  Office Interior
                </Link>
              </li>
              <li>
                <Link
                  href="/services#construction"
                  className="text-gray-300 hover:text-secondary transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2 transform transition-transform duration-300 group-hover:scale-150"></span>
                  Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services#renovation"
                  className="text-gray-300 hover:text-secondary transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2 transform transition-transform duration-300 group-hover:scale-150"></span>
                  Renovation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#pre-engineered-building"
                  className="text-gray-300 hover:text-secondary transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2 transform transition-transform duration-300 group-hover:scale-150"></span>
                  Pre-engineered Building
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-secondary transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2 transform transition-transform duration-300 group-hover:scale-150"></span>
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="bg-secondary/20 p-1 rounded-full mr-3 mt-0.5 group-hover:bg-secondary/40 transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-secondary" />
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  123 Design Street, Creative Avenue, City, State, 12345
                </p>
              </li>
              <li className="flex items-center group">
                <div className="bg-secondary/20 p-1 rounded-full mr-3 group-hover:bg-secondary/40 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-secondary" />
                </div>
                <a
                  href="mailto:info@annapoornainterio.com"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  info@annapoornainterio.com
                </a>
              </li>
              <li className="flex items-center group">
                <div className="bg-secondary/20 p-1 rounded-full mr-3 group-hover:bg-secondary/40 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-secondary" />
                </div>
                <a
                  href="mailto:support@annapoornainterio.com"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  support@annapoornainterio.com
                </a>
              </li>
              <li className="flex items-center group">
                <div className="bg-secondary/20 p-1 rounded-full mr-3 group-hover:bg-secondary/40 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-secondary" />
                </div>
                <a href="tel:+1234567890" className="text-gray-300 hover:text-secondary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center group">
                <div className="bg-secondary/20 p-1 rounded-full mr-3 group-hover:bg-secondary/40 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-secondary" />
                </div>
                <a href="tel:+1987654321" className="text-gray-300 hover:text-secondary transition-colors">
                  +1 (987) 654-321
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Annapoorna Interio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

