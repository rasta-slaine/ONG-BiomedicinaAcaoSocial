import { Link } from "react-router-dom";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

interface MobileNavProps {
  items: NavItem[];
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ items, open, onClose }: MobileNavProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 top-0 z-50 flex h-screen w-full flex-col bg-background transition-transform duration-300 ease-in-out md:hidden",
        open ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex items-center justify-between border-b px-6 py-4">
        <Link to="/" className="flex items-center space-x-2" onClick={onClose}>
          <span className="text-xl font-bold">YourLogo</span>
        </Link>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
          <span className="sr-only">Close menu</span>
        </Button>
      </div>
      <div className="flex-1 overflow-auto pb-10">
        <div className="border-b py-4">
          <div className="flex flex-col space-y-3 px-6">
            <Button variant="outline" className="justify-start">
              Sign In
            </Button>
            <Button className="justify-start">Get Started</Button>
          </div>
        </div>
        <nav className="flex flex-col px-6 py-6">
          {items.map((item, index) => (
            <div key={index} className="py-1">
              {item.children ? (
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={item.title} className="border-b-0">
                    <AccordionTrigger className="py-2 text-base font-medium">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2 pl-4">
                        {item.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            to={child.href}
                            onClick={onClose}
                            className="py-2 text-base text-muted-foreground transition-colors hover:text-foreground"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="flex py-2 text-base font-medium transition-colors hover:text-foreground"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
