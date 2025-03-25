import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Briefcase, Building, Paintbrush, Warehouse, Package } from "lucide-react"

const services = [
  {
    id: "home-interior",
    title: "Home Interior",
    icon: <Home className="h-12 w-12 text-primary" />,
    description:
      "Transform your living spaces with our expert home interior design services. We create beautiful, functional, and personalized interiors that reflect your style and meet your needs.",
    features: [
      "Custom furniture design and selection",
      "Color scheme and material consultation",
      "Space planning and layout optimization",
      "Lighting design and fixtures",
      "Flooring and wall treatments",
      "Accessories and decor selection",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "office-interior",
    title: "Office Interior",
    icon: <Briefcase className="h-12 w-12 text-primary" />,
    description:
      "Create productive and inspiring workspaces with our office interior solutions. We design offices that enhance productivity, reflect your brand identity, and impress your clients.",
    features: [
      "Workspace planning and layout",
      "Ergonomic furniture selection",
      "Brand integration in design",
      "Meeting and collaborative spaces",
      "Reception and waiting areas",
      "Employee wellness considerations",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "construction",
    title: "Construction",
    icon: <Building className="h-12 w-12 text-primary" />,
    description:
      "Build your dream property with our professional construction services. From residential homes to commercial buildings, we handle all aspects of construction with quality and precision.",
    features: [
      "Residential and commercial construction",
      "Architectural planning and design",
      "Structural engineering",
      "Project management and supervision",
      "Quality material sourcing",
      "Regulatory compliance and permits",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "renovation",
    title: "Renovation",
    icon: <Paintbrush className="h-12 w-12 text-primary" />,
    description:
      "Revitalize your existing spaces with our comprehensive renovation services. We breathe new life into old structures while preserving their character and enhancing functionality.",
    features: [
      "Complete home renovations",
      "Kitchen and bathroom remodeling",
      "Structural modifications",
      "Electrical and plumbing upgrades",
      "Flooring and ceiling renovations",
      "Exterior facade improvements",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "pre-engineered-building",
    title: "Pre-engineered Building",
    icon: <Warehouse className="h-12 w-12 text-primary" />,
    description:
      "Efficient and cost-effective pre-engineered building solutions for your needs. Ideal for industrial, commercial, and large-scale projects requiring quick deployment and flexibility.",
    features: [
      "Custom designed steel structures",
      "Warehouses and industrial facilities",
      "Quick assembly and installation",
      "Cost-effective building solutions",
      "Expandable and modifiable structures",
      "Energy-efficient design options",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "products",
    title: "Products",
    icon: <Package className="h-12 w-12 text-primary" />,
    description:
      "Quality products including UPVC windows, doors, and more for your projects. We offer a range of high-quality products to complement our design and construction services.",
    features: [
      "UPVC Windows and Doors",
      "Fire Doors",
      "System Railings",
      "PVC False Ceilings",
      "Workstations",
      "Chairs and Office Furniture",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive interior design and construction solutions tailored to your specific needs
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 mr-4">{service.icon}</div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>

                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer:</h3>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-auto object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

