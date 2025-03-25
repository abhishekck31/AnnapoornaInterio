"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Modern Living Room",
    category: "Home Interior",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Executive Office",
    category: "Office Interior",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Luxury Villa",
    category: "Construction",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Kitchen Renovation",
    category: "Renovation",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Industrial Warehouse",
    category: "Pre-engineered Building",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "UPVC Windows Installation",
    category: "Products",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 7,
    title: "Contemporary Bedroom",
    category: "Home Interior",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 8,
    title: "Open Plan Office",
    category: "Office Interior",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 9,
    title: "Commercial Building",
    category: "Construction",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 10,
    title: "Bathroom Remodel",
    category: "Renovation",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 11,
    title: "Storage Facility",
    category: "Pre-engineered Building",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 12,
    title: "Fire Door Installation",
    category: "Products",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 13,
    title: "Dining Room Design",
    category: "Home Interior",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 14,
    title: "Conference Room",
    category: "Office Interior",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 15,
    title: "Residential Complex",
    category: "Construction",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 16,
    title: "Home Extension",
    category: "Renovation",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 17,
    title: "Manufacturing Plant",
    category: "Pre-engineered Building",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 18,
    title: "PVC Ceiling Installation",
    category: "Products",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 19,
    title: "Modern Kitchen",
    category: "Home Interior",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 20,
    title: "Reception Area",
    category: "Office Interior",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const categories = [
  "All",
  "Home Interior",
  "Office Interior",
  "Construction",
  "Renovation",
  "Pre-engineered Building",
  "Products",
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredGallery =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Gallery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of completed projects and get inspired
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => setSelectedImage(item.id)}
              >
                <CardContent className="p-0 relative group">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-sm">{item.category}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox for selected image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-primary"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="max-w-4xl max-h-[90vh]">
            {galleryItems.find((item) => item.id === selectedImage) && (
              <>
                <img
                  src={galleryItems.find((item) => item.id === selectedImage)?.image || "/placeholder.svg"}
                  alt={galleryItems.find((item) => item.id === selectedImage)?.title}
                  className="max-h-[80vh] max-w-full object-contain"
                />
                <div className="text-white text-center mt-4">
                  <h3 className="text-xl font-bold">{galleryItems.find((item) => item.id === selectedImage)?.title}</h3>
                  <p className="text-gray-300">{galleryItems.find((item) => item.id === selectedImage)?.category}</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}

