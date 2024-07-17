import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "Noorulla",
        mongodb_password: "pI6N9hwRsPUNYoVm",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "Noorulla",
      mongodb_password: "pI6N9hwRsPUNYoVm",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};

export default nextConfig;
