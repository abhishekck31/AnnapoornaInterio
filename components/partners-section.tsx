"use client"

import { motion } from "framer-motion"
import ScrollAnimation from "@/components/scroll-animation"

const partners = [
  { name: "Partner 1", logo: "/bharatBenz.png?height=100&width=200" },
  { name: "Partner 2", logo: "/infosys.png?height=100&width=200" },
  { name: "Partner 3", logo: "/RCB.png?height=100&width=200" },
  { name: "Partner 4", logo: "/Swaraj.png?height=100&width=200" },
  { name: "Partner 5", logo: "/mercedes.png?height=100&width=200" },
  { name: "Partner 6", logo: "/unacademy.png?height=100&width=200" },
]

const PartnersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Trusted Partners & Clients</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver exceptional quality and service
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-h-16 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default PartnersSection

