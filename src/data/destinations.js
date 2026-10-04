/*
 * All destination data lives here.
 * Home page shows the 6 with featured: true.
 * Destinations page shows all 8.
 */
const destinations = [
  {
    id: 'banff',
    name: 'Banff National Park',
    province: 'Alberta',
    image: 'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?auto=format&fit=crop&w=800&q=80',
    alt: 'Turquoise glacial lake surrounded by Rocky Mountain peaks in Banff',
    shortDesc:
      "Canada's oldest national park delivers jaw-dropping scenery — electric-blue glacial lakes, wildlife at every turn, and world-class ski resorts.",
    fullDesc:
      "Established in 1885, Banff is Canada's oldest and most visited national park. The electric-blue waters of Lake Louise and Moraine Lake are bucket-list worthy. Hike hundreds of trails through pristine wilderness, ski at world-class resorts in winter, and keep an eye out for bears, elk, and wolves roaming freely.",
    bestTime: 'Jun–Sep & Dec–Mar',
    featured: true,
  },
  {
    id: 'vancouver',
    name: 'Vancouver',
    province: 'British Columbia',
    image: 'https://images.unsplash.com/photo-1559511260-66a654ae982a?auto=format&fit=crop&w=800&q=80',
    alt: 'Vancouver skyline at dusk with snow-capped mountains in the background',
    shortDesc:
      "Mountains meet the Pacific Ocean in one of the world's most liveable cities — explore Stanley Park, Granville Island, and the vibrant food scene.",
    fullDesc:
      "With the Pacific Ocean at its feet and the Coast Mountains as a backdrop, Vancouver is endlessly photogenic. Walk or cycle the 22-km Stanley Park seawall, browse Granville Island's public market, enjoy world-class sushi, and ski Whistler-Blackcomb just two hours away.",
    bestTime: 'Jun–Sep',
    featured: true,
  },
  {
    id: 'toronto',
    name: 'Toronto',
    province: 'Ontario',
    image: 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=800&q=80',
    alt: 'Toronto skyline dominated by the iconic CN Tower',
    shortDesc:
      "Canada's largest and most multicultural city — world-class dining, iconic neighbourhoods, museums, and the CN Tower's thrilling EdgeWalk.",
    fullDesc:
      "Canada's largest city is a dynamic, multicultural metropolis with over 200 spoken languages. Visit the Royal Ontario Museum, explore the Distillery District's Victorian architecture, catch a Blue Jays game, and dare yourself to walk the CN Tower's glass-floored EdgeWalk — 356 metres above the ground.",
    bestTime: 'May–Oct',
    featured: true,
  },
  {
    id: 'niagara',
    name: 'Niagara Falls',
    province: 'Ontario',
    image: 'https://images.unsplash.com/photo-1549834125-82d3c6f37f05?auto=format&fit=crop&w=800&q=80',
    alt: 'Niagara Falls with massive mist clouds rising from the cascades',
    shortDesc:
      "One of the world's most famous natural wonders — 3,160 tonnes of water per second, boat tours into the mist, and dazzling night illuminations.",
    fullDesc:
      "Three powerful waterfalls form one of the most famous natural spectacles on Earth. Ride the Hornblower boat tour right into the mist, walk the Journey Behind the Falls tunnels, and at night watch the cascades turn vivid colours under dramatic illumination. Just 1.5 hours from Toronto.",
    bestTime: 'Apr–Oct',
    featured: true,
  },
  {
    id: 'quebec',
    name: 'Québec City',
    province: 'Québec',
    image: 'https://images.unsplash.com/photo-1519832979-6fa011b87667?auto=format&fit=crop&w=800&q=80',
    alt: "Old Québec City's fortified walls and the towering Château Frontenac",
    shortDesc:
      "North America's only walled city north of Mexico — cobbled streets, French culture, the grand Château Frontenac, and a magical Winter Carnival.",
    fullDesc:
      "A UNESCO World Heritage Site, Old Québec is the only fortified city north of Mexico. Its cobbled streets, 400-year-old buildings, and the castle-like Château Frontenac feel like a slice of old France. In February, the Québec Winter Carnival transforms the city into a magical wonderland of ice sculptures and outdoor fun.",
    bestTime: 'Jun–Aug & Jan–Mar',
    featured: true,
  },
  {
    id: 'montreal',
    name: 'Montréal',
    province: 'Québec',
    image: 'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?auto=format&fit=crop&w=800&q=80',
    alt: 'Montréal skyline viewed from the Mont-Royal park lookout',
    shortDesc:
      'A cultural powerhouse famous for the Jazz Festival, incredible food, bilingual charm, and the underground city that keeps life going through winter.',
    fullDesc:
      "Canada's cultural capital hosts the world-famous Jazz Festival, Just for Laughs comedy festival, and Formula 1 Canadian Grand Prix. Wander Old Montréal's lantern-lit cobblestone lanes, order a smoked meat sandwich on St-Laurent, and discover the vast underground city that keeps life buzzing through winter.",
    bestTime: 'Jun–Sep',
    featured: true,
  },
  {
    id: 'halifax',
    name: 'Halifax',
    province: 'Nova Scotia',
    image: 'https://images.unsplash.com/photo-1570829053985-56e661df1ca2?auto=format&fit=crop&w=800&q=80',
    alt: 'Halifax waterfront boardwalk with historic buildings and boats',
    shortDesc:
      "Nova Scotia's charming capital combines maritime history with modern energy — the waterfront, Citadel Hill fortress, and the world's best lobster rolls.",
    fullDesc:
      "Nova Scotia's charming capital combines maritime history with modern energy. Explore the working waterfront, hike up to the star-shaped Citadel Hill fortress, visit the Canadian Museum of Immigration, and feast on the world's best lobster rolls. Halifax is also the gateway to the legendary Cabot Trail scenic drive.",
    bestTime: 'Jun–Sep',
    featured: false,
  },
  {
    id: 'jasper',
    name: 'Jasper National Park',
    province: 'Alberta',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80',
    alt: 'Jasper National Park – serene alpine lake mirroring surrounding mountains',
    shortDesc:
      "Quieter and wilder than Banff, Jasper is a Dark Sky Preserve offering some of North America's finest stargazing. Drive the legendary Icefields Parkway.",
    fullDesc:
      "Quieter and wilder than its neighbour Banff, Jasper is a certified Dark Sky Preserve offering some of North America's finest stargazing. Drive the legendary Icefields Parkway, step onto the Columbia Icefield, kayak the Maligne Lake, and soak tired muscles in the Miette Hot Springs after a long day on the trails.",
    bestTime: 'Jul–Sep',
    featured: false,
  },
]

export default destinations
