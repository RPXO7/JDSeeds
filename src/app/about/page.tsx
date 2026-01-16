import Image from 'next/image';

export const metadata = {
  title: 'About Us - JD SEEDS',
  description: 'Learn about JD SEEDS - Your trusted partner in agriculture. Premium quality seeds for superior yields.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About JD SEEDS</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Excellence in seed production since our founding. Committed to providing farmers with the highest quality seeds.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                JD SEEDS was founded with a vision to revolutionize agriculture in India by providing farmers with premium quality seeds that deliver superior yields. We understand the challenges farmers face and are committed to supporting them every step of the way.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                With years of experience in seed research, development, and production, we have built a reputation for excellence in the agricultural industry. Our team of experts works tirelessly to ensure that every seed we produce meets the highest standards of quality and performance.
              </p>
              <p className="text-lg text-gray-700">
                Today, JD SEEDS is a trusted name among farmers across India, known for our commitment to quality, innovation, and farmer support.
              </p>
            </div>
            <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/assets/brands/jd-seeds.png"
                alt="JD SEEDS"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#7ED957]/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To empower farmers with high-quality seeds and agricultural knowledge, enabling them to achieve sustainable and profitable farming practices while contributing to food security.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#7ED957]/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To become India's leading seed manufacturer, recognized for innovation, quality, and farmer-centric approach, while promoting sustainable agriculture practices nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1B5E20] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600">Uncompromising commitment to seed quality and purity</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1B5E20] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🔬
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Continuous research and development for better varieties</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1B5E20] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🤝
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Farmer Support</h3>
              <p className="text-gray-600">Dedicated support to help farmers succeed</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1B5E20] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🌱
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">Promoting sustainable farming practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
            <p className="text-lg text-gray-600">Meeting and exceeding industry standards</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ISO Certified</h3>
              <p className="text-gray-600">Quality management systems certified</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Government Approved</h3>
              <p className="text-gray-600">Approved by agricultural authorities</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Tested</h3>
              <p className="text-gray-600">Rigorous testing and quality assurance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

