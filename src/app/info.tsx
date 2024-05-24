import Image from "next/image";

const Info = () => {
  return (
    <div className="bg-white h-fit ">
      <div className="flex flex-col justify-center items-center gap-3 px-5 pb-5">
        <h1 className="mt-10 text-4xl font-bold bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">
          Hi Pookiers
        </h1>
        <p className="text-center text-xl">Welcome to my website!</p>
        <p className="text-center lg:text-xl">
          I'm Olivia, a passionate piano teacher who loves music and gaming.
          When I'm not teaching, you'll find me playing piano, Valorant, or GTA
          roleplay.
        </p>
        <div className="flex flex-row gap-5 mt-5 xl:mt-10">
          <Image
            className=""
            src="/valorant.png"
            width={75}
            height={75}
            alt="Valorant icon"
          />
          <Image
            className=""
            src="/piano.jpg"
            width={75}
            height={75}
            alt="Piano icon"
          />
          <Image
            className=""
            src="/gtav.png"
            width={75}
            height={75}
            alt="GTA V icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
