import Compare from "@/components/compare";
import Flush from "@/components/flush_section";
import Ingredients from "@/components/ingredent";
import MagazineBanner from "@/components/magazinesBanner";
import ProductDetails from "@/components/product_details";
import VerifiedReview from "@/components/verified_review";

export default function Home() {
  return (
    <>
      <ProductDetails />
      <MagazineBanner />
      <Ingredients />
      <VerifiedReview />
      <Flush />
      <Compare />
    </>
  );
}
