import "./css/globals.css";
import ViweCanvas from "./components/ViweCanvas";

export const metadata = {
  title: "VENTANA",
  icons: "/soda.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ViweCanvas />
      </body>
    </html>
  );
}
