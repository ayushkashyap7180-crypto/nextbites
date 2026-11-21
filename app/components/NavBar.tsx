// app/components/NavBar.tsx
import Link from "next/link";

export default function NavBar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between" }}>
      <Link href="/">🍴 NextBites</Link>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link href="/">Recipes</Link>
        <a href="https://github.com/kalviumcommunity/nextbites" target="_blank">GitHub</a>
      </div>
    </nav>
  );
}