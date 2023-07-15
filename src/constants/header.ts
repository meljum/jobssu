interface DHeader {
    id: number;
    to: string;
    label: string;
  }
  
  export const links: DHeader[] = [
    { id: 1, to: "/AboutPage ", label: "header.heder_aboutUs" },
    { id: 2, to: "/ReviewsPage", label: "header.heder_reviews" },
    { id: 3, to: "/NewsPage", label: "header.heder_news" },
    { id: 4, to: "/JobsPage", label: "header.heder_jobs" },
    { id: 5, to: "/HelpPage", label: "header.heder_help" },
  ];
  