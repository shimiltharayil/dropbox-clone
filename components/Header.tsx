import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";

type Props = {};

function Header({}: Props) {
  return (
    <header className="flex justify-between items-center">
      <Link href="/" className="flex items-center space-x-2">
        <div className="bg-[#0160FE] w-fit">
          <Image
            src="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
            alt="logo"
            height={50}
            className="invert"
            width={50}
          />
        </div>
        <h1 className="font-bold text-xl">Dropbox</h1>
      </Link>
      {/* Theme Toggler  */}
      <ThemeToggler />
      <UserButton afterSignOutUrl="/" />
      <SignedOut>
        <SignInButton afterSignInUrl="/dashboard" mode="modal" />
      </SignedOut>
    </header>
  );
}

export default Header;
