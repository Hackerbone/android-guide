"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.css";
import { usePathname } from "next/navigation";

// Define sidebar structure as a JSON object
const sidebarLinks = [
  {
    category: "Docs",
    links: [
      { name: "Introduction", path: "/docs" },
      { name: "Passing Context", path: "/docs/context" },
      { name: "Radio Buttons", path: "/docs/radio" },
      { name: "Checkbox", path: "/docs/checkbox" },
      { name: "Spinners | DatePicker", path: "/docs/spinner" },
      { name: "Intents", path: "/docs/intents" },
      { name: "Options Menu", path: "/docs/options" },
      { name: "Navigation", path: "/docs/navigate" },
      { name: "Example App", path: "/docs/example" },
      { name: "Helpers", path: "/docs/helpers" },
      { name: "Task Manager Example", path: "/docs/task-manager-example" },
      { name: "Student Details Database", path: "/docs/student_details_db" },
      { name: "Context Menu Database", path: "/docs/Context_menu_db" },
    ],
  },
  {
    category: "Core Topics",
    links: [
      { name: "Activities", path: "/docs/activities" },
      { name: "Architecture", path: "/docs/architecture" },
      { name: "UI & Navigation", path: "/docs/ui-navigation" },
    ],
  },
];

export default function Layout({ children }) {
  const pathname = usePathname(); // Get current path

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/">
            <Image
              className={styles.androidLogo}
              src="https://www.gstatic.com/devrel-devsite/prod/vdbb152dfd6ef5e309aa1d261d45f3fd443aed2691cbfba3f9f80f8a4012a0a8f/android/images/lockup.svg"
              alt="Android Logo"
              width={129}
              height={20}
              priority
            />
          </Link>
          <nav className={styles.mainNav}>
            {["Guides", "Reference", "Samples", "Downloads"].map((item) => (
              <Link
                key={item}
                href="/docs"
                className={`${styles.navLink} ${
                  pathname === "/docs" ? styles.active : ""
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.sidebar}>
          <nav className={styles.sideNav}>
            {sidebarLinks.map((section) => (
              <div key={section.category}>
                <h3>{section.category}</h3>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        href={link.path}
                        className={pathname === link.path ? styles.active : ""}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        {children}
      </main>
    </div>
  );
}
