import React from "react";
import { Collapse } from "@material-tailwind/react";
import {
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
  FolderIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const NAV_MENU = [
  {
    name: "Skills",
    icon: Squares2X2Icon, // Represents stacking/organization of skills
    href: "#skills",
  },
  {
    name: "Projects",
    icon: FolderIcon, // Folder icon represents project storage
    href: "#projects",
  },
  {
    name: "Resume",
    icon: DocumentTextIcon, // Represents a document, fitting for a resume
    href: "#resume",
  },
  {
    name: "Testimonials",
    icon: ChatBubbleLeftRightIcon, // Represents communication/testimonials
    href: "#testimonials",
  },
  {
    name: "Contact",
    icon: EnvelopeIcon, // Envelope is commonly associated with contact/email
    href: "#contact",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Link
        href={href || "#"}
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Link>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <nav className="border-0 sticky top-0 z-50 bg-white shadow-sm h-16 flex flex-wrap items-center justify-between py-2">
      <div className="container mx-auto flex items-center justify-between">
        <h3 color="blue-gray" className="text-2xl font-bold text-blue-gray-900 px-4">
          Anurag Sinha
        </h3>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <button className="flex items-center gap-2">Sign In</button>
        </div>
        <div onClick={handleOpen} className="ml-auto inline-block lg:hidden">
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </div>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 bg-white shadow-sm p-4">
          <ul className="flex flex-col gap-4 p-4">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          {/* <div className="mt-6 mb-4 flex items-center gap-2">
            <Button variant="text">Sign In</Button>
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <Button color="gray">blocks</Button>
            </a>
          </div> */}
        </div>
      </Collapse>
    </nav>
  );
}

export default Navbar;
