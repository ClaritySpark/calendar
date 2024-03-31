import { Button, Calendar } from "oltyy-calendar";

import { MOCK_DATA } from "./constants/mockData";

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
      <Calendar data={MOCK_DATA} />
      <Button type="button">Get Started</Button>
    </main>
  );
}
