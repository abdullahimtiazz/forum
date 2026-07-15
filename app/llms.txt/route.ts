import { llmsText, markdownHeaders } from "../../lib/agent-content";

export function GET() {
  return new Response(llmsText, { headers: markdownHeaders });
}
