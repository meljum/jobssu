interface IFooter {
  title: string;
  id: number;
  link: string;
}
export const footerData: IFooter[] = [
  {
    id: 1,
    link: "/AboutPage",
    title: "footer.aboutUs_title",
  },
  {
    id: 2,
    title: "footer.news_services_title",
    link: "/NewsPage",
  },
  {
    id: 3,
    title: "footer.help_title",
    link: "/HelpPage",
  },
  {
    id: 4,
    title: "footer.post_a_job_title",
    link: "/YourJobVacancy",
  },
  {
    id: 5,
    title: "footer.resumeSection_title",
    link: "/JobsPage",
  },
  {
    id: 6,
    title: "footer.addResume_title",
    link: "/YourResume",
  },
  {
    id: 7,
    title: "footer.section_of_vacancies_title",
    link: "/JobsPage",
  },
];
