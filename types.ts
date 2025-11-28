import React from 'react';

export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export interface PhotoLocation {
  id: string;
  title: string;
  description: string;
  top: string; // CSS percentage
  left: string; // CSS percentage
  imageUrl: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  size?: 'normal' | 'large' | 'tall';
  // New fields for detail view
  description?: string;
  year?: string;
  location?: string;
  galleryImages?: string[];
}

export interface CodingProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface GearItem {
  name: string;
  type: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface SearchResult {
  text: string;
  relatedLinks: { title: string; url: string }[];
}