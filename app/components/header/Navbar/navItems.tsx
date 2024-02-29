import Link from "next/link";

export default function NavItems() {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Offre",
      path: "/offre",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <ul className="flex gap-5 text-tblue font-semibold text-2xl">
      {links.map((link, index) => (
        <Link key={index} href={link.path}>
          {link.title}
        </Link>
      ))}
    </ul>
  );
}
