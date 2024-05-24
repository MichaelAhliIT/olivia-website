import ImageBlob from "./imageBlob";
import Info from "./info";

export default function Home() {
  return (
    <div className="grid w-full h-full bg-gradient-to-br from-fuchsia-300 to-pink-400">
      <Info />
      <ImageBlob />
    </div>
  );
}
