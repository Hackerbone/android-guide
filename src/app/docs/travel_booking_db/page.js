"use client";
import styles from "@/app/page.module.css";
import data from "./snippets.json";
import CodeRenderer from "@/components/CodeRenderer";

export default function Home() {
  return (
    <div className={styles.content}>
      <h1>Travel Booking Application (Kotlin & SQLite)</h1>
      <p>
        This is a Travel Booking application built using Kotlin, Android Studio, and SQLite for local storage.
        The application includes user registration, login, and travel search functionality with date and time pickers.
        Below are the key code snippets used in the implementation.
      </p>

      {data.snippets.map((snippet) => (
        <CodeRenderer
          key={snippet.codeblockTitle}
          code={snippet.code}
          title={snippet.codeblockTitle}
        />
      ))}
    </div>
  );
} 