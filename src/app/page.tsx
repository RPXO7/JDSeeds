import Link from 'next/link';
import Image from 'next/image';
import { products, getAllCategories } from '@/data/products';
import { NewsletterSection } from '@/components/newsletter-section';

export default function HomePage() {
  const categories = getAllCategories();
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium Quality Seeds for Superior Yields
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
                JD SEEDS - Your trusted partner in agriculture. We provide high-quality, certified seeds that help farmers achieve better harvests and sustainable farming practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-block bg-[#7ED957] text-[#1B5E20] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#6BC849] transition-colors text-center"
                >
                  Explore Products
                </Link>
                <Link
                  href="/contact"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#1B5E20] transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative h-64 lg:h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#7ED957]/20 rounded-full blur-3xl"></div>
              <Image
                src="/assets/brands/jd-seeds.png"
                alt="JD SEEDS"
                width={400}
                height={400}
                className="relative z-10 object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose JD SEEDS?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to providing farmers with the best quality seeds backed by years of research and expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#7ED957]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                High Germination Rate
              </h3>
              <p className="text-gray-600">
                Our seeds are tested for superior germination rates, ensuring maximum yield potential.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#7ED957]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Certified
              </h3>
              <p className="text-gray-600">
                All our seeds meet strict quality standards and are certified by agricultural authorities.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#7ED957]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Research-Backed
              </h3>
              <p className="text-gray-600">
                Developed through extensive research and field trials for optimal performance.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#7ED957]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Farmer Support
              </h3>
              <p className="text-gray-600">
                Dedicated support team to help farmers with agronomy advice and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quality seeds across diverse categories to meet all your agricultural needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/products?category=${encodeURIComponent(category)}`}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#7ED957] group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-[#1B5E20] group-hover:text-[#2E7D32] transition-colors">
                    {category}
                  </h3>
                  <span className="text-[#7ED957] group-hover:translate-x-2 transition-transform">→</span>
                </div>
                <p className="text-gray-600">
                  Explore our premium {category.toLowerCase()} collection with varieties suited for different seasons and growing conditions.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our top-performing seed varieties trusted by farmers across the region
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#7ED957] group"
              >
                <div className="relative h-48 bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm bg-[#FF8A00] text-white px-3 py-1 rounded-full font-medium">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-2 group-hover:text-[#1B5E20] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center text-[#1B5E20] font-medium group-hover:text-[#2E7D32] transition-colors">
                    View Details
                    <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block bg-[#1B5E20] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2E7D32] transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications & Quality Standards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certified Quality Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meeting the highest standards in seed production and quality assurance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#7ED957]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Assured
              </h3>
              <p className="text-gray-600 text-sm">
                All seeds undergo rigorous quality testing and meet industry standards
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#7ED957]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                High Germination
              </h3>
              <p className="text-gray-600 text-sm">
                Superior germination rates tested and verified for better yields
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#7ED957]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Industry Certified
              </h3>
              <p className="text-gray-600 text-sm">
                Certified by leading agricultural authorities and research institutions
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#7ED957]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Safe & Reliable
              </h3>
              <p className="text-gray-600 text-sm">
                Properly stored and handled seeds ensuring maximum viability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Seed Production Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From research to your farm - ensuring quality at every step
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1B5E20] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Research & Development</h3>
              <p className="text-gray-600 text-sm">Continuous research to develop superior seed varieties</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1B5E20] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Testing</h3>
              <p className="text-gray-600 text-sm">Rigorous testing for germination, purity, and viability</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1B5E20] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Processing & Packaging</h3>
              <p className="text-gray-600 text-sm">Careful processing and secure packaging for optimal storage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1B5E20] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Distribution</h3>
              <p className="text-gray-600 text-sm">Efficient distribution network to reach farmers nationwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Farmers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of farmers across India
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "JD SEEDS has transformed our farming. The germination rate is excellent and the yields have increased significantly."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Rajesh Kumar, Farmer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Quality seeds with great support. The team helped us with proper agronomy practices. Highly recommended!"
              </p>
              <p className="text-sm font-semibold text-gray-900">- Priya Sharma, Agriculturalist</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Best seed quality in the market. Our harvest has been consistently good for the past three seasons."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Amit Patel, Farm Owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <NewsletterSection />
    </div>
  );
}
