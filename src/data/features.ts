interface Feature {
  title: string;
  description: string;
  features: { title: string; description: string }[];
  image: string;
}

export const features: Feature[] = [
  {
    title: 'Enkelt, snabbt och effektivt',
    description:
      'Ett modernt och användarvänligt gränssnitt gör det enkelt att hantera alla aspekter av fastighetsförvaltning.\n\nSkapa, hantera och delegera uppgifter samt kommunicera med din personal med bara några få klick.',
    features: [
      {
        title: 'Blixtsnabb start',
        description: 'Det tar bara några minuter att komma igång med PropertEase',
      },
      {
        title: 'Realtidsöversikt',
        description: 'Få en översikt över alla dina fastigheter och deras status i realtid',
      },
      {
        title: 'Mobilitet',
        description: 'Använd PropertEase på mobilen, surfplattan eller datorn, ute i fält eller på kontoret',
      },
      { title: 'Användarvänlighet', description: 'PropertEase är enkelt att använda och kräver ingen utbildning' },
    ],
    image: 'https://images.pexels.com/photos/783745/pexels-photo-783745.jpeg',
  },
];
