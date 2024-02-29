export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full p-5 mx-auto bg-tgreen h-screen grid">{children}</div>
  );
}
 