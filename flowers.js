// ==============================================
// SIMPLE FLOWER DECOR SYSTEM
// Works for all pages: engagement, birthday, wedding
// ==============================================

// ==============================================
// FLOWERS DATA - ALL CATEGORIES
// ==============================================
const allFlowersData = {
 "engagement": [
    {
      "id": "e1",
      "category": "Engagement Decor",
      "title": "Blush Whisper Retreat",
      "description": "Blush Whisper Retreat creates an intimate romantic atmosphere with a circular floral arch in soft blush tones, elegant seating, and delicate draping. Perfect for couples seeking understated elegance and romantic charm.",
      "image": "asset/engagement/Blush Whisper Retreat.jpg",
      "price": "PKR 45,000",
      "colorpalette": "Blush pink, cream, white, soft beige, sage green",
      "downloadFile": "asset/engagement/Engagement_Blush_Whisper_Retreat.docx",
      "details": {
        "setup": "Engagement - Elegant Retreat with soft romantic elegance styling",
        "backdrop": "Blush Whisper Retreat creates an intimate romantic atmosphere with a circular floral arch in soft blush tones, elegant seating, and delicate draping",
        "florals": "Blush Roses, White Flowers, Greenery",
        "theme": "Soft Romantic Elegance",
        "ideal_for": "Indoor engagements, intimate celebrations, elegant gatherings"
      }
    },
    {
      "id": "e2",
      "category": "Engagement Decor",
      "title": "Blushing Bloom Elegance Arch",
      "description": "Blushing Bloom Elegance Arch showcases a magnificent triangular floral arch overflowing with pink roses and pastel blooms. Perfect for couples who love abundant florals and classic romantic styling.",
      "image": "asset/engagement/Blushing_Bloom_Elegance_Arch.jpg",
      "price": "PKR 48,000",
      "colorpalette": "Pink, soft pastels, white, green, natural wood",
      "downloadFile": "asset/engagement/Engagement_Blushing_Bloom_Elegance_Arch.docx",
      "details": {
        "setup": "Engagement - Floral Arch Elegance with classic floral romance styling",
        "backdrop": "Blushing Bloom Elegance Arch showcases a magnificent triangular floral arch overflowing with pink roses and pastel blooms",
        "florals": "Pink Roses, Mixed Pastels, Greenery",
        "theme": "Classic Floral Romance",
        "ideal_for": "Traditional engagements, floral-themed celebrations, elegant ceremonies"
      }
    },
    {
      "id": "e3",
      "category": "Engagement Decor",
      "title": "Garden Serenade Setup",
      "description": "Garden Serenade Setup brings natural outdoor beauty with a charming garden backdrop, pink seating, and natural tree elements. Perfect for couples seeking relaxed elegant garden celebrations.",
      "image": "asset/engagement/Garden Serenade Setup.jpg",
      "price": "PKR 42,000",
      "colorpalette": "Soft pink, white, natural green, garden tones, earth colors",
      "downloadFile": "asset/engagement/Engagement_Garden_Serenade_Setup.docx",
      "details": {
        "setup": "Engagement - Outdoor Garden with natural garden celebration styling",
        "backdrop": "Garden Serenade Setup brings natural outdoor beauty with a charming garden backdrop, pink seating, and natural tree elements",
        "florals": "Mixed Garden Flowers, Natural Elements",
        "theme": "Natural Garden Celebration",
        "ideal_for": "Outdoor garden engagements, natural settings, daytime celebrations"
      }
    },
    {
      "id": "e4",
      "category": "Engagement Decor",
      "title": "Graceful Drapes Romance",
      "description": "Graceful Drapes Romance delivers luxury with elegant gold arches, abundant floral installations, and sophisticated white seating. Perfect for couples seeking grand opulent celebrations with refined elegance.",
      "image": "asset/engagement/Graceful Drapes Romance.jpg",
      "price": "PKR 52,000",
      "colorpalette": "Gold, pink, white, cream, soft neutrals",
      "downloadFile": "asset/engagement/Engagement_Graceful_Drapes_Romance.docx",
      "details": {
        "setup": "Engagement - Luxury Draped with opulent draped elegance styling",
        "backdrop": "Graceful Drapes Romance delivers luxury with elegant gold arches, abundant floral installations, and sophisticated white seating",
        "florals": "Mixed Luxury Flowers, Statement Arrangements",
        "theme": "Opulent Draped Elegance",
        "ideal_for": "Luxury engagements, grand celebrations, formal events"
      }
    },
    {
      "id": "e5",
      "category": "Engagement Decor",
      "title": "Ivory Bloom Circle",
      "description": "Ivory Bloom Circle creates timeless elegance with a circular floral arch in pristine white, classic white seating, and refined styling. Perfect for couples seeking sophisticated traditional beauty.",
      "image": "asset/engagement/Ivory Bloom Circle.jpg",
      "price": "PKR 46,000",
      "colorpalette": "Ivory white, cream, emerald green, soft gray, pure white",
      "downloadFile": "asset/engagement/Engagement_Ivory_Bloom_Circle.docx",
      "details": {
        "setup": "Engagement - Classic Elegance with timeless white sophistication styling",
        "backdrop": "Ivory Bloom Circle creates timeless elegance with a circular floral arch in pristine white, classic white seating, and refined styling",
        "florals": "White Roses, Cream Flowers, Greenery",
        "theme": "Timeless White Sophistication",
        "ideal_for": "Classic engagements, sophisticated celebrations, elegant gatherings"
      }
    },
    {
      "id": "e6",
      "category": "Engagement Decor",
      "title": "Petal Window Charm",
      "description": "Petal Window Charm offers unique creativity with a charming window frame adorned with pink florals and whimsical elements. Perfect for couples seeking distinctive memorable celebrations with personality.",
      "image": "asset/engagement/Petal Window Charm.jpg",
      "price": "PKR 44,000",
      "colorpalette": "Soft pink, white, light blue accents, cream, natural wood",
      "downloadFile": "asset/engagement/Engagement_Petal_Window_Charm.docx",
      "details": {
        "setup": "Engagement - Unique Architectural with whimsical window romance styling",
        "backdrop": "Petal Window Charm offers unique creativity with a charming window frame adorned with pink florals and whimsical elements",
        "florals": "Pink Roses, Mixed Blooms, Decorative Elements",
        "theme": "Whimsical Window Romance",
        "ideal_for": "Creative engagements, unique themed celebrations, photo-worthy setups"
      }
    },
    {
      "id": "e7",
      "category": "Engagement Decor",
      "title": "Romantic Rose Harmony Swing",
      "description": "Romantic Rose Harmony Swing combines elegant floral canopy with luxurious tufted seating creating a harmonious romantic atmosphere. Perfect for couples seeking refined romantic luxury and classic beauty.",
      "image": "asset/engagement/Romantic_Rose_Harmony_Swing.jpg",
      "price": "PKR 50,000",
      "colorpalette": "Cream, blush, beige, soft brown, sage green",
      "downloadFile": "asset/engagement/Engagement_Romantic_Rose_Harmony_Swing.docx",
      "details": {
        "setup": "Engagement - Romantic Luxury with luxurious romantic harmony styling",
        "backdrop": "Romantic Rose Harmony Swing combines elegant floral canopy with luxurious tufted seating creating a harmonious romantic atmosphere",
        "florals": "Cream Roses, Blush Flowers, Elegant Blooms",
        "theme": "Luxurious Romantic Harmony",
        "ideal_for": "Romantic luxury engagements, elegant celebrations, sophisticated gatherings"
      }
    },
    {
      "id": "e8",
      "category": "Engagement Decor",
      "title": "Rosy Glow Backdrop",
      "description": "Rosy Glow Backdrop creates glamorous romance with a stunning rose-pink backdrop featuring floral accents and elegant lighting. Perfect for couples seeking modern glamorous celebrations with pink sophistication.",
      "image": "asset/engagement/Rosy Glow Backdrop.jpg",
      "price": "PKR 47,000",
      "colorpalette": "Rose pink, blush, cream, gold accents, white",
      "downloadFile": "asset/engagement/Engagement_Rosy_Glow_Backdrop.docx",
      "details": {
        "setup": "Engagement - Glamorous Backdrop with glamorous pink romance styling",
        "backdrop": "Rosy Glow Backdrop creates glamorous romance with a stunning rose-pink backdrop featuring floral accents and elegant lighting",
        "florals": "Pink Roses, Floral Accents, Decorative Elements",
        "theme": "Glamorous Pink Romance",
        "ideal_for": "Glamorous engagements, pink-themed celebrations, modern romantic events"
      }
    },
    {
      "id": "e9",
      "category": "Engagement Decor",
      "title": "Whispering Petals Arch",
      "description": "Whispering Petals Arch brings soft garden romance with a delicate floral arch in whites and creams, elegant brown seating, and natural styling. Perfect for couples seeking understated garden elegance and natural beauty.",
      "image": "asset/engagement/Whispering Petals Arch.jpg",
      "price": "PKR 43,000",
      "colorpalette": "White, cream, rich brown, natural green, soft neutrals",
      "downloadFile": "asset/engagement/Engagement_Whispering_Petals_Arch.docx",
      "details": {
        "setup": "Engagement - Garden Arch Romance with soft garden elegance styling",
        "backdrop": "Whispering Petals Arch brings soft garden romance with a delicate floral arch in whites and creams, elegant brown seating, and natural styling",
        "florals": "White Roses, Cream Flowers, Garden Greenery",
        "theme": "Soft Garden Elegance",
        "ideal_for": "Garden-style engagements, soft romantic celebrations, elegant gatherings"
      }
    }
  ],
   "birthday": [
    {
      "id": "b1",
      "category": "Birthday Decor",
      "title": "Happy Birthday Garden Party",
      "description": "Fresh and vibrant celebration space with a beautiful garden-inspired setup featuring the iconic 'Happy Birthday' signage surrounded by colorful florals, perfect for outdoor or garden-themed birthday parties.",
      "image": "asset/birthday/Birthday_Happy_Birthday_Garden_Party.jpg",
      "price": "PKR 20,000",
      "colorpalette": "Mint green, gold, pink, peach, cream, white",
      "downloadFile": "asset/birthday/Birthday_Happy_Birthday_Garden_Party.docx",
      "details": {
        "setup": "Garden-themed backdrop with 'Happy Birthday' signage and table display",
        "seating": "Optional party seating with decorated tables",
        "florals": "Mixed garden flowers in pink, peach, and cream arrangements",
        "lighting": "Natural daylight optimal, can include soft party lighting",
        "props": "Gift displays, table decorations, coordinating party elements",
        "ideal_for": "Garden parties, outdoor birthdays, daytime celebrations"
      }
    },
    {
      "id": "b2",
      "category": "Birthday Decor",
      "title": "Modern Chic Celebration",
      "description": "Contemporary birthday setup with geometric balloon arrangements, floral accents, and modern styling. Perfect for celebrations that demand a fashion-forward aesthetic with Instagram-worthy details.",
      "image": "asset/birthday/Birthday_Modern_Chic_Celebration.jpg",
      "price": "PKR 22,000",
      "colorpalette": "Blush pink, white, black accents, soft peach, gold",
      "downloadFile": "asset/birthday/Birthday_Modern_Chic_Celebration.docx",
      "details": {
        "setup": "Modern geometric balloon installation with floral accents",
        "seating": "Contemporary seating arrangements available",
        "florals": "Fresh roses in blush tones with modern styling",
        "lighting": "Clean modern lighting, optional LED accents",
        "props": "Geometric structures, modern typography, decorative elements",
        "ideal_for": "Teen birthdays, modern celebrations, trendy parties"
      }
    },
    {
      "id": "b3",
      "category": "Birthday Decor",
      "title": "Pink Paradise Number Display",
      "description": "Elegant birthday setup featuring stunning floral displays with illuminated number signage, pink rose arrangements, and coordinating balloon accents.",
      "image": "asset/birthday/Birthday_Pink_Paradise_Number_Display.jpg",
      "price": "PKR 21,500",
      "colorpalette": "Soft pink, blush, white, rose gold, cream",
      "downloadFile": "asset/birthday/Birthday_Pink_Paradise_Number_Display.docx",
      "details": {
        "setup": "Illuminated number displays with floral arrangements and balloon accents",
        "seating": "Optional seating arrangements with decorated tables",
        "florals": "Pink roses, carnations, and mixed blooms throughout",
        "lighting": "LED illuminated numbers and ambient party lighting",
        "props": "Balloons, table centerpieces, and decorative elements",
        "ideal_for": "First birthdays, milestone celebrations, and elegant parties"
      }
    },
    {
      "id": "b4",
      "category": "Birthday Decor",
      "title": "Balloon Blossom Wall",
      "description": "Stunning floor-to-ceiling floral wall with pink and gold balloons, creating a luxurious backdrop perfect for birthday celebrations.",
      "image": "asset/birthday/Birthday_Balloon_Blossom_Wall.jpg",
      "price": "PKR 19,000",
      "colorpalette": "Blush pink, rose gold, soft peach, cream, white",
      "downloadFile": "asset/birthday/Birthday_Balloon_Blossom_Wall.docx",
      "details": {
        "setup": "Floor-to-ceiling floral wall with balloon accents",
        "seating": "Flexible - can include floor seating or standing photo area",
        "florals": "Premium roses and peonies in blush and pink tones",
        "lighting": "Ambient lighting to enhance floral colors",
        "props": "Large balloons, optional gift display, floor arrangements",
        "ideal_for": "Photo backdrops, luxury birthday parties, elegant celebrations"
      }
    },
    {
      "id": "b5",
      "category": "Birthday Decor",
      "title": "Illuminated Dreams",
      "description": "Vintage elegance with beautiful combination of illuminated letter displays, cascading pink florals, and delicate vintage-inspired elements.",
      "image": "asset/birthday/Birthday_Illuminated_Dreams.jpg",
      "price": "PKR 23,000",
      "colorpalette": "Soft pink, blush, cream, gold accents, white",
      "downloadFile": "asset/birthday/Birthday_Illuminated_Dreams.docx",
      "details": {
        "setup": "Illuminated letter/number displays with cascading floral arrangements",
        "seating": "Optional vintage-style seating or modern arrangements",
        "florals": "Pink roses and delicate vintage-inspired blooms",
        "lighting": "LED illuminated displays with warm ambient lighting",
        "props": "Vintage elements, balloons, coordinating decorative pieces",
        "ideal_for": "Milestone birthdays, vintage-themed parties, romantic celebrations"
      }
    },
    {
      "id": "b6",
      "category": "Birthday Decor",
      "title": "White Sophistication",
      "description": "Refined luxury with pristine white and green color palette, featuring elegant 'Happy Birthday' backdrop surrounded by premium florals and modern geometric elements.",
      "image": "asset/birthday/Birthday_White_Sophistication.jpg",
      "price": "PKR 24,000",
      "colorpalette": "Pure white, emerald green, gold accents, cream",
      "downloadFile": "asset/birthday/Birthday_White_Sophistication.docx",
      "details": {
        "setup": "Premium white floral backdrop with gold 'Happy Birthday' signage",
        "seating": "Optional sophisticated seating arrangements available",
        "florals": "Premium white roses with lush emerald greenery",
        "lighting": "Elegant uplighting and ambient illumination",
        "props": "Modern geometric elements and luxury decorative pieces",
        "ideal_for": "Luxury birthdays, adult milestone celebrations, sophisticated parties"
      }
    },
    {
      "id": "b7",
      "category": "Birthday Decor",
      "title": "Festive Floral Wreath",
      "description": "Stunning circular floral design with mixed blooms creating a timeless celebration focal point combining traditional wreath aesthetics with modern party elements.",
      "image": "asset/birthday/Birthday_Festive_Floral_Wreath.jpg",
      "price": "PKR 25,000",
      "colorpalette": "Mixed florals - pink, coral, purple, green, white",
      "downloadFile": "asset/birthday/Birthday_Festive_Floral_Wreath.docx",
      "details": {
        "setup": "Large floral wreath with coordinating ground arrangements",
        "seating": "Flexible seating options with decorated areas",
        "florals": "Mixed roses and seasonal blooms in vibrant colors",
        "lighting": "Natural or soft ambient party lighting",
        "props": "Decorative stand, ground arrangements, party elements",
        "ideal_for": "Classic birthdays, floral-themed parties, elegant celebrations"
      }
    },
    {
      "id": "b8",
      "category": "Birthday Decor",
      "title": "Fresh Greenery Backdrop",
      "description": "Contemporary approach with minimalist clean white 'Happy Birthday' backdrop framed by elegant greenery and modern styling.",
      "image": "asset/birthday/Birthday_Fresh_Greenery_Backdrop.jpg",
      "price": "PKR 26,000",
      "colorpalette": "White, emerald green, natural tones, subtle earth colors",
      "downloadFile": "asset/birthday/Birthday_Fresh_Greenery_Backdrop.docx",
      "details": {
        "setup": "Clean white backdrop with greenery garland framing",
        "seating": "Modern minimalist seating options available",
        "florals": "Primarily greenery with optional minimal floral accents",
        "lighting": "Clean natural or modern LED lighting",
        "props": "Minimal modern decorative elements",
        "ideal_for": "Modern birthdays, minimalist celebrations, contemporary parties"
      }
    },
    {
      "id": "b9",
      "category": "Birthday Decor",
      "title": "Luxe Table Celebration",
      "description": "Ultimate luxury with comprehensive floral design featuring decorated table with abundant pink rose arrangements, balloon accents, and sophisticated styling.",
      "image": "asset/birthday/Birthday_Luxe_Table_Celebration.jpg",
      "price": "PKR 27,000",
      "colorpalette": "Blush pink, soft pink, white, gold, champagne",
      "downloadFile": "asset/birthday/Birthday_Luxe_Table_Celebration.docx",
      "details": {
        "setup": "Comprehensive table display with floral arrangements and balloon accents",
        "seating": "Elegant table seating with premium styling",
        "florals": "Abundant premium pink roses and luxury blooms throughout",
        "lighting": "Sophisticated ambient lighting with warm tones",
        "props": "Complete table settings, balloons, decorative elements",
        "ideal_for": "Luxury birthdays, romantic parties, comprehensive upscale celebrations"
      }
    }
  ],
   "wedding": [
    {
      "id": "w1",
      "category": "Wedding Decor",
      "title": "Enchanted Garden Romance",
      "description": "Transforms your wedding venue into a magical garden paradise with abundant floral installations, elegant draping, and romantic lighting. This comprehensive setup includes ceremony backdrop, aisle decorations, and reception styling for a cohesive romantic garden aesthetic.",
      "image": "asset/wedding/Wedding_Enchanted_Garden_Romance.jpg",
      "price": "PKR 150,000",
      "colorpalette": "Soft pink, blush, white, cream, sage green, natural wood",
      "downloadFile": "asset/wedding/Wedding_Enchanted_Garden_Romance.docx",
      "details": {
        "ceremony": "Elaborate floral backdrop with ceremony arch and aisle decorations",
        "reception": "Coordinating table centerpieces and ambient styling",
        "florals": "Premium pink roses, white flowers, and extensive greenery throughout",
        "draping": "Soft romantic fabric in cream or blush tones",
        "lighting": "Ambient romantic lighting for ceremony and reception",
        "ideal_for": "Garden weddings and romantic outdoor celebrations"
      }
    },
    {
      "id": "w2",
      "category": "Wedding Decor",
      "title": "Classic White Elegance",
      "description": "Delivers timeless sophistication with pristine all-white floral designs, luxurious draping, and refined décor. This premium package creates an atmosphere of pure elegance perfect for couples seeking classic formal beauty.",
      "image": "asset/wedding/Wedding_Classic_White_Elegance.jpg",
      "price": "PKR 180,000",
      "colorpalette": "Pure white, cream, emerald green, gold/silver accents, crystal",
      "downloadFile": "asset/wedding/Wedding_Classic_White_Elegance.docx",
      "details": {
        "ceremony": "Magnificent all-white floral backdrop with elegant structure",
        "reception": "Varied white centerpieces with premium linens and accents",
        "florals": "White roses, hydrangeas, orchids with lush greenery",
        "draping": "Elegant white or cream sophisticated draping",
        "lighting": "Refined sophisticated lighting throughout venue",
        "ideal_for": "Formal luxury weddings and classic elegant celebrations"
      }
    },
    {
      "id": "w3",
      "category": "Wedding Decor",
      "title": "Rustic Bohemian Dream",
      "description": "Brings free-spirited beauty with natural elements, wildflowers, pampas grass, and organic styling. Perfect for couples seeking relaxed elegant bohemian atmosphere with earthy natural charm.",
      "image": "asset/wedding/Wedding_Rustic_Bohemian_Dream.jpg",
      "price": "PKR 120,000",
      "colorpalette": "Warm rust, terracotta, cream, sage green, natural wood, soft neutrals",
      "downloadFile": "asset/wedding/Wedding_Rustic_Bohemian_Dream.docx",
      "details": {
        "ceremony": "Organic wooden structure with wildflowers and pampas grass",
        "reception": "Mismatched vintage styling with organic centerpieces",
        "florals": "Wildflowers, pampas grass, and dried natural elements",
        "draping": "Natural flowing fabric in earth tones",
        "lighting": "Warm string lights and lanterns for cozy ambiance",
        "ideal_for": "Outdoor weddings and free-spirited bohemian celebrations"
      }
    },
    {
      "id": "w4",
      "category": "Wedding Decor",
      "title": "Modern Minimalist Chic",
      "description": "Delivers contemporary sophistication with clean lines, sculptural elements, and carefully curated minimal florals. Perfect for couples seeking sleek modern elegance with architectural beauty.",
      "image": "asset/wedding/Wedding_Modern_Minimalist_Chic.jpeg",
      "price": "PKR 140,000",
      "colorpalette": "White, black, metallics, accent color, clean neutrals",
      "downloadFile": "asset/wedding/Wedding_Modern_Minimalist_Chic.docx",
      "details": {
        "ceremony": "Geometric modern structure with sculptural floral statements",
        "reception": "Low sculptural centerpieces in modern minimal style",
        "florals": "Carefully curated modern blooms in asymmetric compositions",
        "draping": "Minimal or none - clean architectural lines",
        "lighting": "Sophisticated modern lighting with cool clean tones",
        "ideal_for": "Modern urban weddings and contemporary minimalist celebrations"
      }
    },
    {
      "id": "w5",
      "category": "Wedding Decor",
      "title": "Vintage Romance Manor",
      "description": "Captures timeless elegance with garden roses, antique elements, and romantic vintage styling. Perfect for couples seeking nostalgic beauty and old-world charm in their celebration.",
      "image": "asset/wedding/Wedding_Vintage_Romance_Manor.jpg",
      "price": "PKR 135,000",
      "colorpalette": "Dusty rose, soft mauve, cream, antique gold, sage green, vintage white",
      "downloadFile": "asset/wedding/Wedding_Vintage_Romance_Manor.docx",
      "details": {
        "ceremony": "Romantic floral backdrop with vintage architectural elements",
        "reception": "Mismatched vintage china with antique styling throughout",
        "florals": "Garden roses, peonies, and ranunculus in soft romantic tones",
        "draping": "Delicate vintage lace or period-appropriate fabric",
        "lighting": "Soft romantic vintage lighting and crystal chandeliers",
        "ideal_for": "Historic venues and vintage romantic celebrations"
      }
    },
    {
      "id": "w6",
      "category": "Wedding Decor",
      "title": "Tropical Paradise Wedding",
      "description": "Brings vibrant island beauty with exotic flowers, lush tropical greenery, and bold colorful elements. Perfect for couples seeking fun vibrant destination-style celebrations.",
      "image": "asset/wedding/Wedding_Tropical_Paradise_Wedding.jpg",
      "price": "PKR 125,000",
      "colorpalette": "Vibrant coral, tropical pink, sunny yellow, turquoise, lush green, natural wood",
      "downloadFile": "asset/wedding/Wedding_Tropical_Paradise_Wedding.docx",
      "details": {
        "ceremony": "Lush tropical backdrop with exotic flowers and palm leaves",
        "reception": "Bold tropical centerpieces with vibrant island styling",
        "florals": "Birds of paradise, anthuriums, orchids, dramatic greenery",
        "draping": "Minimal or tropical fabric in bold colors",
        "lighting": "Warm sunset tones or festive tropical string lights",
        "ideal_for": "Beach destination weddings and tropical resort celebrations"
      }
    }
  ]
,
     "bridal shower": [
    {
      "id": "bs1",
      "category": "Bridal Shower Decor",
      "title": "Floral Arch Elegance",
      "description": "Stunning focal point with a beautiful circular floral arch adorned with pink and pastel blooms. Perfect for intimate bridal showers seeking elegant sophistication with romantic floral beauty.",
      "image": "asset/bridal_shower/BridalShower_Floral_Arch_Elegance.jpg",
      "price": "PKR 28,000",
      "colorpalette": "Soft pink, blush, cream, sage green, gold accents",
      "downloadFile": "asset/bridal_shower/BridalShower_Floral_Arch_Elegance.docx",
      "details": {
        "setup": "Circular floral arch with elegant seating area",
        "backdrop": "Neutral backdrop with floral arch focal point",
        "florals": "Mixed pink roses and pastel flowers throughout arch",
        "seating": "Vintage-style couch or elegant bench for bride",
        "accents": "Floor arrangements and decorative elements",
        "ideal_for": "Bridal showers, intimate celebrations, elegant photo sessions"
      }
    },
    {
      "id": "bs2",
      "category": "Bridal Shower Decor",
      "title": "Dreamy Drape Garden",
      "description": "Ethereal beauty with flowing sage green drapes and cascading floral arrangements. Perfect for garden-themed bridal showers seeking romantic whimsical atmosphere.",
      "image": "asset/bridal_shower/BridalShower_Dreamy_Drape_Garden.jpg",
      "price": "PKR 32,000",
      "colorpalette": "Sage green, soft pink, lavender, white, natural green",
      "downloadFile": "asset/bridal_shower/BridalShower_Dreamy_Drape_Garden.docx",
      "details": {
        "setup": "Flowing draped backdrop with cascading florals",
        "backdrop": "Sage green fabric drapes creating romantic atmosphere",
        "florals": "Abundant pink roses and lavender in cascading arrangements",
        "seating": "Optional seating area with garden styling",
        "accents": "Garden-inspired elements and floor arrangements",
        "ideal_for": "Garden bridal showers, outdoor romantic celebrations"
      }
    },
    {
      "id": "bs3",
      "category": "Bridal Shower Decor",
      "title": "Golden Bridal Shower",
      "description": "Sophisticated luxury with a stunning circular backdrop featuring gold 'Bridal Shower' signage surrounded by elegant peach and cream florals. Perfect for upscale celebrations.",
      "image": "asset/bridal_shower/BridalShower_Golden_Bridal_Shower.jpg",
      "price": "PKR 35,000",
      "colorpalette": "Soft pink, peach, cream, gold, sage green",
      "downloadFile": "asset/bridal_shower/BridalShower_Golden_Bridal_Shower.docx",
      "details": {
        "setup": "Large circular backdrop with gold bridal shower signage",
        "backdrop": "Soft pink or cream circular backdrop as focal point",
        "florals": "Peach roses and cream flowers framing the circle",
        "seating": "Optional elegant seating arrangements available",
        "accents": "Gold elements and coordinating floor arrangements",
        "ideal_for": "Luxury bridal showers and elegant upscale celebrations"
      }
    },
    {
      "id": "bs4",
      "category": "Bridal Shower Decor",
      "title": "Future Mrs Celebration",
      "description": "Romantic modern atmosphere with elegant white arch featuring 'Future Mrs' signage, surrounded by beautiful pink and coral floral arrangements and decorative balloons.",
      "image": "asset/bridal_shower/BridalShower_Future_Mrs_Celebration.jpg",
      "price": "PKR 30,000",
      "colorpalette": "White, soft pink, coral, peach, rose gold",
      "downloadFile": "asset/bridal_shower/BridalShower_Future_Mrs_Celebration.docx",
      "details": {
        "setup": "White arch with 'Future Mrs' signage and decorated table",
        "backdrop": "Architectural white arch as elegant focal point",
        "florals": "Pink and coral roses adorning the arch structure",
        "seating": "Decorated table area with additional styling",
        "accents": "Coordinating balloons and party elements",
        "ideal_for": "Modern bridal showers, romantic chic celebrations"
      }
    },
    {
      "id": "bs5",
      "category": "Bridal Shower Decor",
      "title": "Blue Elegance Archway",
      "description": "Unique stunning aesthetic with a white architectural arch adorned with abundant blue hydrangeas. Perfect for brides seeking something different and sophisticated.",
      "image": "asset/bridal_shower/BridalShower_Blue_Elegance_Archway.jpg",
      "price": "PKR 33,000",
      "colorpalette": "Sky blue, pure white, soft blue, silver, green",
      "downloadFile": "asset/bridal_shower/BridalShower_Blue_Elegance_Archway.docx",
      "details": {
        "setup": "White architectural archway with blue floral arrangements",
        "backdrop": "Elegant white arch as structural focal point",
        "florals": "Abundant blue hydrangeas with white accent flowers",
        "seating": "Optional seating arrangements with blue theme",
        "accents": "White pedestals with coordinating blue arrangements",
        "ideal_for": "Unique themed showers, something blue celebrations"
      }
    },
    {
      "id": "bs6",
      "category": "Bridal Shower Decor",
      "title": "Outdoor Garden Bride",
      "description": "Natural beauty to outdoor celebrations with a charming 'BRIDE TO BE' backdrop surrounded by fresh garden florals. Perfect for relaxed elegant garden parties.",
      "image": "asset/bridal_shower/BridalShower_Outdoor_Garden_Bride.jpg",
      "price": "PKR 27,000",
      "colorpalette": "Soft pink, pastel mix, white, natural green",
      "downloadFile": "asset/bridal_shower/BridalShower_Outdoor_Garden_Bride.docx",
      "details": {
        "setup": "Outdoor circular backdrop with garden floral frame",
        "backdrop": "Soft pink circular backdrop with 'BRIDE TO BE' lettering",
        "florals": "Mixed pastel garden flowers in natural arrangements",
        "seating": "Optional outdoor seating with garden styling",
        "accents": "Natural garden elements and ground arrangements",
        "ideal_for": "Outdoor garden showers and casual nature-themed celebrations"
      }
    }
  ],
  
   "table arrangement": [
    {
      "id": "t1",
      "category": "Table Decor",
      "title": "Rustic Garden Elegance",
      "description": "Natural beauty with lush garden-inspired centerpieces featuring mixed roses and seasonal blooms. Sophisticated table arrangement combines rustic charm with elegant styling, perfect for outdoor garden weddings.",
      "image": "asset/table_arrangement/Table_Rustic_Garden_Elegance.jpg",
      "price": "PKR 35,000",
      "colorpalette": "Peach, cream, soft pink, green, natural wood",
      "downloadFile": "asset/table_arrangement/Table_Rustic_Garden_Elegance.docx",
      "details": {
        "setup": "Long banquet tables with low garden-style centerpieces",
        "centerpiece_style": "Lush garden arrangements in peach and cream tones",
        "tableware": "Elegant place settings with gold flatware",
        "linens": "Neutral table linens with rustic wooden surface visible",
        "accents": "Gold elements and natural greenery",
        "ideal_for": "Outdoor garden weddings and rustic elegant receptions"
      }
    },
    {
      "id": "t2",
      "category": "Table Decor",
      "title": "Lavender Luxury",
      "description": "Regal atmosphere with rich purple linens and coordinating lavender floral arrangements. Sophisticated setup combines elegance with bold color for memorable formal celebrations.",
      "image": "asset/table_arrangement/Table_Lavender_Luxury.jpg",
      "price": "PKR 38,000",
      "colorpalette": "Lavender purple, deep purple, white, silver, crystal",
      "downloadFile": "asset/table_arrangement/Table_Lavender_Luxury.docx",
      "details": {
        "setup": "Round or rectangular tables with floor-length purple linens",
        "centerpiece_style": "Tall elegant arrangements with lavender flowers",
        "tableware": "Crystal glassware and white china with silver accents",
        "linens": "Floor-length lavender purple tablecloths",
        "accents": "Crystal and silver elegant elements",
        "ideal_for": "Formal weddings and luxury elegant receptions"
      }
    },
    {
      "id": "t3",
      "category": "Table Decor",
      "title": "Romantic Red Rose",
      "description": "Timeless romance with stunning red rose centerpieces and gold accents. Perfect for couples seeking classic elegance and passionate beauty.",
      "image": "asset/table_arrangement/Table_Romantic_Red_Rose.jpg",
      "price": "PKR 40,000",
      "colorpalette": "Deep red, gold, cream, white, candlelight",
      "downloadFile": "asset/table_arrangement/Table_Romantic_Red_Rose.docx",
      "details": {
        "setup": "Long banquet tables with tall dramatic centerpieces",
        "centerpiece_style": "Tall red rose arrangements in gold vases",
        "tableware": "Gold charger plates with elegant glassware",
        "linens": "Cream neutral tablecloths",
        "accents": "Gold elements and warm candlelight throughout",
        "ideal_for": "Romantic weddings and anniversary celebrations"
      }
    },
    {
      "id": "t4",
      "category": "Table Decor",
      "title": "Modern Black Elegance",
      "description": "Bold statement with dramatic black place settings, warm floral accents, and contemporary styling. Perfect for sophisticated modern aesthetics.",
      "image": "asset/table_arrangement/Table_Modern_Black_Elegance.jpg",
      "price": "PKR 42,000",
      "colorpalette": "Black, orange, coral, gold, warm amber",
      "downloadFile": "asset/table_arrangement/Table_Modern_Black_Elegance.docx",
      "details": {
        "setup": "Contemporary table settings with bold black plates",
        "centerpiece_style": "Warm-toned floral arrangements with modern styling",
        "tableware": "Black plates with gold flatware and modern glassware",
        "linens": "Neutral linens allowing bold elements to stand out",
        "accents": "Warm candlelight and gold contemporary elements",
        "ideal_for": "Modern weddings and upscale contemporary celebrations"
      }
    },
    {
      "id": "t5",
      "category": "Table Decor",
      "title": "Vibrant Citrus Garden",
      "description": "Fresh energy with bright colorful centerpieces featuring pink, orange, and yellow blooms. Perfect for joyful spring and summer celebrations.",
      "image": "asset/table_arrangement/Table_Vibrant_Citrus_Garden.jpg",
      "price": "PKR 36,000",
      "colorpalette": "Pink, orange, yellow, coral, white, green",
      "downloadFile": "asset/table_arrangement/Table_Vibrant_Citrus_Garden.docx",
      "details": {
        "setup": "Clean white tables with vibrant colorful centerpieces",
        "centerpiece_style": "Mixed bright flowers in fresh garden style",
        "tableware": "Modern white dinnerware with clear glassware",
        "linens": "Crisp white tablecloths",
        "accents": "Colorful floral arrangements as main focal point",
        "ideal_for": "Spring weddings and cheerful colorful celebrations"
      }
    },
    {
      "id": "t6",
      "category": "Table Decor",
      "title": "Classic White Aisle",
      "description": "Pristine elegant atmosphere with all-white floral arrangements and sophisticated styling. Perfect for timeless formal celebrations seeking refined beauty.",
      "image": "asset/table_arrangement/Table_Classic_White_Aisle.jpg",
      "price": "PKR 45,000",
      "colorpalette": "Pure white, cream, emerald green, natural wood",
      "downloadFile": "asset/table_arrangement/Table_Classic_White_Aisle.docx",
      "details": {
        "setup": "Long banquet tables with continuous white floral arrangements",
        "centerpiece_style": "Lush white rose and hydrangea garland or centerpieces",
        "tableware": "Elegant white and crystal place settings",
        "linens": "Pristine white tablecloths",
        "accents": "Lush greenery with optional gold or crystal accents",
        "ideal_for": "Formal weddings and luxury elegant receptions"
      }
    },
    {
      "id": "t7",
      "category": "Table Decor",
      "title": "Peach Perfection",
      "description": "Soft romantic beauty with delicate peach and pink floral centerpieces creating intimate elegant atmosphere. Perfect for gentle romantic aesthetics.",
      "image": "asset/table_arrangement/Table_Peach_Perfection.jpg",
      "price": "PKR 34,000",
      "colorpalette": "Peach, soft pink, cream, champagne, white",
      "downloadFile": "asset/table_arrangement/Table_Peach_Perfection.docx",
      "details": {
        "setup": "Round or rectangular tables with low romantic centerpieces",
        "centerpiece_style": "Soft peach and pink arrangements in elegant low vases",
        "tableware": "Elegant place settings with champagne or gold flatware",
        "linens": "Neutral soft-toned tablecloths",
        "accents": "Romantic soft color palette throughout",
        "ideal_for": "Romantic weddings and intimate elegant receptions"
      }
    },
    {
      "id": "t8",
      "category": "Table Decor",
      "title": "Evergreen Elegance",
      "description": "Natural organic beauty with lush eucalyptus and greenery table runners creating fresh garden atmosphere. Perfect for nature-loving couples.",
      "image": "asset/table_arrangement/Table_Evergreen_Elegance.jpg",
      "price": "PKR 32,000",
      "colorpalette": "Emerald green, white, natural wood, soft sage",
      "downloadFile": "asset/table_arrangement/Table_Evergreen_Elegance.docx",
      "details": {
        "setup": "Long tables with full-length eucalyptus and greenery runners",
        "centerpiece_style": "Lush greenery garland with white floral accents",
        "tableware": "Simple elegant white dinnerware with clear glass",
        "linens": "Natural wood tables or simple neutral linens",
        "accents": "Fresh eucalyptus scent and organic natural elements",
        "ideal_for": "Garden weddings and organic natural celebrations"
      }
    },
    {
      "id": "t9",
      "category": "Table Decor",
      "title": "Garden Party Pink",
      "description": "Cheerful outdoor celebration atmosphere with vibrant pink floral centerpieces and casual garden styling. Perfect for relaxed elegant garden parties.",
      "image": "asset/table_arrangement/Table_Garden_Party_Pink.jpg",
      "price": "PKR 30,000",
      "colorpalette": "Hot pink, coral, sky blue, white, garden green",
      "downloadFile": "asset/table_arrangement/Table_Garden_Party_Pink.docx",
      "details": {
        "setup": "Outdoor rectangular tables with colorful garden centerpieces",
        "centerpiece_style": "Bright pink arrangements in eclectic vintage-style containers",
        "tableware": "Blue and white plates with colorful casual-elegant styling",
        "linens": "Casual outdoor-appropriate table coverings",
        "accents": "Garden party atmosphere with vibrant playful elements",
        "ideal_for": "Outdoor garden parties and casual daytime celebrations"
      }
    },
    {
      "id": "t10",
      "category": "Table Decor",
      "title": "Pastel Dream",
      "description": "Soft dreamy atmosphere with gentle pastel floral arrangements creating romantic fairytale ambiance. Perfect for spring celebrations and soft romantic themes.",
      "image": "asset/table_arrangement/Table_Pastel_Dream.jpg",
      "price": "PKR 37,000",
      "colorpalette": "Soft pink, lavender, cream, pale blue, white",
      "downloadFile": "asset/table_arrangement/Table_Pastel_Dream.docx",
      "details": {
        "setup": "Round tables with low dreamy pastel centerpieces",
        "centerpiece_style": "Soft mixed pastel flowers in elegant arrangements",
        "tableware": "Delicate china with crystal glassware",
        "linens": "Soft pastel-toned tablecloths",
        "accents": "Dreamy romantic elements throughout",
        "ideal_for": "Spring weddings and dreamy pastel celebrations"
      }
    },
    {
      "id": "t11",
      "category": "Table Decor",
      "title": "Winter White Garden",
      "description": "Fresh elegant atmosphere with abundant white florals and lush greenery. Perfect for white themed celebrations seeking garden elegance with sophistication.",
      "image": "asset/table_arrangement/Table_Winter_White_Garden.jpg",
      "price": "PKR 43,000",
      "colorpalette": "Pure white, emerald green, soft sage, natural wood",
      "downloadFile": "asset/table_arrangement/Table_Winter_White_Garden.docx",
      "details": {
        "setup": "Tables with generous white floral centerpieces and greenery",
        "centerpiece_style": "Abundant white roses and hydrangeas with green accents",
        "tableware": "Modern white dinnerware with clear or elegant glassware",
        "linens": "Clean white or natural wood table surfaces",
        "accents": "Fresh greenery and natural elegant elements",
        "ideal_for": "Winter weddings and elegant white themed celebrations"
      }
    },
    {
      "id": "t12",
      "category": "Table Decor",
      "title": "Autumn Harvest",
      "description": "Warm seasonal beauty with rich fall-toned florals and rustic elements. Perfect for autumn celebrations embracing the beauty of the harvest season.",
      "image": "asset/table_arrangement/Table_Autumn_Harvest.jpg",
      "price": "PKR 33,000",
      "colorpalette": "Burgundy, rust orange, cream, deep purple, warm brown",
      "downloadFile": "asset/table_arrangement/Table_Autumn_Harvest.docx",
      "details": {
        "setup": "Rustic tables with warm autumn-toned centerpieces",
        "centerpiece_style": "Rich fall flowers in burgundy, orange, and rust tones",
        "tableware": "Warm-toned or rustic place settings",
        "linens": "Natural or warm-toned table coverings",
        "accents": "Seasonal harvest elements and rustic touches",
        "ideal_for": "Fall weddings and autumn harvest celebrations"
      }
    },
    {
      "id": "t13",
      "category": "Table Decor",
      "title": "Rustic Vineyard",
      "description": "Authentic rustic atmosphere with natural wooden elements and casual elegant floral arrangements. Perfect for vineyard and farm celebrations seeking relaxed elegance.",
      "image": "asset/table_arrangement/Table_Rustic_Vineyard.jpg",
      "price": "PKR 31,000",
      "colorpalette": "Natural green, cream, soft pink, warm wood, earth tones",
      "downloadFile": "asset/table_arrangement/Table_Rustic_Vineyard.docx",
      "details": {
        "setup": "Rustic wooden tables with barrel or natural centerpieces",
        "centerpiece_style": "Abundant greenery with mixed flowers in rustic containers",
        "tableware": "Simple rustic dinnerware with mason jars",
        "linens": "Natural wood surfaces or simple rustic linens",
        "accents": "Authentic vineyard and farm rustic elements",
        "ideal_for": "Vineyard weddings and rustic outdoor farm celebrations"
      }
    },
    {
      "id": "t14",
      "category": "Table Decor",
      "title": "Blush Romance Runner",
      "description": "Luxurious romantic atmosphere with abundant blush and pink florals running the length of elegant tables. Perfect for couples seeking romantic luxury and sophisticated beauty.",
      "image": "asset/table_arrangement/Table_Blush_Romance_Runner.jpg",
      "price": "PKR 39,000",
      "colorpalette": "Blush pink, soft pink, white, champagne, gold",
      "downloadFile": "asset/table_arrangement/Table_Blush_Romance_Runner.docx",
      "details": {
        "setup": "Long elegant tables with continuous blush floral runners",
        "centerpiece_style": "Abundant blush roses in continuous romantic arrangement",
        "tableware": "Fine elegant china with champagne or gold flatware",
        "linens": "Soft elegant tablecloths in complementary tones",
        "accents": "Luxurious romantic elements and crystal details",
        "ideal_for": "Romantic luxury weddings and upscale elegant receptions"
      }
    }
  ]
}

// CONFIGURATION
const COMPARE_KEY = "flowers_compare"; // localStorage key
const MAX_COMPARE = 4; // Maximum items to compare

// GLOBAL VARIABLES
let currentCategory = ""; // Current page category

// ==============================================
// 2. DETECT WHICH PAGE WE'RE ON
// ==============================================
function detectCategory() {
  // Check the page URL to determine category
  const url = window.location.pathname.toLowerCase();
  
  if (url.includes("engagement")) {
    return "engagement";
  } else if (url.includes("birthday")) {
    return "birthday";
  } else if (url.includes("wedding")) {
    return "wedding";
  } else if (url.includes("tablearrangement")) {
    return "table arrangement";
  } else if (url.includes("bridalshower")) {
    return "bridal shower";
  }
  
  // Default fallback
  return "engagement";
}

// ==============================================
// 2. DATA IS ALREADY LOADED
// (Data comes from flowers-data.js file)
// ==============================================
// No need to load data - it's already available in allFlowersData variable!

// ==============================================
// 3. RENDER FLOWER CARDS
// ==============================================
function renderFlowerCards() {
  const container = document.getElementById("decor-container");
  
  if (!container) {
    console.error("Container not found!");
    return;
  }

  // Get flowers for current category
  const flowers = allFlowersData[currentCategory] || [];
  
  if (flowers.length === 0) {
    container.innerHTML = "<p>No items found for this category.</p>";
    return;
  }

  // Get currently selected items from localStorage
  const compareItems = getCompareItems();
  const compareIds = compareItems.map(item => item.id);

  // Clear container
  container.innerHTML = "";

  // Create cards
  flowers.forEach((flower, index) => {
    const isChecked = compareIds.includes(flower.id);
    
    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-6 col-sm-12";
    col.setAttribute("data-aos", "zoom-in");
    col.setAttribute("data-aos-delay", (index + 1) * 100);

    // card render 

    col.innerHTML = `
  <div class="decor-card">
    <input 
      type="checkbox" 
      class="decor-checkbox" 
      data-id="${flower.id}" 
      ${isChecked ? "checked" : ""}
      aria-label="Add to compare"
    >
    <img src="${flower.image}" alt="${flower.title}">
    <div class="decor-card-body">
      <h3>${flower.title}</h3>
      <strong>${flower.category}</strong>
      <p>${flower.description}</p>
      <div class="price">${flower.price}</div>
      ${flower.downloadFile ? `
        <div class="decor-card-buttons">
          <button class="btn-read-more" data-file="${flower.downloadFile}" data-title="${flower.title}">
            Read More
          </button>
          <a href="booknow.html" class="btn-book-now"> Book Now </a>
        </div>
      ` : ''}
    </div>
  </div>
`;

    container.appendChild(col);
  });

  // Attach checkbox events
  attachCheckboxEvents();

  // Attach read more button events
  attachReadMoreEvents();

  // Refresh animations
  if (window.AOS) {
    AOS.refresh();
  }
}

// ==============================================
// 4. CHECKBOX EVENTS (Add/Remove from Compare)
// ==============================================
function attachCheckboxEvents() {
  const checkboxes = document.querySelectorAll(".decor-checkbox");
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function() {
      const itemId = this.dataset.id;
      
      if (this.checked) {
        // Add to compare
        addToCompare(itemId);
      } else {
        // Remove from compare
        removeFromCompare(itemId);
      }
    });
  });
}

// ==============================================
// 4.5. READ MORE BUTTON EVENTS (Download Word Files)
// ==============================================
function attachReadMoreEvents() {
  const readMoreButtons = document.querySelectorAll(".btn-read-more");
  
  readMoreButtons.forEach(button => {
    button.addEventListener("click", function() {
      const filePath = this.dataset.file;
      const title = this.dataset.title;
      
      if (filePath) {
        downloadWordFile(filePath, title);
      }
    });
  });
}

function downloadWordFile(filePath, title) {
  // Create a temporary anchor element
  const link = document.createElement("a");
  link.href = filePath;
  link.download = filePath.split("/").pop(); // Get filename from path
  
  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  console.log(`Downloading: ${title} - ${filePath}`);
}

// ==============================================
// 5. ADD ITEM TO COMPARE
// ==============================================
function addToCompare(itemId) {
  const compareItems = getCompareItems();
  
  // Check if already added
  if (compareItems.find(item => item.id === itemId)) {
    return;
  }
  
  // Check max limit
  if (compareItems.length >= MAX_COMPARE) {
    alert(`You can only compare up to ${MAX_COMPARE} items at a time.`);
    // Uncheck the checkbox
    const checkbox = document.querySelector(`.decor-checkbox[data-id="${itemId}"]`);
    if (checkbox) checkbox.checked = false;
    return;
  }
  
  // Find the item in all categories
  const item = findItemById(itemId);
  
  if (item) {
    compareItems.push(item);
    saveCompareItems(compareItems);
    updateCompareCounter();
  }
}

// ==============================================
// 6. REMOVE ITEM FROM COMPARE
// ==============================================
function removeFromCompare(itemId) {
  let compareItems = getCompareItems();
  compareItems = compareItems.filter(item => item.id !== itemId);
  saveCompareItems(compareItems);
  updateCompareCounter();
}

// ==============================================
// 7. FIND ITEM BY ID (searches all categories)
// ==============================================
function findItemById(itemId) {
  // Search in all categories
  for (let category in allFlowersData) {
    const items = allFlowersData[category];
    const found = items.find(item => item.id === itemId);
    if (found) {
      // Add category info to the item
      return { ...found, category: category };
    }
  }
  return null;
}

// ==============================================
// 8. LOCALSTORAGE FUNCTIONS
// ==============================================
function getCompareItems() {
  try {
    const data = localStorage.getItem(COMPARE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error reading compare items:", error);
    return [];
  }
}

function saveCompareItems(items) {
  try {
    localStorage.setItem(COMPARE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error("Error saving compare items:", error);
  }
}

// ==============================================
// 9. UPDATE COMPARE COUNTER
// ==============================================
function updateCompareCounter() {
  const counter = document.getElementById("compare-count");
  const compareBar = document.getElementById("compare-bar");
  
  if (counter) {
    const count = getCompareItems().length;
    counter.textContent = count;
    
    // Show/hide compare bar
    if (compareBar) {
      compareBar.style.display = count > 0 ? "flex" : "none";
    }
  }
}

// ==============================================
// 10. OPEN COMPARE MODAL
// ==============================================
function openCompareModal() {
  const modal = document.getElementById("compare-modal");
  const grid = document.getElementById("compare-grid");
  
  if (!modal || !grid) return;
  
  const compareItems = getCompareItems();
  
  // Clear grid
  grid.innerHTML = "";
  
  if (compareItems.length === 0) {
    grid.innerHTML = `
      <div style="text-align: center; padding: 40px; color: #6b4b52; grid-column: 1/-1;">
        <p>No items selected for comparison.</p>
        <p style="font-size: 0.9rem; margin-top: 10px;">Use the checkboxes on cards to add items.</p>
      </div>
    `;
  } else {
    // Create compare items
    compareItems.forEach(item => {
      const div = document.createElement("div");
      div.className = "compare-item";
      
      div.innerHTML = `
        <label style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
          <input type="checkbox" class="cmp-remove-checkbox" data-id="${item.id}">
          <span style="font-size: 0.9rem;">Remove</span>
        </label>
        <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">
        <h5 style="margin: 10px 0 5px 0; color: #e75480;">${item.title}</h5>

      
        <p style="color: #6b4b52; font-size: 0.9rem;"> <strong> Category:</strong> ${item.category}</p>

        <p style="color: #6b4b52; font-size: 0.9rem;"> Color Palette: ${item.colorpalette}</p>
      


        <div style="margin-top: 12px; padding-top: 10px; border-top: 1px solid #f0f0f0;">
        <h6 style="color: #e75480; margin-bottom: 8px; font-size: 0.95rem;">Details:</h6>
        <ul style="list-style: none; padding: 0; font-size: 0.85rem; color: #6b4b52;">
          ${item.details.setup ? `<li style="margin-bottom: 5px;"><strong>Setup:</strong> ${item.details.setup}</li>` : ''}
          ${item.details.seating ? `<li style="margin-bottom: 5px;"><strong>Seating:</strong> ${item.details.seating}</li>` : ''}
          ${item.details.florals ? `<li style="margin-bottom: 5px;"><strong>Florals:</strong> ${item.details.florals}</li>` : ''}
          ${item.details.lighting ? `<li style="margin-bottom: 5px;"><strong>Lighting:</strong> ${item.details.lighting}</li>` : ''}
          ${item.details.props ? `<li style="margin-bottom: 5px;"><strong>Props:</strong> ${item.details.props}</li>` : ''}
          ${item.details.ideal_for ? `<li style="margin-bottom: 5px;"><strong>Ideal For:</strong> ${item.details.ideal_for}</li>` : ''}
        </ul>
      </div>



        <div style="margin-top: 8px; font-weight: 600; color: #c7446a;">${item.price}</div>
        <div style="margin-top: 5px; font-size: 0.85rem; color: #999; text-transform: capitalize;">
          Category: ${item.category}
        </div>
      `;
      
      grid.appendChild(div);
    });
  }
  
  // Show modal
  modal.style.display = "flex";
}

// ==============================================
// 11. CLOSE COMPARE MODAL
// ==============================================
function closeCompareModal() {
  const modal = document.getElementById("compare-modal");
  if (modal) {
    modal.style.display = "none";
  }
}

// ==============================================
// 12. REMOVE SELECTED FROM MODAL
// ==============================================
function removeSelectedFromModal() {
  const checkboxes = document.querySelectorAll(".cmp-remove-checkbox:checked");
  
  if (checkboxes.length === 0) {
    alert("Please select items to remove.");
    return;
  }
  
  // Get IDs to remove
  const idsToRemove = Array.from(checkboxes).map(cb => cb.dataset.id);
  
  // Remove from compare
  let compareItems = getCompareItems();
  compareItems = compareItems.filter(item => !idsToRemove.includes(item.id));
  saveCompareItems(compareItems);
  
  // Update UI
  updateCompareCounter();
  updateCheckboxesOnPage();
  openCompareModal(); // Refresh modal
}

// ==============================================
// 13. CLEAR ALL COMPARE ITEMS
// ==============================================
function clearAllCompare() {
  if (getCompareItems().length === 0) {
    return;
  }
  
  if (confirm("Clear all compare selections?")) {
    saveCompareItems([]);
    updateCompareCounter();
    updateCheckboxesOnPage();
    openCompareModal(); // Refresh modal
  }
}

// ==============================================
// 14. UPDATE CHECKBOXES ON PAGE
// ==============================================
function updateCheckboxesOnPage() {
  const compareItems = getCompareItems();
  const compareIds = compareItems.map(item => item.id);
  
  const checkboxes = document.querySelectorAll(".decor-checkbox");
  checkboxes.forEach(checkbox => {
    checkbox.checked = compareIds.includes(checkbox.dataset.id);
  });
}

// ==============================================
// 15. ATTACH MODAL EVENTS
// ==============================================
function attachModalEvents() {
  // Open modal button
  const openBtn = document.getElementById("open-compare");
  if (openBtn) {
    openBtn.addEventListener("click", openCompareModal);
  }
  
  // Close modal button
  const closeBtn = document.getElementById("close-compare");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeCompareModal);
  }
  
  // Close on backdrop click
  const modal = document.getElementById("compare-modal");
  if (modal) {
    modal.addEventListener("click", function(e) {
      if (e.target === modal) {
        closeCompareModal();
      }
    });
  }
  
  // Remove selected button
  const removeBtn = document.getElementById("remove-selected");
  if (removeBtn) {
    removeBtn.addEventListener("click", removeSelectedFromModal);
  }
  
  // Clear all button
  const clearBtn = document.getElementById("clear-all");
  if (clearBtn) {
    clearBtn.addEventListener("click", clearAllCompare);
  }
}

// ==============================================
// 16. SYNC ACROSS TABS (Listen to localStorage changes)
// ==============================================
window.addEventListener("storage", function(e) {
  if (e.key === COMPARE_KEY) {
    updateCompareCounter();
    updateCheckboxesOnPage();
  }
});

// ==============================================
// 17. INITIALIZE EVERYTHING
// ==============================================
function initializeApp() {
  console.log("Initializing app...");
  
  // 1. Detect category
  currentCategory = detectCategory();
  console.log("Current category:", currentCategory);
  
  // 2. Data is already loaded from flowers-data.js
  
  // 3. Render cards
  renderFlowerCards();
  
  // 4. Update compare counter
  updateCompareCounter();
  
  // 5. Attach modal events
  attachModalEvents();
  
  console.log("App initialized successfully!");
}

// ==============================================
// 18. START THE APP WHEN PAGE LOADS
// ==============================================
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}