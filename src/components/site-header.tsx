import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";
const logoImage = "/images/logo-ong.jpg";

// Sample navigation data - replace with your actual navigation structure
type NavigationItem = {
  title: string;
  href: string;
  exact?: boolean;
  children?: { title: string; href: string }[];
};

const navigationItems: NavigationItem[] = [
  {
    title: "Inicio",
    href: "/",
    exact: true,
  },
  {
    title: "SASUS",
    href: "/sasus",
  },
  {
    title: "DrDacioCampos",
    href: "/dr-dacio-campos",
  },
  {
    title: "Eventos",
    href: "/events",
  },

  {
    title: "Donate",
    href: "/donate",
  },

  // {
  //   title: "Sobre",
  //   href: "/about",
  //   children: [
  //     {
  //       title: "Quem Somos",
  //       href: "/about",
  //     },
  //     {
  //       title: "Biomedicine",
  //       href: "/biomedicine",
  //     },
  //   ],
  // },

  {
    title: "Quem Somos",
    href: "/about",
  },
  {
    title: "Transparência",
    href: "/transparencia",
  },
  {
    title: "Biomedicina",
    href: "/biomedicine",
  },
  {
    title: "Contato",
    href: "/contact",
  },
  // {
  //   title: "Volunteer",
  //   href: "/volunteer",
  // },

  // {
  //   title: "Products",
  //   href: "/products",
  //   children: [
  //     {
  //       title: "Category 1",
  //       href: "/products/category-1",
  //     },
  //     {
  //       title: "Category 2",
  //       href: "/products/category-2",
  //     },
  //     {
  //       title: "Category 3",
  //       href: "/products/category-3",
  //     },
  //   ],
  // },
  // {
  //   title: "Services",
  //   href: "/services",
  //   children: [
  //     {
  //       title: "Service 1",
  //       href: "/services/service-1",
  //     },
  //     {
  //       title: "Service 2",
  //       href: "/services/service-2",
  //     },
  //   ],
  // },
];

export function SiteHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className=" flex h-16 items-center justify-around ">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logoImage}
              alt="Logo"
              className="h-16 w-16 rounded-full object-cover"
            />
          </Link>

          <nav className="hidden md:flex md:gap-6">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative">
                {item.children ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="link"
                        className="h-auto p-0 font-medium text-foreground transition-colors hover:text-primary focus:text-primary w-6 rounded-3xl "
                      >
                        {item.title}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.title} asChild>
                          <Link to={child.href}>{child.title}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={item.href}
                    className="text-md flex items-center font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          <Button size="sm" className="hidden md:flex">
            Get Started
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      <MobileNav
        items={navigationItems}
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </header>
  );
}
