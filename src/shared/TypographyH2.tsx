// interface
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function TypographyH2({ children }: Props) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight first:mt-0 ">
      {children}
    </h2>
  );
}
