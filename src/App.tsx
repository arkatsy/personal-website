import { twMerge } from "tailwind-merge";
import ThemeToggle from "./theme-toggle";

export default function App() {
  return (
    <div className="flex min-w-[390px] justify-center">
      <main className="relative flex w-full max-w-3xl flex-col gap-10 px-6 py-14">
        <SocialLinks />
        <header className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-wider">arkatsy</h3>
          </div>
          <ThemeToggle />
        </header>
        <div className="mr-20 text-lg">
          <p>Hey, I'm Argyris, a CS undergraduate and self-taught developer from Greece.</p>
          <br />
          <p>I enjoy hacking and crafting things using javascript.</p>
          <br />
          <p>Here are some of my projects:</p>
          <br />
          <nav>
            <ul className="-mt-4 flex flex-wrap gap-2 text-base md:gap-6 ">
              <li className="group">
                <HashTagLink hash="frontend">frontend</HashTagLink>
              </li>
              <li className="group">
                <HashTagLink hash="backend">backend</HashTagLink>
              </li>
              <li className="group">
                <HashTagLink hash="tooling">tooling</HashTagLink>
              </li>
              <li className="group">
                <HashTagLink hash="misc">misc</HashTagLink>
              </li>
            </ul>
          </nav>
          <br />
          <div className="flex flex-col gap-10">
            <ProjectSection title="Frontend">
              <ProjectList>
                <ProjectListItem>
                  <ProjectListItem.Title>Pomodoro timer</ProjectListItem.Title>
                  <ProjectListItem.Links repo="https://github.com/arkatsy/pomodoro-timer" live="https://pomodoro.arkatsy.me" />
                </ProjectListItem>
                <ProjectListItem>
                  <ProjectListItem.Title>Sorting visualizer</ProjectListItem.Title>
                  <ProjectListItem.Links
                    repo="https://github.com/arkatsy/sorting-visualizer"
                    live="https://sorting-visualizer.arkatsy.me"
                  />
                </ProjectListItem>
                <ProjectListItem>
                  <ProjectListItem.Title>Markdown editor</ProjectListItem.Title>
                  <ProjectListItem.Links repo="https://github.com/arkatsy/markdown-editor" live="https://markdown-editor.arkatsy.me/" />
                </ProjectListItem>
                <ProjectListItem>
                  <ProjectListItem.Title>Dictionary website</ProjectListItem.Title>
                  <ProjectListItem.Links repo="https://github.com/arkatsy/dictionary-app" live="https://dictionary.arkatsy.me/" />
                </ProjectListItem>
                <ProjectListItem>
                  <ProjectListItem.Title>Countries explorer</ProjectListItem.Title>
                  <ProjectListItem.Links repo="https://github.com/arkatsy/countries-explorer" live="https://countries.arkatsy.me/" />
                </ProjectListItem>
              </ProjectList>
            </ProjectSection>
            <ProjectSection title="Backend">
              <ProjectList>
                <ProjectListItem>
                  <ProjectListItem.Title>HTTP/1.1 server</ProjectListItem.Title>
                  <ProjectListItem.Links repo="https://github.com/arkatsy/http-server-js" />
                </ProjectListItem>
                <ProjectListItem>
                  <ProjectListItem.Title>Basic redis server from scratch</ProjectListItem.Title>
                  <ProjectListItem.Links repo="https://github.com/arkatsy/redis-js" />
                </ProjectListItem>
              </ProjectList>
            </ProjectSection>
            <ProjectSection title="Tooling">
              <ProjectList>
                <ProjectListItem>
                  <ProjectListItem.Title>Babel plugin that removes logs</ProjectListItem.Title>
                  <ProjectListItem.Links repo="https://github.com/arkatsy/babel-plugin-remove-console" />
                </ProjectListItem>
              </ProjectList>
            </ProjectSection>
            <ProjectSection title="Misc">
              <ProjectList>
                <ProjectListItem>
                  <ProjectListItem.Title>An Interpreter written in javascript</ProjectListItem.Title>
                  <ProjectListItem.Links repo="https://github.com/arkatsy/mlang-language" />
                </ProjectListItem>
                <ProjectListItem>
                  <ProjectListItem.Title>Advent of Code 2023 solutions</ProjectListItem.Title>
                  <ProjectListItem.Links repo="https://github.com/arkatsy/aoc-2023" />
                </ProjectListItem>
              </ProjectList>
            </ProjectSection>
          </div>
        </div>
      </main>
    </div>
  );
}

function SocialLinks() {
  return (
    <ul className="absolute right-0 top-[8.7%] flex-col gap-1 px-6 md:flex">
      <li>
        <NewTabLink
          href="https://github.com/arkatsy"
          className="text-blue-500 underline underline-offset-2 visited:text-purple-400 dark:text-blue-400 dark:visited:text-purple-400"
        >
          Github
        </NewTabLink>
      </li>
      <li>
        <NewTabLink
          href="https://linkedin.com/in/arkatsy"
          className="text-blue-500 underline underline-offset-2 visited:text-purple-400 dark:text-blue-400 dark:visited:text-purple-400"
        >
          LinkedIn
        </NewTabLink>
      </li>
      <li>
        <NewTabLink
          href="/resume.pdf"
          className="text-blue-500 underline underline-offset-2 visited:text-purple-400 dark:text-blue-400 dark:visited:text-purple-400"
        >
          Resume
        </NewTabLink>
      </li>
    </ul>
  );
}

function ProjectSection({ title, children }: { title: string; children: React.ReactNode }) {
  const lowercaseTitle = title.toLowerCase();
  return (
    <section id={lowercaseTitle} className="flex flex-col gap-4">
      <a href={`#${lowercaseTitle}`} className="group relative flex w-fit items-center font-medium underline-offset-2 hover:underline">
        <HashTagIcon className="absolute -left-4 opacity-0 transition-opacity group-hover:opacity-100 motion-reduce:duration-0" />
        {title}
      </a>
      {children}
    </section>
  );
}

function ProjectList({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-col gap-6">{children}</ul>;
}

function ProjectListItem({ children }: { children: React.ReactNode }) {
  return <li className="flex flex-col">{children}</li>;
}

ProjectListItem.Title = function ({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="flex items-center">
      <ChevronRightIcon className="mr-2" />
      {children}
    </h4>
  );
};

ProjectListItem.Links = function ({ repo, live }: { repo: string; live?: string }) {
  return (
    <div className="flex flex-col">
      {live && (
        <p>
          live:&nbsp;
          <NewTabLink
            href={live}
            className="underline underline-offset-2 opacity-85 transition-opacity duration-200 hover:opacity-95 motion-reduce:duration-0 dark:opacity-65 dark:hover:opacity-85"
          >
            {live}
          </NewTabLink>
        </p>
      )}
      <p>
        repo:&nbsp;
        <NewTabLink
          href={repo}
          className="underline underline-offset-2 opacity-85 transition-opacity duration-200 hover:opacity-95 motion-reduce:duration-0 dark:opacity-65 dark:hover:opacity-85"
        >
          {repo}
        </NewTabLink>
      </p>
    </div>
  );
};

function HashTagLink({ children, hash, ...rest }: { children: React.ReactNode; hash: string } & React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={`#${hash}`} className="flex items-center opacity-65 transition-opacity duration-200 group-hover:opacity-90" {...rest}>
      <HashTagIcon />
      {children}
    </a>
  );
}

function NewTabLink({ children, href, ...rest }: { children: React.ReactNode; href: string } & React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

function HashTagIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={twMerge("size-[0.9rem]", className)}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={twMerge("size-[0.9rem]", className)}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
}
