import { ReactNode } from "react";

export const metadata = {
  title: "Contact",
  description: "Want to say me something?",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div>{children}</div>;
}
