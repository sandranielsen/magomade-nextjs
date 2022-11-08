import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Nav() {

  /* transparent header functionality */
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false);
    }
  }

  useEffect(() => {
  window.addEventListener("scroll", changeBackground);
  }, )

    return (
      <div className={navbar ? "navbar active" : "navbar"}>
        <div className="flex w-1/3 justify-start gap-8 m-auto">
          <div className="dropdown">
            <div className="dropdown-button">
              <button href="/" id="nav-item">
                Patterns
              </button>
              <Image src="/arrow.svg" width={10} height={10} alt="Arrow" />
            </div>

            <div class="dropdown-content">
              <Link href="/collections/english">English</Link>
              <Link href="/collections/dansk">Dansk</Link>
            </div>
          </div>

          <Link id="nav-item" href="/">
            Guides
          </Link>
          <Link id="nav-item" href="/">
            About
          </Link>
        </div>

        <div className="flex w-1/3 justify-center">
          <Link href="/">
            <Image
              src="/logo-white.png"
              width={70}
              height={70}
              alt="MagoMade Logo"
              id="logo-primary"
            />
          </Link>
          <Link href="/">
            <Image
              src="/logo-color.png"
              width={70}
              height={70}
              alt="MagoMade Logo"
              id="logo-secondary"
            />
          </Link>
        </div>

        <div className="flex flex-row w-1/3 justify-end gap-8 m-auto">
          <Link href="/">
            <Image src="/search.svg" width={16} height={16} alt="Search" />
          </Link>
          <Link href="/">
            <Image src="/cart.svg" width={16} height={16} alt="Cart" />
          </Link>
        </div>
      </div>
    );
}