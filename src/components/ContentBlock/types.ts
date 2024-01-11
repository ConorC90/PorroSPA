import { ReactNode } from 'react';

export interface ContentBlockProps {
  image?: ReactNode;
  icon?: string;
  title?: string;
  button?: any;
  t?: any;
  id: string;
  type?: string;
  buttonOnClick?: string;
  content?: any;
  cite?: string;
  fadeDirection?: any;
  altText?: string;
}

