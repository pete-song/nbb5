import "./globals.css";

export const metadata = {
  title: "i lub u",
  description: "i lub sandy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
