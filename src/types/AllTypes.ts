export interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

// export interface PageProps {
//   params: {
//     slug: string;
//   };
// }

export interface UrlProps {
  params: Promise<{
    slug: string;
  }>;
}
export interface CategoryPageHeaderProps {
  category: string;
}
export interface PageHeaderProps {
  title: string;
  subtitle: string;
}