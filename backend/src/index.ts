import app from "./app.ts";

const PORT = process.env.PORT || 7000;

app.listen(PORT, (): void =>
  console.log(`Server running on http://localhost:${PORT}`),
);
