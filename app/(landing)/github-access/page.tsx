import { Metadata } from "next";
import GithubAccessForm from "./github-access-form";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "GitHub Access - Shadcn UI Kit",
  openGraph: {
    images: [`/seo.jpg`]
  }
};

export default function Page() {
  return (
    <section className="py-8 lg:py-16">
      <div className="mx-auto max-w-(--breakpoint-sm) mb-8 lg:mb-12">
        <h1 className="text-3xl font-bold mb-8 sm:text-4xl">GitHub Access</h1>
        <article>
          <p>
            Shadcn UI Kit’s premium assets are hosted in a private GitHub repository. If you hold
            lifetime access or have purchased a premium template, please contact us to receive an
            invitation. This will grant you access to the source code, allowing you to manage the
            project independently and receive free updates.
          </p>
          <p>
            As a collaborator on our private GitHub repository, you will receive the following
            benefits:
          </p>
          <ul className="list-disc">
            <li>Access to the latest development branches and pre-release versions</li>
            <li>
              Early access to bug fixes and new features without waiting for official releases
            </li>
            <li>The ability to submit and review pull requests</li>
            <li>
              Permission to open and manage issues, contributing directly to improving the project
            </li>
          </ul>
        </article>
        <Suspense>
          <GithubAccessForm />
        </Suspense>
      </div>
    </section>
  );
}
