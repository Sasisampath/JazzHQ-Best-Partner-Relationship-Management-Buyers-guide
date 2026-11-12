import { redirect } from "next/navigation";
import { ROUTES } from "@/data/navigation";

export default function Home() {
  redirect(ROUTES.home);
}
