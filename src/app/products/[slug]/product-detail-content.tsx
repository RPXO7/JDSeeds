'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/schemas/product';
import { useI18n } from '@/lib/i18n/client';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { 
  FaArrowLeft, FaSeedling, FaLeaf, FaWater, FaSun, FaChartLine, 
  FaListUl, FaFlask, FaSpa, FaCalendarAlt, 
  FaClipboardList, FaCut, FaRunning, FaPrescriptionBottleAlt, FaShieldAlt 
} from 'react-icons/fa';

interface ProductDetailContentProps {
  product: Product;
  showBackLink?: boolean;
}

// This will be populated with product translations
// Structure: { [slug]: { [locale]: { name, description, ... } } }
let productTranslations: Record<string, Record<string, any>> = {};

// Function to load product translations
async function loadProductTranslations(slug: string, locale: string) {
  try {
    const response = await fetch(`/locales/${locale}/products.json`);
    const data = await response.json();
    return data[slug] || {};
  } catch {
    return {};
  }
}

// Function to get translated product
function getTranslatedProduct(product: Product, locale: string, translations: any): Product {
  if (!translations || Object.keys(translations).length === 0) {
    return product; // Return original if no translations
  }

  return {
    ...product,
    name: translations.name || product.name,
    description: translations.description || product.description,
    features: translations.features || product.features,
    details: translations.details ? {
      ...product.details,
      ...translations.details,
    } : product.details,
    additionalInfo: translations.additionalInfo ? {
      ...product.additionalInfo,
      keyPoints: translations.additionalInfo.keyPoints || product.additionalInfo?.keyPoints,
      agronomy: translations.additionalInfo.agronomy ? {
        ...product.additionalInfo?.agronomy,
        ...translations.additionalInfo.agronomy,
        sowing: translations.additionalInfo.agronomy.sowing ? {
          ...product.additionalInfo?.agronomy?.sowing,
          ...translations.additionalInfo.agronomy.sowing,
        } : product.additionalInfo?.agronomy?.sowing,
      } : product.additionalInfo?.agronomy,
    } : product.additionalInfo,
  };
}

export function ProductDetailContent({ product, showBackLink = true }: ProductDetailContentProps) {
  const { locale, t } = useI18n();
  const [translatedProduct, setTranslatedProduct] = useState(product);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadTranslations() {
      setIsLoading(true);
      const translations = await loadProductTranslations(product.slug, locale);
      const translated = getTranslatedProduct(product, locale, translations);
      setTranslatedProduct(translated);
      setIsLoading(false);
    }
    loadTranslations();
  }, [product, locale]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('product.notFound', 'Product Not Found')}</h1>
        <p className="text-gray-600 mb-8">{t('product.notFoundDesc', 'The product you are looking for does not exist or has been removed.')}</p>
        <Link
          href="/products"
          className="flex items-center bg-[#1B5E20] text-white px-6 py-3 rounded-lg hover:bg-[#2E7D32] transition duration-300"
        >
          <FaArrowLeft className="mr-2" /> {t('product.backToProducts', 'Back to Products')}
        </Link>
      </div>
    );
  }

  const currentProduct = isLoading ? product : translatedProduct;
  const featuresList = Array.isArray(currentProduct?.additionalInfo?.keyPoints) && currentProduct.additionalInfo.keyPoints.length > 0
    ? currentProduct.additionalInfo.keyPoints
    : currentProduct.features;

  return (
    <div className="min-h-screen bg-white">
      {/* Language Switcher - Top Right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-end">
        <LanguageSwitcher />
      </div>

      {showBackLink && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/products"
            className="inline-flex items-center text-[#1B5E20] hover:text-[#FF8A00] transition duration-300"
          >
            <FaArrowLeft className="mr-2" />
            {t('product.backToProducts', 'Back to Products')}
          </Link>
        </div>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Product Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg bg-gray-100">
            <Image
              src={currentProduct.image}
              alt={currentProduct.name}
              fill
              style={{ objectFit: 'contain' }}
              priority
              className="hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div>
            <div className="flex items-center mb-2">
              <span className="text-sm bg-[#FF8A00] text-white px-3 py-1 rounded-full">
                {currentProduct.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {currentProduct.name}
            </h1>

            <div className="flex items-center mb-4 flex-wrap gap-4">
              {currentProduct.germinationRate && (
                <div className="flex items-center">
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#1B5E20] rounded-full"
                      style={{ width: `${currentProduct.germinationRate}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">{currentProduct.germinationRate}% {t('product.germination', 'Germination')}</span>
                </div>
              )}

              {currentProduct.stock !== undefined && (
                <div className="flex items-center">
                  <span className={`inline-block h-3 w-3 rounded-full mr-1 ${
                    currentProduct.stock > 0 ? 'bg-green-500' : 'bg-red-500'
                  }`}></span>
                  <span className="text-sm font-medium">
                    {currentProduct.stock > 0 ? t('product.inStock', 'In Stock') : t('product.outOfStock', 'Out of Stock')}
                  </span>
                </div>
              )}
            </div>

            <p className="text-gray-700 mb-6">{currentProduct.description}</p>

            {Array.isArray(featuresList) && featuresList.length > 0 && (
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-[#1B5E20] mb-3">{t('product.keyFeatures', 'Key Features')}</h3>
                <ul className="space-y-2">
                  {featuresList.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaSeedling className="text-[#FF8A00] mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Growing Information */}
        {currentProduct.details && (
          <div className="my-16">
            <h2 className="text-2xl font-bold text-[#1B5E20] mb-8 text-center">{t('product.growingInfo', 'Growing Information')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentProduct.details.growingConditions && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#7ED957]/20 flex items-center justify-center mr-3">
                      <FaSun className="text-[#1B5E20]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{t('product.growingConditions', 'Growing Conditions')}</h3>
                  </div>
                  <p className="text-gray-700">
                    {currentProduct.details.growingConditions}
                  </p>
                </div>
              )}

              {currentProduct.details.yieldEstimates && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#7ED957]/20 flex items-center justify-center mr-3">
                      <FaChartLine className="text-[#1B5E20]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{t('product.yieldEstimates', 'Yield Estimates')}</h3>
                  </div>
                  <p className="text-gray-700">
                    {currentProduct.details.yieldEstimates}
                  </p>
                </div>
              )}

              {currentProduct.details.packaging && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#7ED957]/20 flex items-center justify-center mr-3">
                      <FaLeaf className="text-[#1B5E20]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{t('product.packaging', 'Packaging & Usage')}</h3>
                  </div>
                  <p className="text-gray-700">
                    {currentProduct.details.packaging}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Agronomy Section */}
        {currentProduct.additionalInfo?.agronomy && (
          <div className="my-16">
            <h2 className="text-2xl font-bold text-[#1B5E20] mb-8 text-center">{t('product.agronomy', 'Agronomy & Management')}</h2>

            {/* Soil and Irrigation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {currentProduct.additionalInfo.agronomy.soil && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#7ED957]/20 flex items-center justify-center mr-3">
                      <FaFlask className="text-[#1B5E20]" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">{t('product.soil', 'Soil')}</h4>
                  </div>
                  <p className="text-gray-700">{currentProduct.additionalInfo.agronomy.soil}</p>
                </div>
              )}

              {currentProduct.additionalInfo.agronomy.irrigation && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#7ED957]/20 flex items-center justify-center mr-3">
                      <FaWater className="text-[#1B5E20]" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">{t('product.waterIrrigation', 'Water & Irrigation')}</h4>
                  </div>
                  <p className="text-gray-700">{currentProduct.additionalInfo.agronomy.irrigation}</p>
                </div>
              )}
            </div>

            {/* Sowing Details */}
            {currentProduct.additionalInfo.agronomy.sowing && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#7ED957]/20 flex items-center justify-center mr-3">
                    <FaSpa className="text-[#1B5E20]" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">{t('product.sowing', 'Sowing')}</h4>
                </div>

                <div className="space-y-4">
                  {currentProduct.additionalInfo.agronomy.sowing.preparation && (
                    <div>
                      <h5 className="font-medium text-gray-800 mb-1">{t('product.preparation', 'Preparation')}</h5>
                      <p className="text-gray-700">{currentProduct.additionalInfo.agronomy.sowing.preparation}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentProduct.additionalInfo.agronomy.sowing.depth && (
                      <div>
                        <h5 className="font-medium text-gray-800 mb-1">{t('product.sowingDepth', 'Sowing Depth')}</h5>
                        <p className="text-gray-700">{currentProduct.additionalInfo.agronomy.sowing.depth}</p>
                      </div>
                    )}

                    {currentProduct.additionalInfo.agronomy.sowing.spacing && (
                      <div>
                        <h5 className="font-medium text-gray-800 mb-1">{t('product.spacing', 'Spacing')}</h5>
                        <p className="text-gray-700">{currentProduct.additionalInfo.agronomy.sowing.spacing}</p>
                      </div>
                    )}
                  </div>

                  {currentProduct.additionalInfo.agronomy.sowing.methods && currentProduct.additionalInfo.agronomy.sowing.methods.length > 0 && (
                    <div>
                      <h5 className="font-medium text-gray-800 mb-1">{t('product.sowingMethods', 'Sowing Methods')}</h5>
                      <ul className="space-y-1">
                        {currentProduct.additionalInfo.agronomy.sowing.methods.map((method, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#FF8A00] mr-2">•</span>
                            <span className="text-gray-700">{method}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {currentProduct.additionalInfo.agronomy.sowing.timing && currentProduct.additionalInfo.agronomy.sowing.timing.length > 0 && (
                    <div>
                      <h5 className="font-medium text-gray-800 mb-1">{t('product.sowingTime', 'Sowing Time')}</h5>
                      <div className="flex flex-wrap gap-2">
                        {currentProduct.additionalInfo.agronomy.sowing.timing.map((time, index) => (
                          <span
                            key={index}
                            className="bg-[#7ED957]/10 text-[#1B5E20] px-3 py-1 rounded-full text-sm flex items-center border border-[#7ED957]/20"
                          >
                            <FaCalendarAlt className="mr-1" /> {time}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentProduct.additionalInfo.agronomy.sowing.seedRate && (
                    <div>
                      <h5 className="font-medium text-gray-800 mb-1">{t('product.seedRate', 'Seed Rate')}</h5>
                      <p className="text-gray-700">{currentProduct.additionalInfo.agronomy.sowing.seedRate}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Harvesting and Post-Cutting */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {currentProduct.additionalInfo.agronomy.harvesting && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#7ED957]/20 flex items-center justify-center mr-3">
                      <FaCut className="text-[#1B5E20]" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">{t('product.harvesting', 'Harvesting')}</h4>
                  </div>
                  <p className="text-gray-700">
                    {currentProduct.additionalInfo.agronomy.harvesting}
                  </p>
                </div>
              )}

              {currentProduct.additionalInfo.agronomy.postCutting && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#7ED957]/20 flex items-center justify-center mr-3">
                      <FaRunning className="text-[#1B5E20]" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">{t('product.postCutting', 'Post-Cutting Activities')}</h4>
                  </div>
                  <p className="text-gray-700">
                    {currentProduct.additionalInfo.agronomy.postCutting}
                  </p>
                </div>
              )}
            </div>

            {/* Fertilizer, Weed Control, Pest Management */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentProduct.additionalInfo.agronomy.fertilizer && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#7ED957]/20 flex items-center justify-center mr-3">
                      <FaPrescriptionBottleAlt className="text-[#1B5E20]" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">{t('product.fertilizer', 'Fertilizer')}</h4>
                  </div>
                  <p className="text-gray-700">
                    {currentProduct.additionalInfo.agronomy.fertilizer}
                  </p>
                </div>
              )}

              {currentProduct.additionalInfo.agronomy.weedControl && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#7ED957]/20 flex items-center justify-center mr-3">
                      <FaClipboardList className="text-[#1B5E20]" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">{t('product.weedControl', 'Weed Control')}</h4>
                  </div>
                  <p className="text-gray-700">
                    {currentProduct.additionalInfo.agronomy.weedControl}
                  </p>
                </div>
              )}

              {currentProduct.additionalInfo.agronomy.pestManagement && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#7ED957]/20 flex items-center justify-center mr-3">
                      <FaShieldAlt className="text-[#1B5E20]" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">{t('product.pestManagement', 'Pest & Disease Management')}</h4>
                  </div>
                  <p className="text-gray-700">
                    {currentProduct.additionalInfo.agronomy.pestManagement}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Download Spec Section */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t('product.downloadSpec', 'Download Specification Sheet')}
          </h3>
          <button className="bg-[#1B5E20] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2E7D32] transition-colors">
            {t('product.downloadPDF', 'Download PDF')}
          </button>
        </div>
      </section>
    </div>
  );
}
