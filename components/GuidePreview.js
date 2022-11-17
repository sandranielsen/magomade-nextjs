import Image from "next/image";

export default function GuidePreview() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <Image
          src="/lola's-house.jpg"
          alt="Lola Mago's House Porch"
          width={300}
          height={300}
          className="w-full"
        />
      </div>
      <div
        id="preview-container"
        className="px-12 flex text-white"
      >
        <div className="my-auto flex flex-col gap-8">
          <p>Guides</p>
          <h1 className="text-2xl">COMING SOON!</h1>
          <button
            id="primary-button"
            className="flex w-40 items-center justify-center rounded-full border border-transparent px-8 py-3 text-base font-medium text-white"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}