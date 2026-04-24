export async function loadGallery(gallery) {
  const res = await fetch(`/content/galleries/${gallery}.json`);

  if (!res.ok) {
    throw new Error(`Failed to load gallery: ${gallery}`);
  }

  const data = await res.json();

  return Promise.all(
    (data.items || []).map(async (item) => {
      const dimensions = await getImageDimensions(item.image);

      return {
        src: item.image,
        width: dimensions.width,
        height: dimensions.height,
        alt: item.alt || item.title || "",
        title: item.title || "",
        description: buildDescription(item),
        original: item,
      };
    })
  );
}

function getImageDimensions(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    };

    img.onerror = () => {
      reject(new Error(`Could not load image: ${src}`));
    };

    img.src = src;
  });
}

function buildDescription(item = {}) {
  const meta = [item.year, item.medium, item.dimensions]
    .map((value) => String(value || "").trim())
    .filter(Boolean)
    .join(" · ");

  const description = String(item.description || "").trim();

  if (meta && description) {
    return `${meta}\n${description}`;
  }

  if (meta) {
    return meta;
  }

  if (description) {
    return description;
  }

  return undefined;
}