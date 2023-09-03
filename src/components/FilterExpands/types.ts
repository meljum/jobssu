export interface selectedFilters {
    location?: string;
    priceRange?: { minPrice: string; maxPrice: string };
    schedule?: string;
    experienceRange?: { minExperience: string; maxExperience: string };
    specialization?: string;
    special?: string;
    time?: string;
    currency?: string;
    [key: string]: any;
  }
  
  export interface setFilteredVakansies {
    handleFilterByLocation: (cityName: string) => void;
    handleFilterByPriceRange: (minPrice: string, maxPrice: string) => void;
    handleFilterBySchedule: (schedule: string) => void;
    handleFilterByExperienceRange: (
      minExperience: string,
      maxExperience: string
    ) => void;
    handleFilterBySpecial: (special: string) => void;
    handleFilterBySpecialization: ( specialization: string) => void;
    handleFilterByTime: (time: string) => void;
    handleFilterByDollars: (currency: string) => void;
  }


