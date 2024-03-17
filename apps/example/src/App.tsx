import { Button } from "oltyy-calendar";

export default function App() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <h1>Oltyy Calendar</h1>
      <Button type="button">Get Started</Button>
    </main>
  );
}
