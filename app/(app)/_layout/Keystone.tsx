import Link from "next/link";
import Logo from "@/assets/Logo";
export default function Keystone() {
  return (
    <div className="center hidden sm:flex">
      <Link
        href="/"
        className="center fixed h-[var(--header-height)] w-[var(--sidebar-closed-width)] border-r hover:text-primary xl:w-[var(--sidebar-open-width)] xl:justify-start xl:pl-5"
      >
        <Logo className="h-[30px] w-[30px]" />
      </Link>
    </div>
  );
}
