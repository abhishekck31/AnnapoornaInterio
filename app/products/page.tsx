import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const products = [
  {
    id: "upvc-windows-doors",
    title: "UPVC Windows & Doors",
    description:
      "Energy-efficient, durable, and low-maintenance UPVC windows and doors for residential and commercial buildings.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/upvc-windows-doors",
  },
  {
    id: "fire-doors",
    title: "Fire Doors",
    description: "Safety-compliant fire doors designed to prevent the spread of fire and smoke in buildings.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/fire-doors",
  },
  {
    id: "system-railings",
    title: "System Railings",
    description: "Modern, customizable railing systems for staircases, balconies, and other applications.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/system-railings",
  },
  {
    id: "pvc-false-ceilings",
    title: "PVC False Ceilings",
    description: "Lightweight, water-resistant, and easy-to-install PVC false ceiling solutions for various spaces.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/pvc-false-ceilings",
  },
  {
    id: "workstations",
    title: "Workstations",
    description: "Ergonomic and efficient workstation solutions for modern office environments.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/workstations",
  },
  {
    id: "chairs",
    title: "Chairs",
    description: "Comfortable, stylish, and ergonomic chairs for offices, homes, and commercial spaces.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/chairs",
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality products to complement our design and construction services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link href={product.link} key={product.id}>
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <h3 className="text-xl font-bold text-white p-6">{product.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-700">{product.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

