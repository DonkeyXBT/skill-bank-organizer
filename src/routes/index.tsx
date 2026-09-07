import { createFileRoute } from "@tanstack/react-router";
import { OrganizerApp } from "@/components/organizer/organizer-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <OrganizerApp />;
}
