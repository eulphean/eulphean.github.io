import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

// Import custom MDX components
import ImageGrid from "../../../../components/Projects/ImageGrid";
import ImageCard from "../../../../components/Projects/ImageCard";
import TechStack from "../../../../components/Projects/TechStack";
import ButtonGroup from "../../../../components/Projects/ButtonGroup";
import Button from "../../../../components/Projects/Button";

// Components for sub-pages
import SubPageNavbar from "../../../../components/Projects/SubPageNavbar";
import SubPageTitle from "../../../../components/Projects/SubPageTitle";
import SubPageFooter from "../../../../components/Projects/SubPageFooter";
import ContactSection from "../../../../components/Portfolio/ContactSection";
import SubpageDetailsPanel from "../../../../components/Projects/SubpageDetailsPanel";

// Map of components available in MDX
const components = {
  ImageGrid,
  ImageCard,
  TechStack,
  ButtonGroup,
  Button,
};

interface SubPageFrontmatter {
  title: string;
  subtitle: string;
  order: number;
  objective?: string;
  technicalDecisions?: string;
  keyInnovation?: string;
  outcome?: string;
  technologies?: string[];
}

interface SubPageInfo {
  slug: string;
  title: string;
  order: number;
}

interface SubPageProps {
  frontmatter: SubPageFrontmatter;
  mdxSource: MDXRemoteSerializeResult;
  projectSlug: string;
  projectTitle: string;
  currentSubpage: string;
  allSubpages: SubPageInfo[];
  nextSubpage: SubPageInfo | null;
}

export default function SubPage({
  frontmatter,
  mdxSource,
  projectSlug,
  projectTitle,
  currentSubpage,
  allSubpages,
  nextSubpage,
}: SubPageProps) {
  // Find previous subpage
  const currentIndex = allSubpages.findIndex((s) => s.slug === currentSubpage);
  const prevSubpage = currentIndex > 0 ? allSubpages[currentIndex - 1] : null;

  return (
    <div className="h-screen bg-white font-space-grotesk flex flex-col overflow-hidden">
      <Head>
        <title>
          {frontmatter.title} - {projectTitle} - Amay Kataria
        </title>
        <meta name="description" content={frontmatter.subtitle} />
      </Head>

      {/* Sub-page Navigation */}
      <SubPageNavbar
        subpages={allSubpages}
        currentSubpage={currentSubpage}
        projectSlug={projectSlug}
        projectTitle={projectTitle}
      />

      {/* Title Section */}
      <SubPageTitle title={frontmatter.title} subtitle={frontmatter.subtitle} />

      {/* Main Content Area with Two Columns */}
      <div className="overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_auto]">
        {/* Left Column: Scrollable Content + Footer */}
        <div className="overflow-auto flex flex-col justify-between h-full">
          {/* Scrollable MDX Content */}
          <main className="overflow-y-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
              <MDXRemote {...mdxSource} components={components} />
            </div>
          </main>

          {/* Footer Navigation - Stays at bottom */}
          <div className="">
            <SubPageFooter
              prevSubpage={prevSubpage}
              nextSubpage={nextSubpage}
              projectSlug={projectSlug}
              projectTitle={projectTitle}
            />
          </div>
        </div>

        {/* Right Column: Details Panel */}
        <SubpageDetailsPanel
          objective={frontmatter.objective}
          technicalDecisions={frontmatter.technicalDecisions}
          keyInnovation={frontmatter.keyInnovation}
          outcome={frontmatter.outcome}
          technologies={frontmatter.technologies}
        />
      </div>

      {/* Contact Footer - Below the grid */}
      <ContactSection id="contact" />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projectsDirectory = path.join(process.cwd(), "content/projects");
  const paths: { params: { slug: string; subpage: string } }[] = [];

  // Get all project directories
  const projectEntries = fs.readdirSync(projectsDirectory, {
    withFileTypes: true,
  });

  for (const projectEntry of projectEntries) {
    if (projectEntry.isDirectory()) {
      const buildDir = path.join(projectsDirectory, projectEntry.name, "build");

      // Check if build directory exists
      if (fs.existsSync(buildDir)) {
        const subpageFiles = fs
          .readdirSync(buildDir)
          .filter((f) => f.endsWith(".mdx"));

        for (const file of subpageFiles) {
          paths.push({
            params: {
              slug: projectEntry.name,
              subpage: file.replace(".mdx", ""),
            },
          });
        }
      }
    }
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectSlug = params?.slug as string;
  const subpage = params?.subpage as string;

  // Get project title from main index.mdx
  const projectIndexPath = path.join(
    process.cwd(),
    "content/projects",
    projectSlug,
    "index.mdx",
  );
  const projectIndexContents = fs.readFileSync(projectIndexPath, "utf8");
  const { data: projectData } = matter(projectIndexContents);

  // Get current subpage content
  const subpagePath = path.join(
    process.cwd(),
    "content/projects",
    projectSlug,
    "build",
    `${subpage}.mdx`,
  );
  const subpageContents = fs.readFileSync(subpagePath, "utf8");
  const { data, content } = matter(subpageContents);

  // Get all subpages for navigation
  const buildDir = path.join(
    process.cwd(),
    "content/projects",
    projectSlug,
    "build",
  );
  const subpageFiles = fs
    .readdirSync(buildDir)
    .filter((f) => f.endsWith(".mdx"));

  const allSubpages: SubPageInfo[] = subpageFiles
    .map((file) => {
      const filePath = path.join(buildDir, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data: fileData } = matter(fileContents);
      return {
        slug: file.replace(".mdx", ""),
        title: fileData.title,
        order: fileData.order || 0,
      };
    })
    .sort((a, b) => a.order - b.order);

  // Find next subpage
  const currentIndex = allSubpages.findIndex((s) => s.slug === subpage);
  const nextSubpage =
    currentIndex < allSubpages.length - 1
      ? allSubpages[currentIndex + 1]
      : null;

  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter: data,
      mdxSource,
      projectSlug,
      projectTitle: projectData.title,
      currentSubpage: subpage,
      allSubpages,
      nextSubpage,
    },
  };
};
