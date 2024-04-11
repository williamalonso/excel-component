import Navbar from "@/components/Navbar/navbarComponent";
import PageTitle from "@/components/Title/pageTitleComponent";
import Datatable from "@/components/Datatable/datatableComponent";

const Home = () => {
  return (
    <>
      <PageTitle title="Exportação Excel" />
      <Navbar />
      <Datatable />
    </>
  );
}

export default Home;