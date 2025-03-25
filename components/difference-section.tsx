"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

const differencePoints = [
  "Expert team with years of industry experience",
  "Personalized approach to every project",
  "High-quality materials and craftsmanship",
  "Transparent pricing and no hidden costs",
  "Timely project completion",
  "Comprehensive after-service support",
]

const DifferenceSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why We Are <span className="text-secondary gradient-text">Different</span>
            </h2>
            <div className="w-20 h-1 bg-secondary mb-6"></div>
            <p className="text-lg text-gray-700 mb-8">
              At Annapoorna Interio, we pride ourselves on our commitment to excellence and customer satisfaction. Our
              approach combines creativity, technical expertise, and attention to detail to deliver exceptional results
              that exceed expectations.
            </p>

            <div className="space-y-4">
              {differencePoints.map((point, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1 bg-secondary/20 p-1 rounded-full group-hover:bg-secondary/40 transition-colors duration-300">
                      <Check className="h-5 w-5 text-secondary" />
                    </div>
                    <p className="ml-3 text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {point}
                    </p>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>

          <ScrollAnimation className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{ y: -5, scale: 1.03 }} transition={{ duration: 0.3 }}>
                <img src="/image1.png?height=300&width=300" alt="Our work 1" className="rounded-lg shadow-lg" />
              </motion.div>
              <motion.div whileHover={{ y: -5, scale: 1.03 }} transition={{ duration: 0.3 }} className="mt-8">
                <img src="/image2.png?height=300&width=300" alt="Our work 2" className="rounded-lg shadow-lg" />
              </motion.div>
              <motion.div whileHover={{ y: -5, scale: 1.03 }} transition={{ duration: 0.3 }}>
                <img src="/image3.png?height=300&width=300" alt="Our work 3" className="rounded-lg shadow-lg" />
              </motion.div>
              <motion.div whileHover={{ y: -5, scale: 1.03 }} transition={{ duration: 0.3 }} className="mt-8">
                <img src="/image4.png?height=300&width=300" alt="Our work 4" className="rounded-lg shadow-lg" />
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default DifferenceSection

