// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Sidebar from "@/layouts/sidebar";
import React from "react";

// Example JSON configuration
const sidebarConfig = {
  menuItems: [
    {
      title: "Home",
      icon: "fas fa-house",
      path: "/storybook",
    },
    {
      title: "Components",
      icon: "fas fa-ticket",
      path: "/storybook/components",
    },
    {
      title: "Profile",
      icon: "fas fa-user",
      path: "/storybook/user",
    },
    {
      title: "Cart",
      icon: "fas fa-cart-shopping",
      path: "/services",
      subMenu: [
        {
          title: "Home",
          icon: "fas fa-house",
          path: "/storybook",
        },
        {
          title: "Button",
          icon: "fas fa-user",
          path: "/storybook/button",
        },
        {
          title: "Web Development",
          icon: "fas fa-house",
          path: "/services/web-development",
        },
        {
          title: "SEO",
          path: "/services/seo",
        },
        {
          title: "Home",
          icon: "fas fa-house",
          path: "/storybook",
        },
        {
          title: "Button",
          icon: "fas fa-user",
          path: "/storybook/button",
        },
        {
          title: "Web Development",
          icon: "fas fa-house",
          path: "/services/web-development",
        },
        {
          title: "SEO",
          path: "/services/seo",
        },
        {
          title: "Home",
          icon: "fas fa-house",
          path: "/storybook",
        },
        {
          title: "Button",
          icon: "fas fa-user",
          path: "/storybook/button",
        },
        {
          title: "Web Development",
          icon: "fas fa-house",
          path: "/services/web-development",
        },
        {
          title: "SEO",
          path: "/services/seo",
        },
      ],
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Services 2",
      icon: "fas fa-cart-shopping",
      path: "/services",
      subMenu: [
        {
          title: "Home",
          icon: "fas fa-house",
          path: "/storybook",
        },
        {
          title: "Button",
          icon: "fas fa-user",
          path: "/storybook/button",
        },
        {
          title: "Web Development",
          icon: "fas fa-house",
          path: "/services/web-development",
        },
        {
          title: "SEO",
          path: "/services/seo",
        },
        {
          title: "Home",
          icon: "fas fa-house",
          path: "/storybook",
        },
        {
          title: "Button",
          icon: "fas fa-user",
          path: "/storybook/button",
        },
        {
          title: "Web Development",
          icon: "fas fa-house",
          path: "/services/web-development",
        },
        {
          title: "SEO",
          path: "/services/seo",
        },
        {
          title: "Web Testing",
          icon: "fas fa-house",
          path: "/services/web-development",
        },
        {
          title: "SOO",
          path: "/services/seo",
        },
      ],
    },
  ],
};

export default function StoryBookLayout({ children }) {
  return (
    <div className="flex h-screen">
      <div className="m-5">
        <Sidebar
          companyName="Thruways"
          companyIcon="fas fa-text-width"
          menuItems={sidebarConfig.menuItems}
        />
      </div>
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
}
