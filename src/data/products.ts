import type { Product } from '@/lib/schemas/product';

export const products: Product[] = [
  {
    id: '1000',
    slug: 'bhinda',
    name: 'Bhinda',
    category: 'Vegetable Seeds',
    image: '/assets/brands/jd-seeds.png',
    description: 'High-yield hybrid okra. Suited for monsoon, winter, and summer with well-drained sandy loam soils.',
    features: ['Multiple sowing windows', 'Harvest 45–60 days', 'Good fruit quality'],
    germinationRate: 85,
    stock: 100,
    details: {
      growingConditions: 'Well-drained sandy loam soils with good organic matter. Suitable for monsoon, winter, and summer seasons.',
      yieldEstimates: 'Average yield of 12-15 tons per hectare under optimal conditions.',
      packaging: 'Available in 100g, 250g, 500g, and 1kg packs. Properly sealed for maximum viability.',
    },
    additionalInfo: {
      keyPoints: [
        'High-yield hybrid variety',
        'Multiple sowing windows throughout the year',
        'Resistant to common diseases',
        'Good fruit quality and shelf life',
      ],
      agronomy: {
        soil: 'Well-drained sandy loam to loam soil with pH 6.0-7.5. Good organic matter content preferred.',
        irrigation: 'First irrigation immediately after sowing. Subsequent irrigations at 5-8 days interval in summer, 10-12 days in winter. Avoid waterlogging.',
        sowing: {
          preparation: '2-3 ploughings followed by leveling. Ensure good soil moisture at sowing time.',
          depth: '2-3 cm',
          spacing: 'Monsoon: 60 × 30 cm; Summer: 45 × 20 cm',
          methods: ['Line sowing in rows', 'Sowing behind plough', 'Raised beds in monsoon'],
          timing: ['Monsoon: June-July', 'Winter: September-December', 'Summer: January-March'],
          seedRate: 'Line sowing: 4-6 kg/ha; Broadcasting: 8-10 kg/ha',
        },
        harvesting: 'Start picking 45-60 days after sowing depending on variety. Pick tender pods regularly every 3-4 days.',
        postCutting: 'Harvested pods should be stored in cool, dry place. Use within 2-3 days for best quality.',
        fertilizer: 'Basal: N:P:K 100:50:50 kg/ha. Top dressing: 50 kg N/ha after first picking. FYM 5-10 tons/ha during land preparation.',
        weedControl: 'Start intercultivation 25 days after sowing. Repeat 2-3 times at 15-20 days interval. Manual weeding as needed.',
        pestManagement: 'Yellow vein mosaic (whitefly transmitted): Spray Dimethoate 0.03% at 15 and 30 days. Powdery mildew: Spray Malathion 0.05% at 15 days and Dimethoate 0.03% at 25-30 days.',
      },
    },
  },
  {
    id: '1001',
    slug: 'gawar',
    name: 'Gawar',
    category: 'Vegetable Seeds',
    image: '/assets/brands/jd-seeds.png',
    description: 'Cluster bean suited to sandy loam to clay loam; salinity tolerant.',
    features: ['Kharif & summer', '18–20 kg/ha seed rate', 'Harvest tender pods 45–60 DAS'],
    germinationRate: 80,
    stock: 150,
    details: {
      growingConditions: 'Sandy loam to clay loam soil with good drainage. pH 7-8.5. Salinity tolerant.',
      yieldEstimates: 'Tender pods: 8-12 tons/ha. Dry seeds: 1.5-2 tons/ha under good management.',
      packaging: 'Available in 500g, 1kg, and 5kg packs. Treated with fungicide for better germination.',
    },
    additionalInfo: {
      keyPoints: [
        'Salinity tolerant variety',
        'Suitable for Kharif and summer seasons',
        'Good pod quality',
        'Disease resistant',
      ],
      agronomy: {
        soil: 'Sandy loam to clay loam with good drainage. pH 7-8.5. Salinity tolerant.',
        irrigation: 'Summer crop: 3-4 irrigations. Kharif: Usually rainfed, but irrigation during dry spells.',
        sowing: {
          preparation: '2-3 ploughings for fine tilth. Add 10-15 tons/ha FYM during last ploughing. Treat seeds with Rhizobium culture and Carbendazim 2g/kg.',
          depth: '2-3 cm',
          spacing: 'Row spacing: 45-60 cm; Plant spacing: 20-30 cm',
          methods: ['Line sowing', 'Broadcasting'],
          timing: ['Kharif: June-July', 'Summer (irrigated): February-March'],
          seedRate: '18-20 kg/ha',
        },
        harvesting: 'Start picking tender pods 45-60 DAS. Pick every 3-4 days. For dry seeds, harvest when pods turn brown.',
        postCutting: 'Tender pods should be marketed fresh. Dry seeds should be properly dried and stored.',
        fertilizer: 'Basal: N:P:K 20:40:40 kg/ha. Apply 10-15 tons/ha FYM during land preparation.',
        weedControl: 'First weeding at 20-25 DAS. Follow up with 1-2 more weedings as needed.',
        pestManagement: 'Powdery mildew: Sulfur 2g/L spray. Bacterial blight: Copper oxychloride 2.5g/L. Pod borer: Indoxacarb 0.5ml/L or Spinosad 0.3ml/L.',
      },
    },
  },
  {
    id: '1003',
    slug: 'choli',
    name: 'Choli',
    category: 'Vegetable Seeds',
    image: '/assets/brands/jd-seeds.png',
    description: 'Cowpea for vegetable use; supports multiple seasons with good agronomy management.',
    features: ['Sowing: broadcasting/line', 'FYM 5–10 t/ha', 'Irrigation critical in summer'],
    germinationRate: 90,
    stock: 200,
    details: {
      growingConditions: 'Well-drained loam to slightly heavy soil. Suitable for Kharif, Rabi (south), and summer seasons.',
      yieldEstimates: 'Green pods: 8-12 tons/ha. Dry seeds: 1.2-1.8 tons/ha. Fodder: 25-30 tons/ha.',
      packaging: 'Available in various pack sizes. Seeds treated for better germination and disease resistance.',
    },
    additionalInfo: {
      keyPoints: [
        'Multi-purpose crop (vegetable, grain, fodder)',
        'Suitable for multiple seasons',
        'Good nutritional value',
        'Drought tolerant after establishment',
      ],
      agronomy: {
        soil: 'Well-drained loam to slightly heavy soil. Avoid waterlogging.',
        irrigation: 'Summer: 5-6 irrigations at 10-15 days interval. Critical stages: Flowering → Pod filling → Vegetative growth.',
        sowing: {
          preparation: '2 ploughings + leveling. Seed treatment: Thiram 2g + Carbendazim 1g/kg; Rhizobium 10g/kg.',
          depth: '2-3 cm',
          spacing: 'Row spacing: 45-30 cm; Plant spacing: 10-15 cm',
          methods: ['Broadcasting (for fodder/green manure)', 'Line sowing in rows (for grain)', 'Dibbling as per purpose/season'],
          timing: ['Kharif: Early June to end July', 'Rabi (south): October-November', 'Summer: March 2-4 weeks (grain), February (fodder)', 'Green manure: Mid-June to first week July'],
          seedRate: 'Grain: 12-18 kg/ha; Fodder/green manure: 30-35 kg/ha; Summer grain: 12-15 kg/ha; Fodder: 40 kg/ha',
        },
        harvesting: 'Vegetable: 45-90 days for green pods. Grain: 90-125 days at full maturity. Fodder: 40-45 days.',
        postCutting: 'For grain: Dry pods, thresh, and sun dry seeds. For fodder: Cut stover and dry.',
        fertilizer: 'With last ploughing: FYM/compost 5-10 tons/ha. Poor soil: 15-20 kg N/ha (OC <0.5%), 50-60 kg P₂O₅/ha, 50-60 kg K₂O/ha (as per soil test).',
        weedControl: 'Keep weed-free for first 25-30 days after sowing for high yield.',
        pestManagement: 'Bacterial blight: Copper oxychloride 0.2% (2g/L). Mosaic (aphid transmitted): Oxydemeton-methyl 1ml/L or Imidacloprid 0.2ml/L; repeat after 10 days. Powdery mildew: Wettable sulfur 3g/L or Carbendazim 1g/L. Pod borer: 2% Methyl parathion 25-30 kg/ha dusting or Quinalphos 2ml/L. Hairy caterpillar: Chlorpyrifos/Quinalphos 2ml/L. Aphid/Green leaf hopper: Oxydemeton-methyl 1ml/L or Dimethoate 1.7ml/L.',
      },
    },
  },
];

export function getAllCategories(): string[] {
  const categorySet = new Set(products.map((p) => p.category));
  return Array.from(categorySet);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
