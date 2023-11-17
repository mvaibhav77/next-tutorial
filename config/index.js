const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://next-tutorial-ncnh9uu6f-mvaibhav77.vercel.app";
