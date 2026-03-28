export const metadata = {
  title: "NJ Barbell",
  description: "Structured strength & performance coaching for athletes and adults.",
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
