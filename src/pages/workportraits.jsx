import Gallery from "../components/Gallery";
import { workportraitImages } from "../data/workportraits";

export default function workportraits() {
  return <Gallery images={workportraitImages} />;
}