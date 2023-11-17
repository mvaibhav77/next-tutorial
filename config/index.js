const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://vs-next-tutorial.vercel.app.vercel.app";
