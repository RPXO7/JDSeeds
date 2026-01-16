# Product Translations Structure

This document shows the structure for product translations in all three languages (Gujarati, Hindi, English).

## File Locations
- English: `public/locales/en/products.json`
- Hindi: `public/locales/hi/products.json`
- Gujarati: `public/locales/gu/products.json`

## Structure Format

Each product translation file should follow this structure:

```json
{
  "product-slug": {
    "name": "Product Name in this language",
    "description": "Product description in this language",
    "features": [
      "Feature 1 in this language",
      "Feature 2 in this language",
      "Feature 3 in this language"
    ],
    "details": {
      "growingConditions": "Growing conditions text in this language",
      "yieldEstimates": "Yield estimates text in this language",
      "packaging": "Packaging information in this language"
    },
    "additionalInfo": {
      "keyPoints": [
        "Key point 1 in this language",
        "Key point 2 in this language"
      ],
      "agronomy": {
        "soil": "Soil requirements in this language",
        "irrigation": "Irrigation information in this language",
        "sowing": {
          "preparation": "Preparation instructions in this language",
          "depth": "Sowing depth in this language",
          "spacing": "Spacing information in this language",
          "methods": [
            "Method 1 in this language",
            "Method 2 in this language"
          ],
          "timing": [
            "Timing 1 in this language",
            "Timing 2 in this language"
          ],
          "seedRate": "Seed rate information in this language"
        },
        "harvesting": "Harvesting instructions in this language",
        "postCutting": "Post-cutting activities in this language",
        "fertilizer": "Fertilizer information in this language",
        "weedControl": "Weed control information in this language",
        "pestManagement": "Pest management information in this language"
      }
    }
  }
}
```

## Example for Bhinda Product

### English (en/products.json)
```json
{
  "bhinda": {
    "name": "Bhinda",
    "description": "High-yield hybrid okra. Suited for monsoon, winter, and summer with well-drained sandy loam soils.",
    "features": [
      "Multiple sowing windows",
      "Harvest 45–60 days",
      "Good fruit quality"
    ],
    "details": {
      "growingConditions": "Well-drained sandy loam soils with good organic matter. Suitable for monsoon, winter, and summer seasons.",
      "yieldEstimates": "Average yield of 12-15 tons per hectare under optimal conditions.",
      "packaging": "Available in 100g, 250g, 500g, and 1kg packs. Properly sealed for maximum viability."
    },
    "additionalInfo": {
      "keyPoints": [
        "High-yield hybrid variety",
        "Multiple sowing windows throughout the year",
        "Resistant to common diseases",
        "Good fruit quality and shelf life"
      ],
      "agronomy": {
        "soil": "Well-drained sandy loam to loam soil with pH 6.0-7.5. Good organic matter content preferred.",
        "irrigation": "First irrigation immediately after sowing. Subsequent irrigations at 5-8 days interval in summer, 10-12 days in winter. Avoid waterlogging.",
        "sowing": {
          "preparation": "2-3 ploughings followed by leveling. Ensure good soil moisture at sowing time.",
          "depth": "2-3 cm",
          "spacing": "Monsoon: 60 × 30 cm; Summer: 45 × 20 cm",
          "methods": [
            "Line sowing in rows",
            "Sowing behind plough",
            "Raised beds in monsoon"
          ],
          "timing": [
            "Monsoon: June-July",
            "Winter: September-December",
            "Summer: January-March"
          ],
          "seedRate": "Line sowing: 4-6 kg/ha; Broadcasting: 8-10 kg/ha"
        },
        "harvesting": "Start picking 45-60 days after sowing depending on variety. Pick tender pods regularly every 3-4 days.",
        "postCutting": "Harvested pods should be stored in cool, dry place. Use within 2-3 days for best quality.",
        "fertilizer": "Basal: N:P:K 100:50:50 kg/ha. Top dressing: 50 kg N/ha after first picking. FYM 5-10 tons/ha during land preparation.",
        "weedControl": "Start intercultivation 25 days after sowing. Repeat 2-3 times at 15-20 days interval. Manual weeding as needed.",
        "pestManagement": "Yellow vein mosaic (whitefly transmitted): Spray Dimethoate 0.03% at 15 and 30 days. Powdery mildew: Spray Malathion 0.05% at 15 days and Dimethoate 0.03% at 25-30 days."
      }
    }
  }
}
```

### Gujarati (gu/products.json)
```json
{
  "bhinda": {
    "name": "ભીંડા",
    "description": "ઉચ્ચ ઉપજવાળું હાઇબ્રિડ ભીંડા. ચોમાસું, શિયાળો અને ઉનાળો માટે સારી ડ્રેનેજવાળી રેતાળ દોંભરી જમીન સાથે યોગ્ય.",
    "features": [
      "બહુવિધ વાવણી વિંડો",
      "45-60 દિવસમાં કાપણી",
      "સારી ફળની ગુણવત્તા"
    ],
    "details": {
      "growingConditions": "સારી ઓર્ગેનિક મેટર સાથે સારી ડ્રેનેજવાળી રેતાળ દોંભરી જમીન. ચોમાસું, શિયાળો અને ઉનાળાના સીઝન માટે યોગ્ય.",
      "yieldEstimates": "યોગ્ય પરિસ્થિતિઓ હેઠળ હેક્ટર દીઠ 12-15 ટનની સરેરાશ ઉપજ.",
      "packaging": "100g, 250g, 500g અને 1kg પેકમાં ઉપલબ્ધ. મહત્તમ વિયોગ્યતા માટે યોગ્ય રીતે સીલ કરેલું."
    },
    "additionalInfo": {
      "keyPoints": [
        "ઉચ્ચ ઉપજવાળું હાઇબ્રિડ વિવિધતા",
        "વર્ષભરમાં બહુવિધ વાવણી વિંડો",
        "સામાન્ય રોગો સામે પ્રતિરોધક",
        "સારી ફળની ગુણવત્તા અને શેલ્ફ લાઇફ"
      ],
      "agronomy": {
        "soil": "pH 6.0-7.5 સાથે સારી ડ્રેનેજવાળી રેતાળ દોંભરી થી દોંભરી જમીન. સારી ઓર્ગેનિક મેટર સામગ્રી પસંદ કરવામાં આવે છે.",
        "irrigation": "વાવણી પછી તરત જ પ્રથમ સિંચાઈ. ઉનાળામાં 5-8 દિવસના અંતરે અને શિયાળામાં 10-12 દિવસના અંતરે અનુગામી સિંચાઈ. પાણી ભરાવાથી બચાવો.",
        "sowing": {
          "preparation": "2-3 ખેડ પછી લેવલિંગ. વાવણી સમયે સારી જમીનની ભેજની ખાતરી કરો.",
          "depth": "2-3 સેમી",
          "spacing": "ચોમાસું: 60 × 30 સેમી; ઉનાળો: 45 × 20 સેમી",
          "methods": [
            "હરોળમાં લાઇન વાવણી",
            "હળના પાછળ વાવણી",
            "ચોમાસામાં ઊંચી પાંખડી"
          ],
          "timing": [
            "ચોમાસું: જૂન-જુલાઈ",
            "શિયાળો: સપ્ટેમ્બર-ડિસેમ્બર",
            "ઉનાળો: જાન્યુઆરી-માર્ચ"
          ],
          "seedRate": "લાઇન વાવણી: 4-6 કિગ્રા/હે; છંટકાવ: 8-10 કિગ્રા/હે"
        },
        "harvesting": "વિવિધતા પર આધારિત વાવણી પછી 45-60 દિવસે તુટાણ શરૂ કરો. દર 3-4 દિવસે નિયમિતપણે નરમ શીંગો તોડો.",
        "postCutting": "કાપેલા શીંગો ઠંડા, સૂકા સ્થળે સંગ્રહિત કરવા જોઈએ. શ્રેષ્ઠ ગુણવત્તા માટે 2-3 દિવસમાં ઉપયોગ કરો.",
        "fertilizer": "આધાર: N:P:K 100:50:50 કિગ્રા/હે. ટોપ ડ્રેસિંગ: પ્રથમ તુટાણ પછી 50 કિગ્રા N/હે. જમીન તૈયારી દરમિયાન FYM 5-10 ટન/હે.",
        "weedControl": "વાવણી પછી 25 દિવસે અંતરખેત શરૂ કરો. 15-20 દિવસના અંતરે 2-3 વખત પુનરાવર્તન કરો. જરૂર મુજબ હાથથી નીંદણ.",
        "pestManagement": "પીળો પર્ણ ઝુલસો (વ્હાઇટફ્લાય જન્ય): 15 અને 30 દિવસે ડાયમેથોએટ 0.03% છંટકાવ. પાઉડરી મિલ્ડ્યુ: 15 દિવસે મેલેથીયોન 0.05% અને 25-30 દિવસે ડાયમેથોએટ 0.03% છંટકાવ."
      }
    }
  }
}
```

### Hindi (hi/products.json)
```json
{
  "bhinda": {
    "name": "भिंडी",
    "description": "उच्च उपज वाला हाइब्रिड भिंडी. मानसून, सर्दी और गर्मी के लिए अच्छी जल निकासी वाली रेतीली दोमट मिट्टी के साथ उपयुक्त।",
    "features": [
      "कई बुवाई खिड़कियां",
      "45-60 दिनों में कटाई",
      "अच्छी फल गुणवत्ता"
    ],
    "details": {
      "growingConditions": "अच्छे कार्बनिक पदार्थ के साथ अच्छी जल निकासी वाली रेतीली दोमट मिट्टी। मानसून, सर्दी और गर्मी के मौसम के लिए उपयुक्त।",
      "yieldEstimates": "इष्टतम स्थितियों के तहत प्रति हेक्टेयर 12-15 टन की औसत उपज।",
      "packaging": "100g, 250g, 500g और 1kg पैक में उपलब्ध। अधिकतम व्यवहार्यता के लिए ठीक से सील किया गया।"
    },
    "additionalInfo": {
      "keyPoints": [
        "उच्च उपज वाली हाइब्रिड किस्म",
        "पूरे वर्ष में कई बुवाई खिड़कियां",
        "सामान्य बीमारियों के प्रति प्रतिरोधी",
        "अच्छी फल गुणवत्ता और शेल्फ लाइफ"
      ],
      "agronomy": {
        "soil": "pH 6.0-7.5 के साथ अच्छी जल निकासी वाली रेतीली दोमट से दोमट मिट्टी। अच्छी कार्बनिक पदार्थ सामग्री पसंद की जाती है।",
        "irrigation": "बुवाई के तुरंत बाद पहली सिंचाई। गर्मी में 5-8 दिनों के अंतराल पर और सर्दी में 10-12 दिनों के अंतराल पर बाद की सिंचाई। जलभराव से बचें।",
        "sowing": {
          "preparation": "2-3 जुताई के बाद समतल करना। बुवाई के समय अच्छी मिट्टी की नमी सुनिश्चित करें।",
          "depth": "2-3 सेमी",
          "spacing": "मानसून: 60 × 30 सेमी; गर्मी: 45 × 20 सेमी",
          "methods": [
            "पंक्तियों में लाइन बोनी",
            "हल के पीछे बोनी",
            "मानसून में उठी हुई क्यारियां"
          ],
          "timing": [
            "मानसून: जून-जुलाई",
            "सर्दी: सितंबर-दिसंबर",
            "गर्मी: जनवरी-मार्च"
          ],
          "seedRate": "लाइन बोनी: 4-6 किग्रा/हे; प्रसारण: 8-10 किग्रा/हे"
        },
        "harvesting": "किस्म के आधार पर बुवाई के 45-60 दिनों बाद तुड़ाई शुरू करें। हर 3-4 दिनों में नियमित रूप से नरम फलियां तोड़ें।",
        "postCutting": "कटे हुए फलियों को ठंडे, सूखे स्थान पर संग्रहीत किया जाना चाहिए। सर्वोत्तम गुणवत्ता के लिए 2-3 दिनों के भीतर उपयोग करें।",
        "fertilizer": "आधार: N:P:K 100:50:50 किग्रा/हे. टॉप ड्रेसिंग: पहली तुड़ाई के बाद 50 किग्रा N/हे. भूमि तैयारी के दौरान FYM 5-10 टन/हे।",
        "weedControl": "बुवाई के 25 दिनों बाद अंतर-निर्गलन शुरू करें। 15-20 दिनों के अंतराल पर 2-3 बार दोहराएं। आवश्यकता अनुसार मैनुअल निराई।",
        "pestManagement": "पीला पर्ण झुलसा (व्हाइटफ्लाई जनित): 15 और 30 दिनों पर डाइमेथोएट 0.03% का छिड़काव। पाउडरी मिल्ड्यू: 15 दिनों पर मैलाथियान 0.05% और 25-30 दिनों पर डाइमेथोएट 0.03% का छिड़काव।"
      }
    }
  }
}
```

## Notes

1. **Product Slug**: Use the same slug as defined in `src/data/products.ts` (e.g., "bhinda", "gawar", "choli")

2. **Optional Fields**: All fields are optional. If a field is missing, the English version from `src/data/products.ts` will be used as fallback.

3. **Nested Structure**: Follow the exact nested structure shown above. The agronomy section can have partial data.

4. **Arrays**: Features, keyPoints, methods, and timing should be arrays of strings.

5. **Default Language**: Gujarati (gu) is set as the default language for product detail pages.

## How to Add Translations

1. Open the appropriate language file (e.g., `public/locales/gu/products.json`)
2. Add your product translation following the structure above
3. Save the file
4. The product detail page will automatically load and display the translation based on the selected language

