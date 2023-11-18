import { Roboto, Lusitana, Inter } from 'next/font/google';
export const roboto =Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
})

export const inter = Inter({
    weight : ['200','300','500'],
    subsets:['latin']
})

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });