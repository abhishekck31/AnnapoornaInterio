"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

const testimonials = [
  {
    name: "John Doe",
    position: "Homeowner",
    testimonial:
      "Annapoorna Interio transformed our house into a dream home. Their attention to detail and commitment to quality is unmatched. We couldn't be happier with the results!",
    image: "/user.png?height=100&width=100",
  },
  {
    name: "Jane Smith",
    position: "Business Owner",
    testimonial:
      "Working with Annapoorna Interio for our office renovation was a fantastic experience. They understood our requirements perfectly and delivered a space that enhances productivity and impresses our clients.",
    image: "/user.png?height=100&width=100",
  },
  {
    name: "Robert Johnson",
    position: "Property Developer",
    testimonial:
      "As a property developer, I've worked with many interior design firms, but Annapoorna Interio stands out for their professionalism, creativity, and reliability. They're now our go-to partners for all our projects.",
    image: "/user.png?height=100&width=100",
  },
  {
    name: "Sarah Williams",
    position: "Restaurant Owner",
    testimonial:
      "The team at Annapoorna Interio designed our restaurant with such creativity and functionality. Our customers frequently compliment the ambiance, which has significantly contributed to our success.",
    image: "/user.png?height=100&width=100",
  },
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied clients about their experience working with us
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <Card className="bg-gray-50 border-none shadow-lg">
                    <CardContent className="p-8 md:p-12">
                      <Quote className="h-16 w-16 text-secondary/30 mb-6" />
                      <p className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                        "{testimonials[currentIndex].testimonial}"
                      </p>
                      <div className="flex items-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-secondary/20 rounded-full transform -rotate-6"></div>
                          <img
                            src={testimonials[currentIndex].image || "/placeholder.svg"}
                            alt={testimonials[currentIndex].name}
                            className="h-16 w-16 rounded-full object-cover relative z-10 border-2 border-white"
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold text-lg text-primary">{testimonials[currentIndex].name}</h4>
                          <p className="text-secondary">{testimonials[currentIndex].position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </motion.button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-secondary w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default TestimonialsSection

