import { eventMarkdown, markdownHeaders } from "../../lib/agent-content";

export function GET() {
  return new Response(eventMarkdown, { headers: markdownHeaders });
}
