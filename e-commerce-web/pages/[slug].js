// pages/[...slug].js
import { useEffect } from "react";
import { useRouter } from "next/router";
import React from "react"

const CatchAllRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, []);

  return null; // No UI, just redirects
};

export default CatchAllRedirect;