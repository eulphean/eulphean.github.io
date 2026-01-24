import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

// Import custom MDX components
import ProjectHero from "../../components/Projects/ProjectHero";
import ProjectMeta from "../../components/Projects/ProjectMeta";
import Challenge from "../../components/Projects/Challenge";
import Build from "../../components/Projects/Build";
import Result from "../../components/Projects/Result";
import TechStack from "../../components/Projects/TechStack";
import ImageGrid from "../../components/Projects/ImageGrid";
import ImageCard from "../../components/Projects/ImageCard";
import ButtonGroup from "../../components/Projects/ButtonGroup";
import Button from "../../components/Projects/Button";
import NextProject from "../../components/Projects/NextProject";
import ContactSection from "../../components/Portfolio/ContactSection";
import PortfolioNavbar from "../../components/Portfolio/PortfolioNavbar";

// Map of components available in MDX
const components = {
  Challenge,
  Build,
  Result,
  TechStack,
  ImageGrid,
  ImageCard,
  ButtonGroup,
  Button,
  NextProject,
};

interface ProjectFrontmatter {
  title: string;
  subtitle: string;
  heroImage: string;
  client: string;
  role: string;
  location: string;
  date: string;
  duration: string;
  tags: string[];
  nextProject?: {
    slug: string;
    title: string;
  };
}

interface ProjectPageProps {
  frontmatter: ProjectFrontmatter;
  mdxSource: MDXRemoteSerializeResult;
  slug: string;
}

export default function ProjectPage({
  frontmatter,
  mdxSource,
  slug,
}: ProjectPageProps) {
  return (
    <div className="min-h-screen bg-white font-space-grotesk">
      <Head>
        <title>{frontmatter.title} - Amay Kataria</title>
        <meta name="description" content={frontmatter.subtitle} />
      </Head>

      {/* Navigation */}
      <PortfolioNavbar mode="project" />

      {/* Hero Section */}
      <ProjectHero
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        heroImage={frontmatter.heroImage}
      />

      {/* Project Meta */}
      <ProjectMeta
        client={frontmatter.client}
        role={frontmatter.role}
        location={frontmatter.location}
        date={frontmatter.date}
        duration={frontmatter.duration}
      />

      {/* MDX Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <MDXRemote {...mdxSource} components={components} />
      </main>

      {/* Next Project */}
      {frontmatter.nextProject && (
        <NextProject
          slug={frontmatter.nextProject.slug}
          title={frontmatter.nextProject.title}
        />
      )}

      {/* Footer */}
      <ContactSection id="contact" />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projectsDirectory = path.join(process.cwd(), "content/projects");

  // Get all project directories
  const entries = fs.readdirSync(projectsDirectory, { withFileTypes: true });
  const projectSlugs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const paths = projectSlugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const projectPath = path.join(
    process.cwd(),
    "content/projects",
    slug,
    "index.mdx",
  );

  const fileContents = fs.readFileSync(projectPath, "utf8");
  const { data, content } = matter(fileContents);

  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter: data,
      mdxSource,
      slug,
    },
  };
};
