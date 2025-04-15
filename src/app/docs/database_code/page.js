"use client";
import styles from "@/app/page.module.css";
import { Code } from "@geist-ui/core";
import data from "./snippets.json";

export default function Home() {
  return (
    <div className={styles.content}>
      <h1>database Entry App</h1>

      <h2>Overview</h2>
      <p>
        This app allows users to register or log in and enter their grades.
        It uses SQLite for local data storage and includes basic form validation.
        Once logged in, the user is directed to another screen to input their grade.
      </p>

      {data.snippets.map((snippet) => (
        <Code
          key={snippet.codeblockTitle}
          name={snippet.codeblockTitle}
          my={0}
          mt={2}
          block
        >
          {snippet.code}
        </Code>
      ))}
    </div>
  );
}
