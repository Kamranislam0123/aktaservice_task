import Image from "next/image";

export default function MagazineBanner() {
  const magazines = [
    { name: "ELLE", logo: "/elle_magazine_logo_svg_170x.svg" },
    { name: "GLAMOUR", logo: "/glamour_logo_svg_170x.svg" },
    { name: "BAZAAR", logo: "/harpers_bazaar_logo_svg_170x.svg" },
    { name: "COSMOPOLITAN", logo: "/Comopolitan_Magazine_Logo_1_170x.svg" },
  ];

  return (
    <section className="w-full py-8 md:py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <h2 className="text-lg font-semibold uppercase tracking-wider">
            As seen on
          </h2>
          <span className="font-bold">|</span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {magazines.map((magazine) => (
              <div
                key={magazine.name}
                className="flex items-center justify-center"
              >
                <Image
                  src={magazine.logo}
                  alt={`${magazine.name} logo`}
                  width={300}
                  height={100}
                  objectFit="cover"
                  className="h-6 md:h-8 w-auto opacity-90 hover:opacity-100 transition-opacity animate-fade-left"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
