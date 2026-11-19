"use client";

import type { ErrorProps } from "@/types/note";

const Error = ({ error }: ErrorProps) => {
  return <p>Could not fetch note details. {error.message}</p>;
};
export default Error;
