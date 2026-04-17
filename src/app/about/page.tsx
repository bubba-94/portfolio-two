import Image from "next/image";
import { aboutContent, aboutStats, personal, projectCards } from "@/lib/siteData";
import ProjectCard from "@/components/ProjectCard";

type Commit = {
  sha: string;
  message: string;
  date: string;
  url: string;
};

type GitHubEvent = {
  type?: string;
  repo?: {
    name?: string;
  };
  payload?: Record<string, unknown>;
  created_at?: string;
  html_url?: string;
};

type GitHubPushPayload = {
  commits?: Array<{ sha?: string; message?: string; url?: string }>;
};

type GitHubPRPayload = {
  action?: string;
  pull_request?: { title?: string; html_url?: string };
};

type GitHubIssuePayload = {
  action?: string;
  issue?: { title?: string; html_url?: string };
};

type GitHubCommentPayload = {
  comment?: { html_url?: string };
};

function formatCommitUrl(apiUrl?: string) {
  if (!apiUrl) return undefined;
  return apiUrl
    .replace("https://api.github.com/repos/", "https://github.com/")
    .replace("/commits/", "/commit/");
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatContributionEvent(event: GitHubEvent): Commit | null {
  const repoName = event.repo?.name ?? "GitHub";
  const rawDate = event.created_at;
  const date = rawDate
    ? new Date(rawDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Unknown date";

  const type = event.type ?? "Activity";
  const payload = event.payload ?? {};

  if (type === "PushEvent") {
    const commitPayload = payload as GitHubPushPayload;
    const commit = commitPayload.commits?.[0];
    if (!commit) return null;

    return {
      sha: commit.sha?.slice(0, 7) ?? "push",
      message: `Commit pushed to ${repoName}`,
      date,
      url: formatCommitUrl(commit.url) ?? event.html_url ?? personal.github,
    };
  }

  if (type === "PullRequestEvent") {
    const prPayload = payload as GitHubPRPayload;
    const action = capitalize(prPayload.action ?? "Updated");
    return {
      sha: "PR",
      message: `${action} PR in ${repoName}`,
      date,
      url: prPayload.pull_request?.html_url ?? event.html_url ?? personal.github,
    };
  }

  if (type === "IssuesEvent") {
    const issuePayload = payload as GitHubIssuePayload;
    const action = capitalize(issuePayload.action ?? "Interacted with");
    return {
      sha: "Issue",
      message: `${action} issue in ${repoName}`,
      date,
      url: issuePayload.issue?.html_url ?? event.html_url ?? personal.github,
    };
  }

  if (type === "IssueCommentEvent" || type === "PullRequestReviewCommentEvent") {
    const commentPayload = payload as GitHubCommentPayload;
    return {
      sha: type.replace("Event", ""),
      message: `${type.replace("Event", "")} in ${repoName}`,
      date,
      url: commentPayload.comment?.html_url ?? event.html_url ?? personal.github,
    };
  }

  if (type === "CreateEvent") {
    return {
      sha: "Create",
      message: `Created branch or tag in ${repoName}`,
      date,
      url: event.html_url ?? personal.github,
    };
  }

  if (type === "ForkEvent") {
    return {
      sha: "Fork",
      message: `Forked ${repoName}`,
      date,
      url: event.html_url ?? personal.github,
    };
  }

  if (type === "WatchEvent") {
    return {
      sha: "Star",
      message: `Starred ${repoName}`,
      date,
      url: event.html_url ?? personal.github,
    };
  }

  return {
    sha: type.replace("Event", ""),
    message: `${type.replace("Event", "")} on ${repoName}`,
    date,
    url: event.html_url ?? personal.github,
  };
}

async function getLatestCommits(): Promise<Commit[]> {
  const username = personal.githubUsername;

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/events/public?per_page=5`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("GitHub API request failed");
    }

    const data = (await response.json()) as unknown;
    if (!Array.isArray(data)) {
      return [];
    }

    const events = data as GitHubEvent[];
    const contributions: Commit[] = [];

    for (const event of events) {
      const contribution = formatContributionEvent(event);
      if (contribution) {
        contributions.push(contribution);
      }
      if (contributions.length >= 3) {
        break;
      }
    }

    return contributions;
  } catch {
    return [];
  }
}

export default async function About() {
  const latestCommits = await getLatestCommits();
  const commits: Commit[] =
    latestCommits.length > 0
      ? latestCommits
      : [
          {
            sha: "demo1",
            message: "Commit pushed to portfolio-two",
            date: "Today",
            url: personal.github,
          },
          {
            sha: "demo2",
            message: "Updated PR in portfolio-two",
            date: "Yesterday",
            url: personal.github,
          },
          {
            sha: "demo3",
            message: "Opened issue in portfolio-two",
            date: "2 days ago",
            url: personal.github,
          },
        ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.28),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.16),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(249,115,22,0.14),transparent_16%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(249,115,22,0.12),transparent_14%)]" />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-8">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">About Me</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {personal.name}
            </h1>
            <p className="mt-3 text-lg text-slate-300">{personal.title}</p>
            <div className="mt-8 space-y-6 text-slate-400">
              {aboutContent.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {aboutStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-slate-800 bg-slate-950/95 p-5"
                >
                  <p className="text-lg font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-10 grid gap-6 xl:grid-cols-[1.4fr_0.75fr]">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">Contribution history</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Latest public activity</h2>
            <p className="mt-3 text-slate-400">Recent public contributions across GitHub, including push events and activity in repositories you contribute to.</p>
            <div className="mt-8 space-y-4">
              {commits.map((commit) => (
                <a
                  key={commit.sha}
                  href={commit.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-3xl border border-slate-800 bg-slate-950/95 p-5 transition hover:border-orange-400"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Activity</p>
                  <p className="mt-3 text-lg font-semibold text-white">{commit.message}</p>
                  <p className="mt-2 text-sm text-slate-400">{commit.date}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">Portfolio cards</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Selected highlights</h2>
              <p className="mt-3 text-slate-400">A few recent card examples drawn from your project dashboard.</p>
              <div className="mt-8 grid gap-4">
                {projectCards.slice(0, 2).map((card) => (
                  <ProjectCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
