import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getUrl } from "../utils/urlStorage";
import { logEvent } from "../utils/logger";
import { Typography, Card, CardContent, Button } from "@mui/material";

export default function Stats() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const code = searchParams.get("code");

  useEffect(() => {
    if (!code) {
      setNotFound(true);
      return;
    }

    const urlData = getUrl(code);
    if (urlData) {
      setData(urlData);
      logEvent("Viewed stats", { code });
    } else {
      setNotFound(true);
      logEvent("Stats view failed - Invalid shortcode", { code });
    }
  }, [code]);

  if (notFound) {
    return (
      <Card sx={{ margin: 2 }}>
        <CardContent>
          <Typography variant="h6" color="error">Shortcode not found!</Typography>
          <Typography>Please check the URL or go back to the home page.</Typography>
        </CardContent>
      </Card>
    );
  }

  if (!data) return null;

  const shortUrl = `http://localhost:3000/${code}`;

  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Analytics for: {code}
        </Typography>

        <Typography variant="body1">
          <strong>Original URL:</strong> {data.originalUrl}
        </Typography>
        <Typography variant="body1">
          <strong>Short URL:</strong> <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </Typography>
        <Typography variant="body1">
          <strong>Validity:</strong> {data.validity} minutes
        </Typography>
        {data.createdAt && (
          <Typography variant="body1">
            <strong>Created At:</strong> {new Date(data.createdAt).toLocaleString()}
          </Typography>
        )}
        {data.accessCount !== undefined && (
          <Typography variant="body1">
            <strong>Visits:</strong> {data.accessCount}
          </Typography>
        )}

        <Button variant="contained" href="/" sx={{ mt: 2 }}>
          Back to Home
        </Button>
      </CardContent>
    </Card>
  );
}
