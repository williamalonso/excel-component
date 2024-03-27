import Head from "next/head";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return(
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default PageTitle;