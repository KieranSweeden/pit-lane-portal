import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

export const metadata = {
  title: "Pit Lane Portal",
  description: "Search all things Formula 1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
