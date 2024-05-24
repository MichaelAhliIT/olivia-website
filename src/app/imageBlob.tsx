import Image from "next/image";

const ImageBlob = () => {
  return (
    <>
      <svg
        viewBox="0 0 1526 144"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden xl:inline-block"
      >
        <path
          fill="rgba(255, 255, 255, 1)"
          d="M 0 43 C 311.6 43 467.4 110 779 110 L 779 110 L 779 0 L 0 0 Z"
          stroke-width="0"
        ></path>{" "}
        <path
          fill="rgba(255, 255, 255, 1)"
          d="M 778 110 C 1077.2 110 1226.8 45 1526 45 L 1526 45 L 1526 0 L 778 0 Z"
          stroke-width="0"
        ></path>{" "}
      </svg>
      <div className="flex flex-flow-row items-center justify-center w-full h-[80vh]">
        <div>
          <h1 className="flex justify-center text-2xl pb-5 font-bold">
            This is me, Olivia
          </h1>
          <Image
            className=""
            src="/oliv.png"
            width={350}
            height={350}
            alt="Background blob"
          />
        </div>
      </div>
    </>
  );
};

export default ImageBlob;
