import "@styles/globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "NConnect",
  description: "Locate & Contact any NIA office near you",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
