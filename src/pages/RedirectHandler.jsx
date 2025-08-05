import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUrl } from "../utils/urlStorage";
import { logEvent } from "../utils/logger";

export default function RedirectHandler() {
  const { code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = getUrl(code);
    if (!data) {
      logEvent("Redirect failed - Invalid shortcode", { code });
      navigate("/");
    } else {
      logEvent("Redirect success", { code });
      window.location.href = data.originalUrl;
    }
  }, [code, navigate]);

  return <div>Redirecting...</div>;
}
