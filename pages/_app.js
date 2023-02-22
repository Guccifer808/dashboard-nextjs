import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";

// Sidebar wrapper
export default function App({ Component, pageProps }) {
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  );
}
