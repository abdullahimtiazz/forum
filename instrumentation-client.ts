import posthog from "posthog-js";

const projectToken =
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN ??
  "phc_mbLjQKYbuoq32nj6H6RcVqy4hEB6wyXy8werR8MHXVi";

const posthogHost =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com";

if (process.env.NODE_ENV === "production") {
  posthog.init(projectToken, {
    api_host: posthogHost,
    defaults: "2026-05-30",
  });
}
