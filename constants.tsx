import React from 'react';
import { Camera, Aperture, Backpack, MapPin } from 'lucide-react';
import { NavItem, PhotoLocation, Project, GearItem, CodingProject } from './types';

export const APP_NAME = "Just Being Sweeney";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Galleries",
    children: [
      { label: "Architecture", href: "#architecture" },
      { label: "Street", href: "#street" },
      { label: "Nature", href: "#nature" },
      { label: "Black & White", href: "#bw" },
    ]
  },
  {
    label: "Projects",
    children: [
      { label: "The June Project", href: "#june-project" },
      { label: "365 Days", href: "#365" },
      { label: "City Series", href: "#city" },
      { label: "Vibe Coding", href: "#vibe-coding" },
    ]
  },
  { label: "Journal", href: "#journal" },
  { label: "Shop", href: "#shop" },
];

export const HERO_IMAGES = [
  "https://picsum.photos/seed/chicago1/1920/1080",
  "https://picsum.photos/seed/street2/1920/1080",
  "https://picsum.photos/seed/arch3/1920/1080",
];

export const MAP_LOCATIONS: PhotoLocation[] = [
  {
    id: "1",
    title: "The Bean",
    description: "Reflections at sunrise.",
    top: "45%",
    left: "60%",
    imageUrl: "https://picsum.photos/seed/bean/400/300"
  },
  {
    id: "2",
    title: "Wicker Park",
    description: "Candid moments near the fountain.",
    top: "30%",
    left: "25%",
    imageUrl: "https://picsum.photos/seed/wicker/400/300"
  },
  {
    id: "3",
    title: "Riverwalk",
    description: "Urban geometry meets water.",
    top: "55%",
    left: "65%",
    imageUrl: "https://picsum.photos/seed/river/400/300"
  },
  {
    id: "4",
    title: "The L Train",
    description: "Motion blur transit shots.",
    top: "40%",
    left: "45%",
    imageUrl: "https://picsum.photos/seed/train/400/300"
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "june",
    title: "The June Project",
    category: "Archive",
    imageUrl: "https://picsum.photos/seed/june/600/800",
    size: 'tall',
    year: "2023",
    location: "Chicago, IL",
    description: "What began as a simple challenge—take one meaningful photo every day in June—evolved into a deep exploration of my own discipline. This collection isn't just about the images; it's about the consistency of seeing. From the morning light hitting the pavement to the late-night neon of dive bars, The June Project captures the rhythm of a single month in the city.",
    galleryImages: [
        "https://picsum.photos/seed/june1/800/600",
        "https://picsum.photos/seed/june2/600/800",
        "https://picsum.photos/seed/june3/800/800",
        "https://picsum.photos/seed/june4/800/600",
    ]
  },
  {
    id: "geom",
    title: "Urban Geometry",
    category: "Architecture",
    imageUrl: "https://picsum.photos/seed/geom/800/600",
    size: 'large',
    year: "Ongoing",
    location: "Global",
    description: "Cities are built on lines, curves, and shadows. 'Urban Geometry' isolates these elements, removing the chaos of the street to focus purely on form. This series looks up, finding the accidental art created where skyscrapers meet the sky.",
    galleryImages: [
        "https://picsum.photos/seed/geom1/800/800",
        "https://picsum.photos/seed/geom2/800/600",
        "https://picsum.photos/seed/geom3/600/800",
    ]
  },
  {
    id: "silence",
    title: "Visual Silence",
    category: "Minimalist",
    imageUrl: "https://picsum.photos/seed/silence/600/600",
    size: 'normal',
    year: "2024",
    location: "Lake Michigan",
    description: "In a world of constant noise, photography offers a way to hit mute. This series explores negative space, fog, and the vast emptiness of Lake Michigan in winter. It is an attempt to capture the feeling of silence visually.",
    galleryImages: [
        "https://picsum.photos/seed/silence1/800/600",
        "https://picsum.photos/seed/silence2/800/600",
        "https://picsum.photos/seed/silence3/800/600",
    ]
  },
  {
    id: "portraits",
    title: "Strangers",
    category: "Street",
    imageUrl: "https://picsum.photos/seed/people/600/700",
    size: 'tall',
    year: "2022-Present",
    location: "Chicago Loop",
    description: "Eye contact is rare in the city. We pass thousands of people daily but know none of them. This ongoing series documents the faces of the crowd—brief moments of connection in a rushing world.",
    galleryImages: [
        "https://picsum.photos/seed/people1/600/800",
        "https://picsum.photos/seed/people2/600/800",
        "https://picsum.photos/seed/people3/800/600",
    ]
  },
  {
    id: "noir",
    title: "Chicago Noir",
    category: "Black & White",
    imageUrl: "https://picsum.photos/seed/noir/800/600",
    size: 'large',
    year: "2023",
    location: "Downtown",
    description: "Inspired by classic film noir and high-contrast cinema. This collection strips away color to focus on the interplay of light and shadow in the alleyways and under the L tracks of Chicago.",
    galleryImages: [
        "https://picsum.photos/seed/noir1/800/600",
        "https://picsum.photos/seed/noir2/800/600",
        "https://picsum.photos/seed/noir3/600/800",
        "https://picsum.photos/seed/noir4/800/800",
    ]
  },
];

export const VIBE_CODING_PROJECTS: CodingProject[] = [
  {
    id: "vibe-1",
    title: "Generative Chicago",
    description: "AI-generated variations of the Chicago skyline using custom LoRAs trained on my own photography dataset.",
    tags: ["Python", "Stable Diffusion", "LoRA"],
    imageUrl: "https://picsum.photos/seed/ai-city/800/600",
    demoUrl: "#"
  },
  {
    id: "vibe-2",
    title: "Portfolio Bot",
    description: "The RAG-powered semantic search engine you are using on this website, built with Gemini API to understand my visual style.",
    tags: ["React", "Gemini API", "TypeScript"],
    imageUrl: "https://picsum.photos/seed/ai-code/800/600",
    repoUrl: "#"
  },
  {
    id: "vibe-3",
    title: "Mood Scraper",
    description: "An automated script that analyzes real-time weather data to suggest the perfect film simulation recipes for the day.",
    tags: ["Node.js", "Weather API", "Automation"],
    imageUrl: "https://picsum.photos/seed/code-screen/800/600",
    repoUrl: "#"
  }
];

export const GEAR_LIST: GearItem[] = [
  {
    name: "Nikon Z7",
    type: "Body",
    icon: <Camera className="w-6 h-6" />,
    imageUrl: "https://picsum.photos/seed/camera/200/200"
  },
  {
    name: "Nikkor 24-70mm",
    type: "Lens",
    icon: <Aperture className="w-6 h-6" />,
    imageUrl: "https://picsum.photos/seed/lens/200/200"
  },
  {
    name: "Peak Design",
    type: "Everyday Backpack",
    icon: <Backpack className="w-6 h-6" />,
    imageUrl: "https://picsum.photos/seed/bag/200/200"
  }
];