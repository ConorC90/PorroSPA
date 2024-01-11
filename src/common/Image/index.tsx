import React from 'react';

interface ImageProps {
  src: any;
  altText?: string;
  width: string;
  height: string;
  cite?: string;
  loading?: 'eager' | 'lazy';
}

export const Image = ({ src, width, height }: any) => (
  <img src={`/img/images/${src}`} alt={src} width={width} height={height} />
);

export const ImageNew = ({ src, altText, width, height, loading, cite }: ImageProps) => {
  return (
    <>
      <img src={`/img/images/${src}`} alt={altText} width={width} height={height} loading={loading} />
      {cite && <cite>{cite}</cite>}
    </>
  );
};

