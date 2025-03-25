"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Building2, Building } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

const features = [
  {
    title: "We Build Your Dream House",
    description: "Turn your vision into reality with our expert home construction services.",
    icon: <Home className="h-12 w-12 text-secondary" />,
    image: "/Dream-Home.jpeg?height=400&width=600",
  },
  {
    title: "Villa Constructions",
    description: "Luxury villa construction with premium materials and craftsmanship.",
    icon: <Building2 className="h-12 w-12 text-secondary" />,
    image: "/villa.png?height=400&width=600",
  },
  {
    title: "Commercial Constructions",
    description: "Professional commercial building solutions for businesses of all sizes.",
    icon: <Building className="h-12 w-12 text-secondary" />,
    image: "/commercial.png?height=400&width=600",
  },
]

const ImageLayoutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Expertise</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction and design solutions for residential and commercial projects
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} delay={index * 200} className="h-full">
              <motion.div
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="h-full overflow-hidden hover:border-secondary">
                  <div className="relative h-64 overflow-hidden group">
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/40 flex items-center justify-center">
                      <div className="text-white p-4 text-center transform transition-transform duration-500 group-hover:scale-110">
                        {feature.icon}
                        <h3 className="text-xl font-bold mt-2">{feature.title}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 bg-white">
                    <p className="text-gray-700">{feature.description}</p>
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

export default ImageLayoutSection

