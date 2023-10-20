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
        description: 'Det tar bara några minuter att komma igång med PropertEase.',
      },
      {
        title: 'Realtidsöversikt',
        description: 'Få en översikt över alla dina fastigheter och deras status i realtid.',
      },
      {
        title: 'Mobilitet',
        description: 'Använd PropertEase på mobilen, surfplattan eller datorn, ute i fält eller på kontoret',
      },
      { title: 'Användarvänlighet', description: 'PropertEase är enkelt att använda och kräver ingen utbildning' },
    ],
    image: 'https://images.pexels.com/photos/783745/pexels-photo-783745.jpeg',
  },
  {
    title: 'Papperslös kommunikation',
    description: 'Med PropertEase kan du enkelt och effektivt hantera kommunikationen utan behov av pappersarbete.',
    features: [
      {
        title: 'Realtidskommunikation',
        description:
          'Klarmarkera arbetsuppgifter, ta bilder och kommunicera med ditt team i realtid, oavsett var du befinner dig.',
      },
      {
        title: 'Minskat pappersarbete',
        description:
          'Minimera behovet av att skriva ut och hantera fysiska dokument. Gör allt elektroniskt och spara tid och resurser.',
      },
      {
        title: 'Sömlös kommunikation',
        description:
          'Skapa en sömlös kommunikationskanal mellan ditt kontor och fältteamet för ökad produktivitet och smidigt samarbete.',
      },
    ],
    image: 'https://images.pexels.com/photos/583848/pexels-photo-583848.jpeg',
  },
];
