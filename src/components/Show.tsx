import { Activity } from "react";

type ShowProps = { name?: string; when: boolean; children: React.ReactNode };
export default function Show({ name, when, children }: ShowProps) {
  return (
    <Activity name={name} mode={when ? "visible" : "hidden"}>
      {children}
    </Activity>
  );
}
