import StickyNav from "../components/StickyNav";
import TopNav from "../components/TopNav";

export default function Nhatky() {
  return (
    <>
      <TopNav active={"nhatky"} />
      <StickyNav active={"nhatky"} zen={false} />
    </>
  );
}
