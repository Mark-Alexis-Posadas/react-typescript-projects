import Carousel from "./Carousel";

export default function Root() {
  return (
    <div className="grid grid-cols-6 gap-3">
      <Carousel active={0} />
      <Carousel active={3} />
      <Carousel active={1} />
      <Carousel active={2} />
      <Carousel active={1} />
      <Carousel active={3} />
      <Carousel active={0} />
      <Carousel active={3} />
      <Carousel active={2} />
    </div>
  );
}
