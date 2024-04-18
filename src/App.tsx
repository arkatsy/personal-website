import { twMerge } from "tailwind-merge";
import ThemeToggle from "./theme-toggle";

export default function App() {
  return (
    <div className="flex justify-center">
      <main className="flex w-full max-w-3xl flex-col gap-10 py-14">
        <header className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-wider">arkatsy</h3>
          </div>
          <ThemeToggle />
        </header>
        <div className="text-lg">
          <p>Hey, I'm Argyris, a developer from Greece.</p>
          <br />
          <p>I like to mess and hack around things with Javascript whether it's on the web, frontend, backend or tooling.</p>
          <br />
          <p>Here are some of my projects:</p>
          <br />
          <nav>
            <ul className="-mt-4 flex gap-6 text-base">
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

function ProjectSection({ title, children }: { title: string; children: React.ReactNode }) {
  const lowercaseTitle = title.toLowerCase();
  return (
    <section id={lowercaseTitle} className="flex flex-col gap-4">
      <a href={`#${lowercaseTitle}`} className="group relative flex w-fit items-center font-medium underline underline-offset-2">
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
            className="underline underline-offset-2 opacity-65 transition-opacity duration-200 hover:opacity-85 motion-reduce:duration-0"
          >
            {live}
          </NewTabLink>
        </p>
      )}
      <p>
        repo:&nbsp;
        <NewTabLink
          href={repo}
          className="underline underline-offset-2 opacity-65 transition-opacity duration-200 hover:opacity-85 motion-reduce:duration-0"
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
