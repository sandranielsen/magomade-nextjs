import Link from "next/link";
import Image from "next/image";

export default function SecondaryNav() {

  return (
    <div className="navbar-alt">
      <div className="flex w-1/3 justify-start gap-4 m-auto">
        <div className="dropdown">
          <div className="dropdown-button">
            <button href="/" id="nav-item">
              Patterns
            </button>
            <Image src="/arrow.svg" width={10} height={10} alt="Arrow" />
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
          <Image src="/search.svg" width={20} height={20} alt="Search" />
        </Link>
        <Link href="/">
          <Image src="/cart.svg" width={20} height={20} alt="Cart" />
        </Link>
      </div>
    </div>
  );
}
