import Link from "next/link";
import Image from "next/image";


export default function Footer() { 
  return (
    <div className="flex flex-col">
      <div
        id="padding"
        className="footer-container flex flex-row justify-between text-white"
      >

        {/* Language input */}
        <div className="w-6/12">
          <Image
            src="/magomade-logo-footer.png"
            alt="MagoMade Logo"
            width={250}
            height={250}
            className="m-0"
          />
          <form>
            <select id="lang" name="language">
              <option value="eng">English</option>
              <option value="da">Danish</option>
            </select>
          </form>
        </div>

        {/* Support  */}
        <div className="w-3/12 flex flex-col gap-4">
          <h4 className="text-xl mb-4">Support</h4>
          <Link className="text-sm" href="/policies">
            Terms & Conditions
          </Link>
          <Link className="text-sm" href="/">
            Contact
          </Link>
        </div>

        {/* Socials */}
        <div className="w-3/12 flex flex-col gap-4">
          <h4 className="text-xl mb-4">Socials</h4>
          <div className="flex flex-row gap-4 ">
            <Link
              className="rounded-full border border-white h-12 w-12 flex text-white hover:text-[#F4BBF8] hover:bg-white hover:scale-125 transition duration-150 ease-in-out"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 100 100"
                className="m-auto"
              >
                <g
                  id="Icon_ionic-logo-instagram"
                  data-name="Icon ionic-logo-instagram"
                  transform="translate(-4.5 -4.5)"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M75.333,12.833A20.895,20.895,0,0,1,96.167,33.667V75.333A20.895,20.895,0,0,1,75.333,96.167H33.667A20.895,20.895,0,0,1,12.833,75.333V33.667A20.895,20.895,0,0,1,33.667,12.833H75.333m0-8.333H33.667A29.252,29.252,0,0,0,4.5,33.667V75.333A29.252,29.252,0,0,0,33.667,104.5H75.333A29.252,29.252,0,0,0,104.5,75.333V33.667A29.252,29.252,0,0,0,75.333,4.5Z"
                    transform="translate(0 0)"
                    fill="currentColor"
                  />
                  <path
                    id="Path_11"
                    data-name="Path 11"
                    d="M29.875,21.5a6.25,6.25,0,1,1,6.25-6.25A6.235,6.235,0,0,1,29.875,21.5Z"
                    transform="translate(51.708 12.167)"
                    fill="currentColor"
                  />
                  <path
                    id="Path_12"
                    data-name="Path 12"
                    d="M36.25,19.583A16.667,16.667,0,1,1,19.583,36.25,16.682,16.682,0,0,1,36.25,19.583m0-8.333a25,25,0,1,0,25,25,25.006,25.006,0,0,0-25-25Z"
                    transform="translate(18.25 18.25)"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </Link>
            <Link
              className="rounded-full border border-white h-12 w-12 flex text-white hover:text-[#F4BBF8] hover:bg-white hover:scale-125 transition duration-150 ease-in-out"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 100 100.045"
                className="m-auto"
              >
                <path
                  id="Icon_ionic-logo-pinterest"
                  data-name="Icon ionic-logo-pinterest"
                  d="M52.261,2.25A50.015,50.015,0,0,0,32.19,98.075,44.292,44.292,0,0,1,33.06,86.6c.96-4.063,6.43-27.261,6.43-27.261a19.093,19.093,0,0,1-1.608-7.9c0-7.412,4.287-12.949,9.645-12.949,4.555,0,6.743,3.416,6.743,7.5,0,4.577-2.925,11.409-4.421,17.749-1.25,5.314,2.657,9.623,7.9,9.623,9.466,0,15.852-12.168,15.852-26.591,0-10.962-7.39-19.156-20.808-19.156-15.16,0-24.626,11.319-24.626,23.956a14.416,14.416,0,0,0,3.3,9.8c.915,1.094,1.049,1.541.714,2.791-.246.915-.781,3.126-1.027,4.019a1.718,1.718,0,0,1-2.5,1.25c-6.988-2.858-10.248-10.493-10.248-19.111,0-14.2,11.989-31.235,35.745-31.235,19.089,0,31.659,13.82,31.659,28.645C85.818,67.354,74.9,82,58.825,82c-5.4,0-10.471-2.925-12.213-6.229,0,0-2.9,11.52-3.528,13.753a41.569,41.569,0,0,1-5.023,10.717A50.02,50.02,0,1,0,52.261,2.25Z"
                  transform="translate(-2.25 -2.25)"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link
              className="rounded-full border border-white h-12 w-12 flex text-white hover:text-[#F4BBF8] hover:bg-white hover:scale-125 transition duration-150 ease-in-out"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 86.877 100"
                className="m-auto"
              >
                <path
                  id="Icon_simple-tiktok"
                  data-name="Icon simple-tiktok"
                  d="M48,.083C53.455,0,58.872.042,64.288,0c.333,6.375,2.625,12.875,7.292,17.375,4.667,4.625,11.25,6.75,17.666,7.458V41.624a44.6,44.6,0,0,1-17.5-4.042A51.479,51.479,0,0,1,65,33.708c-.042,12.167.042,24.333-.083,36.458a31.825,31.825,0,0,1-5.625,16.416A31.042,31.042,0,0,1,34.664,99.957a30.382,30.382,0,0,1-17-4.292A31.42,31.42,0,0,1,2.456,71.874c-.083-2.083-.125-4.167-.042-6.208A31.367,31.367,0,0,1,38.789,37.833c.083,6.167-.167,12.333-.167,18.5a14.3,14.3,0,0,0-18.25,8.833c-.875,2.125-.625,4.458-.583,6.708,1,6.833,7.583,12.583,14.583,11.958a14,14,0,0,0,11.542-6.708,9.614,9.614,0,0,0,1.708-4.417c.417-7.458.25-14.875.292-22.333.042-16.791-.042-33.541.083-50.291Z"
                  transform="translate(-2.369)"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>


      {/* Payment lsit */}
      <div>
        

      </div>
    </div>
  );
}