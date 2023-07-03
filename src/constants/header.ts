interface DHeader {
    id: number;
    to: string;
    label: string;
  }
  
  export const links: DHeader[] = [
    { id: 1, to: "/AboutPage ", label: "header.title1" },
    { id: 2, to: "/ReviewsPage", label: "header.title2" },
    { id: 3, to: "/NewsPage", label: "header.title3" },
    { id: 4, to: "/JobsPage", label: "header.title4" },
    { id: 5, to: "/HelpPage", label: "header.title5" },
  ];
  