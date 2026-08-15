import { redirect } from "next/navigation"

// The R&D Team page has been retired — send visitors to Research Projects.
export default function TeamRedirect() {
  redirect("/rnd/projects")
}
