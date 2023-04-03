"use client";

import {
  useRouter,
  useParams,
  useSelectedLayoutSegment,
} from "next/navigation";

export const Client = (props) => {
  const router = useRouter();
  const params = useParams();
  const segment = useSelectedLayoutSegment();
  return (
    <div
      {...props}
      onClick={(e) =>
        segment &&
        e.target.tagName !== "A" &&
        router.push(`/environments/${params.environmentId}`)
      }
    />
  );
};
