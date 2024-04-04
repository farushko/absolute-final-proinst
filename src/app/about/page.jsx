import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "image-1.jpg", width: 800, height: 600 },
  { src: "image-2.jpg", width: 1600, height: 900 },
];

export default function Gallery() {
  return (
    <div>
      <PhotoAlbum layout="rows" photos={photos} />
    </div>
  );
}
