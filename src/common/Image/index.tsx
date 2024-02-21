export const Image = ({ src, width, height }: any) => (
  <img
    src={`/img/images/${src}.webp`}
    alt={src}
    width={width}
    height={height}
    srcSet={`/img/images/${src}Desktop.webp 640w, /img/images/${src}Mobile.webp 300w`}
  />
);

