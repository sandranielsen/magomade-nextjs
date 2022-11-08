import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="z-1">
        <div className="w-full h-screen inset-0 bg-black/200 z-2"></div>
        <Image
          src="/banner-beachy-top-desktop.jpg"
          layout="fill"
          objectFit="cover"
          alt="Beachy Top Pattern"
          className="w-full h-screen object-cover m-0"
        />
      </div>

      <div className="absolute grid w-12 z-3 bottom-3 left-6">
        <h6>New</h6>

        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Beachy Top Pattern
          </h1>

          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md">
              <a
                href="/"
                id="secondary-button"
                className="flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
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
