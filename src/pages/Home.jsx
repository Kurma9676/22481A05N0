import UrlForm from "../components/UrlForm";
import ShortUrlCard from "../components/ShortUrlCard";
import { getUrls } from "../utils/urlStorage";

export default function Home() {
  const urls = Object.entries(getUrls());

  return (
    <div>
      <h2>URL Shortener</h2>
      <UrlForm />
      {urls.map(([code, data]) => (
        <ShortUrlCard key={code} code={code} data={data} />
      ))}
    </div>
  );
}
