import React, { useEffect, useState } from "react";
import { Box, Text } from "@radix-ui/themes";
import { RowsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Zoom } from "yet-another-react-lightbox/plugins";

import { loadGallery } from "../utils/loadGallery";

import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "../style/LightboxOverrides.css";

export default function ArtworkPhotoAlbum({
  gallery = "main",
  targetRowHeight = 300,
}) {
  const [photos, setPhotos] = useState([]);
  const [index, setIndex] = useState(-1);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let isMounted = true;

    async function fetchGallery() {
      try {
        setStatus("loading");

        const galleryPhotos = await loadGallery(gallery);

        if (isMounted) {
          setPhotos(galleryPhotos);
          setStatus("ready");
        }
      } catch (err) {
        console.error(`Failed to load ${gallery} gallery:`, err);

        if (isMounted) {
          setStatus("error");
        }
      }
    }

    fetchGallery();

    return () => {
      isMounted = false;
    };
  }, [gallery]);

  if (status === "loading") {
    return <Text>Loading gallery...</Text>;
  }

  if (status === "error") {
    return <Text>Gallery could not load.</Text>;
  }

  return (
    <Box>
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={targetRowHeight}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        plugins={[Captions, Zoom]}
        close={() => setIndex(-1)}
        carousel={{ padding: "64px 16px" }}
        styles={{ slide: { maxHeight: "calc(100% - 120px)" } }}
      />
    </Box>
  );
}