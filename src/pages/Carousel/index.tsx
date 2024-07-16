import SourceCode from "../../components/SourceCode";
import Carousel from "./Carousel";

export default function Root() {
  return (
    <div className="flex flex-col items-end">
      <SourceCode link="https://github.com/Mark-Alexis-Posadas/react-typescript-projects/blob/main/src/pages/Carousel/index.tsx" />
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
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
    </div>
  );
}
