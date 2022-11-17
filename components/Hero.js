import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="z-1">
        <div className="relative flex w-full h-screen bg-black/[.1] z-10"></div>
        <Image
          src="/banner-beachy-top-desktop.jpg"
          layout="fill"
          objectFit="cover"
          alt="Beachy Top Pattern"
          className="w-full h-screen object-cover m-0"
        />
      </div>

      <div id="side-padding" className="absolute grid text-white w-12 z-20 bottom-12">
        <h6>New</h6>

        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Beachy Top Pattern
          </h1>

          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md">
              <a
                href="/"
                id="primary-button"
                className="flex w-full items-center justify-center rounded-full border border-transparent px-8 py-3 text-base font-medium text-white"
              >
                Find pattern
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
