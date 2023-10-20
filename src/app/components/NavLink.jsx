import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#282828] sm:text-xl rounded md:p-0 hover:text-slate-400 border-b-2 border-fuchsia-600"
    >
      {title}
    </Link>
  );
};

export default NavLink;