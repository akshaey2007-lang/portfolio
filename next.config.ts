import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const [repositoryOwner = 'akshaey2007-lang', repositoryName = 'portfolio'] =
  (process.env.GITHUB_REPOSITORY ?? 'akshaey2007-lang/portfolio').split('/');
const basePath =
  isGitHubPages && !repositoryName.endsWith('.github.io')
    ? `/${repositoryName}`
    : '';
const siteUrl = isGitHubPages
  ? `https://${repositoryOwner}.github.io${basePath}`
  : 'https://akshaey-full-stack-portfolio.akshaey2007.chatgpt.site';

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: 'export' as const,
        basePath,
        assetPrefix: basePath,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

export default nextConfig;
