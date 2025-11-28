import { GoogleGenAI } from "@google/genai";
import { FEATURED_PROJECTS, MAP_LOCATIONS, NAV_ITEMS, VIBE_CODING_PROJECTS } from '../constants';
import { SearchResult } from '../types';

// Safely retrieve key, fallback for demo purposes if environment variable isn't set
const API_KEY = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI assistant for "Just Being Sweeney", a photography portfolio website by Sweeney, a Chicago-based photographer and "vibe coder".
Your role is to help users find content on the site and explain Sweeney's work.

Context:
- Sweeney shoots with a Nikon Z7.
- Key themes: Urban architecture, candid street photography, daily life in Chicago.
- Also a Vibe Coder: Sweeney experiments with AI, generative art, and coding projects.
- Major projects: "The June Project", "365 Days", "City Series".
- Locations: Chicago, The Loop, Wicker Park, Riverwalk.
- Style: High contrast, geometric, storytelling.

When a user searches:
1. Provide a brief, engaging answer (max 2 sentences) describing how Sweeney covers that topic.
2. Suggest 1-3 relevant page links based on the site structure provided in the context below.

Site Data for Reference:
Photography Projects: ${JSON.stringify(FEATURED_PROJECTS.map(p => p.title + " (" + p.category + ")"))}
Coding Projects: ${JSON.stringify(VIBE_CODING_PROJECTS.map(p => p.title + " - " + p.description))}
Locations: ${JSON.stringify(MAP_LOCATIONS.map(l => l.title))}
Navigation: ${JSON.stringify(NAV_ITEMS)}
`;

export const searchPortfolio = async (query: string): Promise<SearchResult> => {
  if (!API_KEY) {
    // Fallback if no API key is present for the demo
    return {
      text: "I'm currently in demo mode without an API key. Typically, I would use Google Gemini to tell you all about Sweeney's work regarding: " + query,
      relatedLinks: [{ title: "View Galleries", url: "#galleries" }]
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        maxOutputTokens: 150,
      }
    });

    const text = response.text || "I couldn't find anything specific about that, but feel free to explore the galleries.";
    
    // In a real app with JSON schema, we would parse this. 
    // For this prompt, we'll return the text and a generic link if the AI mentions specific keywords.
    const links = [];
    if (text.toLowerCase().includes("june")) links.push({ title: "The June Project", url: "#june-project" });
    if (text.toLowerCase().includes("architecture") || text.toLowerCase().includes("geometry")) links.push({ title: "Architecture Gallery", url: "#architecture" });
    if (text.toLowerCase().includes("street") || text.toLowerCase().includes("candid")) links.push({ title: "Street Gallery", url: "#street" });
    if (text.toLowerCase().includes("code") || text.toLowerCase().includes("ai") || text.toLowerCase().includes("tech")) links.push({ title: "Vibe Coding", url: "#vibe-coding" });
    
    if (links.length === 0) links.push({ title: "Explore All Galleries", url: "#galleries" });

    return {
      text,
      relatedLinks: links
    };

  } catch (error) {
    console.error("Gemini Search Error:", error);
    return {
      text: "I'm having trouble connecting to the archive right now. Please browse the galleries manually.",
      relatedLinks: [{ title: "Galleries", url: "#galleries" }]
    };
  }
};