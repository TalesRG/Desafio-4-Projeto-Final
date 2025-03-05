import Image from "next/image";

const DetranLogo = () => {
    return (
        <Image
          width={200}
          height={200}
          src="/detran-logo.png"
          alt="Detran-DF Logo"
          className="w-40 md:w-60 mb-4"
        />
    );
};

export default DetranLogo;