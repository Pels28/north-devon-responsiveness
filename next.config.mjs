import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: false, swcMinify: true, output: "export" };

export default withNextVideo(nextConfig);
