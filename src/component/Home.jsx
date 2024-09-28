import Benefits from "./Benefits/Benefits";
import Frequently from "./Frequently/Frequently";
import Navigate from "./Navigate/Navigate";
import Testimonials from "./Testimonials/Testimonials";
import ProductsCard from "./ProductsCard";
import Main from "./Header/Main/Main";
function Home() {
  return (
    <>
      <Main />
      <Benefits />
      <Testimonials />
      <Frequently />
      <Navigate />
      <ProductsCard />
    </>
  );
}
export default Home;
