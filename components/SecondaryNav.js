import Link from "next/link";
import Image from "next/image";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ShoppingBagIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SecondaryNav() {

  return (
    <div className="navbar-alt">
      <div className="flex w-1/3 justify-start gap-4 m-auto">
        <div className="dropdown">
          <div className="dropdown-button">
            <button href="/" id="nav-item">
              Patterns
            </button>
            <ChevronDownIcon className="h-5 w-5" />
          </div>

          <div className="dropdown-content">
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
            src="/logo-color.png"
            width={70}
            height={70}
            alt="MagoMade Logo"
            id="logo-secondary"
          />
        </Link>
      </div>

      <div className="flex flex-row w-1/3 justify-end gap-4 m-auto">
        <Link href="/">
          <MagnifyingGlassIcon  className="h-5 w-5"/>
        </Link>
        <Link href="/">
          <ShoppingBagIcon className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
