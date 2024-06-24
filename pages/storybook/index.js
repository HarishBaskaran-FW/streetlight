// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Button from "@/components/button";
import Sidebar from "@/layouts/sidebar";

// Example JSON configuration
const sidebarConfig = {
  menuItems: [
    {
      title: "Home",
      icon: "fas fa-house",
      path: "/home"
    },
    {
      title: "Profile",
      icon: "fas fa-user",
      path: "/about"
    },
    {
      title: "Services",
      icon: "fas fa-cart-shopping",
      path: "/services",
      subMenu: [
        {
          title: "Web Development",
          icon: "fas fa-house",
          path: "/services/web-development"
        },
        {
          title: "SEO",
          path: "/services/seo"
        }
      ]
    },
    {
      title: "Contact",
      path: "/contact"
    }
  ]
};

export default function StoryBook() {
 return (
  <>
    <Sidebar menuItems={sidebarConfig.menuItems} />
  </>
 );
}
