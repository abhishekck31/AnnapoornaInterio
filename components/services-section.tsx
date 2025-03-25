"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Briefcase, Building, Paintbrush, Warehouse, Package } from "lucide-react"
import { motion } from "framer-motion"
import ScrollAnimation from "@/components/scroll-animation"

const services = [
  {
    title: "Home Interior",
    icon: <Home className="h-10 w-10 text-secondary" />,
    description: "Transform your living spaces with our expert home interior design services.",
  },
  {
    title: "Office Interior",
    icon: <Briefcase className="h-10 w-10 text-secondary" />,
    description: "Create productive and inspiring workspaces with our office interior solutions.",
  },
  {
    title: "Construction",
    icon: <Building className="h-10 w-10 text-secondary" />,
    description: "Build your dream property with our professional construction services.",
  },
  {
    title: "Renovation",
    icon: <Paintbrush className="h-10 w-10 text-secondary" />,
    description: "Revitalize your existing spaces with our comprehensive renovation services.",
  },
  {
    title: "Pre-engineered Building",
    icon: <Warehouse className="h-10 w-10 text-secondary" />,
    description: "Efficient and cost-effective pre-engineered building solutions for your needs.",
  },
  {
    title: "Products",
    icon: <Package className="h-10 w-10 text-secondary" />,
    description: "Quality products including UPVC windows, doors, and more for your projects.",
  },
]

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive interior design and construction solutions tailored to your needs
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <motion.div
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="h-full"
              >
                <Card className="h-full transition-all duration-300 hover:border-secondary overflow-hidden shine-effect">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-primary/10 transform transition-transform duration-300 hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

