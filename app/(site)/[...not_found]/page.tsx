import { notFound } from "next/navigation";

export const metadata = {
  title: "Not Found",
  description: "The page you are looking for doesn't exist!",
};

export default function NotFoundCatchAll() {
  notFound();
  return null;
}
