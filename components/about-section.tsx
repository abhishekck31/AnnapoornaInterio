"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"

const AboutSection = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation className="relative">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-tl-3xl z-0"></div>
              <img
                src="/About.png?height=600&width=600"
                alt="About Annapoorna Interio"
                className="rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-br-3xl z-0"></div>

              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-xl z-20 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  <p className="font-semibold text-primary">10+ Years Experience</p>
                </div>
              </div>

              <div
                className="absolute -top-8 -right-8 bg-white p-4 rounded-lg shadow-xl z-20 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  <p className="font-semibold text-primary">500+ Projects Completed</p>
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>

          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About <span className="text-secondary">Annapoorna Interio</span>
            </h2>
            <div className="w-20 h-1 bg-secondary mb-6"></div>
            <p className="text-lg text-gray-700 mb-6">
              Annapoorna Interio is a premier interior design and construction company dedicated to transforming spaces
              into functional and aesthetically pleasing environments. With years of experience in the industry, we have
              established ourselves as a trusted name for quality craftsmanship and innovative design solutions.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to create spaces that reflect our clients' personalities and meet their specific needs
              while adhering to the highest standards of quality and sustainability. We believe that every space has the
              potential to be both beautiful and functional, and we work tirelessly to achieve this balance in every
              project we undertake.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our team of skilled professionals brings together expertise in interior design, architecture, and
              construction to deliver comprehensive solutions that exceed expectations. We value transparency,
              communication, and attention to detail in all our endeavors.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Learn More About Us
              </Button>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

