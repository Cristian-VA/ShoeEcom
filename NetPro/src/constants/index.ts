export const MenShoesLinks = [
   
    {
      route: "/collections/men-sneakers",
      label: "Sneakers",
    },
    {
      route: "/collections/men-active",
      label: "Active Shoes",
    },
    {
      route: "/collections/men-slip-ons",
      label: "Slip Ons",
    },
    {
      route: "/collections/men-hiking",
      label: "Hiking",
    },

    {
        route: "/collections/men",
        label: "View All",
      },
  ];

  export const MenAccesoriesLinks = [
   
    {
      route: "collections/men-belts",
      label: "Belts",
    },
    {
      route: "/collections/men-briefcases",
      label: "Briefcases",
    },
    {
      route: "/collections/men-wallets",
      label: "Wallets",
    },
    {
      route: "/collections/men-accesories",
      label: "View All",
    },
  ];

  



  export const WomenShoesLinks = [
   
    {
      route: "/collections/women-sneakers",
      label: "Sneakers",
    },
    {
      route: "/collections/women-active",
      label: "Active Shoes",
    },
    {
      route: "/collections/women-slip-ons",
      label: "Slip Ons",
    },
    {
      route: "/collections/women-hiking",
      label: "Hiking",
    },
    {
        route: "/collections/women-flats",
        label: "Flats",
      },

    {
        route: "/collections/women",
        label: "View All",
      },
  ];

  export const WomenAccesoriesLinks = [
   
    {
        route: "/collections/women-belts",
        label: "Belts",
      },
      {
        route: "/collections/women-bags",
        label: "Bags",
      },
      {
        route: "/collections/women-wallets",
        label: "Wallets",
      },
      {
        route: "/collections/women-accesories",
        label: "View All",
      },
  ];

  export const KidsLinks = [
   
      {
        route: "/collections/kids-sneakers",
        label: "Sneakers",
      },
      {
        route: "/collections/kids-slip-ons",
        label: "Slip Ons",
      },
      {
        route: "/collections/kids",
        label: "View All",
      },
  ];


  export const Banner1 = {
    BannerImg: "/assets/Home/Banner2.png",
    MobileImg: "/assets/Home/MobileBanner2.png",
    Heading: "NEW YEAR, NEW SHOES",
    message: "Step into the New Year with Fresh Beginnings! Elevate your journey with style and comfort."
  }

  export const Banner2 = {
    BannerImg: "/assets/Home/Banner3.png",
    MobileImg: "/assets/Home/MobileBanner3.png",
    Heading: "Frosty Feat: Cozy Winter Kicks",
    message: "Navigate the snowy landscapes in trendsetting winter footwear."
  }

  export const menShoeSizes = [ "8" , "8.5", "9" , "9.5", "10" ,"10.5", "11", "11.5", "12", "12.5", "13", "13.5" , "14"]

  export const womenShoeSizes = [ "5", "5.5", "6", "6.5", "7", "7.5", "8" , "8.5", "9" , "9.5", "10" ,"10.5", "11"]

  export const kidsShoeSizes = [ "11T", "12T", "13T", "1Y", "2Y", "3Y" ]

  export const helpInfo = ["+1 (555) 123-4567", "+1 (555) 987-6543 (Text-Only)", "support@quillstride.com", "Returns/Exchanges", "FAQ/Contact Us"];

  export const shopInfo = [
   
    {
      route: "/collections/men-sneakers",
      label: "Men's shoes",
    },
    {
      route: "/collections/women-sneakers",
      label: "women's shoes",
    },
    {
      route: "/collections/kids",
      label: "Men's accesories",
    },
    {
      route: "/collections/kids",
      label: "Women's accesories",
    },
    {
      route: "/collections/kids",
      label: "Kids shoes",
    },
    {
      route: "/",
      label: "Gift cards",
    },
    {
      route: "/",
      label: "Refer a friend",
    },

];
export const companyInfo = ["Our Stores", "Our Story", "Our Materials", "Sustainability", "Shoe Care", "Partnerships", "Affiliates", "Community Offers", "Product Testing"];





export const categoryLinksMap: Record<string, any[]> = {
  "men-sneakers": MenShoesLinks,
  "men-active": MenShoesLinks,
  "men-hiking": MenShoesLinks,
  "men-slip-ons": MenShoesLinks,
  "men": MenShoesLinks,
  "men-accesories": MenAccesoriesLinks,
  "men-belts": MenAccesoriesLinks,
  "men-briefcases": MenAccesoriesLinks,
  "men-wallets": MenAccesoriesLinks,
  "women": WomenShoesLinks,
  "women-sneakers": WomenShoesLinks,
  "women-active": WomenShoesLinks,
  "women-slip-ons": WomenShoesLinks,
  "women-hiking": WomenShoesLinks,
  "women-flats": WomenShoesLinks,
  "women-accesories": WomenAccesoriesLinks,
  "women-belts": WomenAccesoriesLinks,
  "women-bags": WomenAccesoriesLinks,
  "women-wallets": WomenAccesoriesLinks,
  "kids": KidsLinks,
  "kids-sneakers": KidsLinks,
  "kids-slip-ons": KidsLinks
};

export const categorySizeMap: Record<string, any[]> = {
  "men-sneakers": menShoeSizes,
  "men-active": menShoeSizes,
  "men-hiking": menShoeSizes,
  "men-slip-ons": menShoeSizes,
  "men": menShoeSizes,
  "men-accesories": menShoeSizes,
  "men-belts": menShoeSizes,
  "men-briefcases": menShoeSizes,
  "men-wallets": menShoeSizes,
  "women": womenShoeSizes,
  "women-sneakers": womenShoeSizes,
  "women-active": womenShoeSizes,
  "women-slip-ons": womenShoeSizes,
  "women-hiking": womenShoeSizes,
  "women-flats": womenShoeSizes,
  "women-accesories": menShoeSizes,
  "women-belts": menShoeSizes,
  "women-bags": menShoeSizes,
  "women-wallets": menShoeSizes,
  "kids": kidsShoeSizes,
  "kids-sneakers": kidsShoeSizes,
  "kids-slip-ons": kidsShoeSizes
};

export const bestForSneakers = [
   
  {
    bestFor: "active",
    label: "active",
  },
  {
    bestFor: "everyday",
    label: "everyday",
  },
  {
    bestFor: "warm-weather",
    label: "warm weather",
  },
  {
    bestFor: "cold-weather",
    label: "cold weather",
  },
];

export const bestForActive = [
   
  {
    bestFor: "running",
    label: "running",
  },
  {
    bestFor: "gym-workouts",
    label: "gym workouts",
  },
  {
    bestFor: "court-sports",
    label: "court sports",
  },
  {
    bestFor: "team-sports",
    label: "team sports",
  },
];

export const bestForSlipOns = [
   
  {
    bestFor: "for-home-comfort",
    label: "for home comfort",
  },
  {
    bestFor: "beach-or-poolside",
    label: "beach or poolside",
  },
  {
    bestFor: "traveling",
    label: "traveling",
  },
  {
    bestFor: "casual-outings",
    label: "casual outings",
  },
];

export const bestForHiking = [
   
  {
    bestFor: "trail-running",
    label: "trail running",
  },
  {
    bestFor: "outdoor-adventures",
    label: "outdoor adventures",
  },
  {
    bestFor: "hiking-trails",
    label: "hiking trails",
  },
  {
    bestFor: "day-hikes",
    label: "day hikes",
  },
];

export const sortBy = [
   
  {
   
    label: "Price (highest to lowest)",
    key: "expensive"
    
  },
  {
    
    label: "Price (lowest to highest)",
    key: "cheap"
  },
  {
  
    label: "newest to oldest",
    key: "newest"
  },
  {
   
    label: "Oldest to Newest",
    key: "oldest"
  },
];

export const categoryBestForMap: Record<string, any[]> = {
  "men-sneakers": bestForSneakers,
  "men-active": bestForActive,
  "men-hiking": bestForHiking,
  "men-slip-ons": bestForSlipOns,
  "men": menShoeSizes,
  "men-accesories": menShoeSizes,
  "men-belts": menShoeSizes,
  "men-briefcases": menShoeSizes,
  "men-wallets": menShoeSizes,
  "women": bestForSneakers,
  "women-sneakers": bestForSneakers,
  "women-active": bestForActive,
  "women-slip-ons": bestForSlipOns,
  "women-hiking": bestForHiking,
  "women-flats": bestForHiking,
  "women-accesories": menShoeSizes,
  "women-belts": menShoeSizes,
  "women-bags": menShoeSizes,
  "women-wallets": menShoeSizes,
  "kids": bestForSneakers,
  "kids-sneakers": bestForSneakers,
  "kids-slip-ons": bestForSlipOns
};









