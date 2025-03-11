// src/assets/constants.ts

// Base URLs
export const BASE_URL = "https://api.example.com";
export const IMAGE_BASE_URL = "https://cdn.example.com/images";

// API Endpoints
export const API_ENDPOINTS = {
  GET_USER: `${BASE_URL}/user`,
  GET_RESUME: `${BASE_URL}/resume`,
  DOWNLOAD_PDF: `${BASE_URL}/download/resume.pdf`,
};

// Resume Text Content
export const RESUME_CONTENT = {
  h1: "John Doe",
  h1_span: "Software Engineer",
  h2: "Experienced Full-Stack Developer",
  p: `I am a highly motivated software engineer with a strong background in full-stack development.
      <br/> Skilled in React, TypeScript, and Node.js.
      <br/> Passionate about building scalable and efficient applications.`,
  btn_DownResume: "Download Resume",
};

// Theme Configuration
export const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

// Default Settings
export const DEFAULTS = {
  LANGUAGE: "en",
  CURRENCY: "USD",
  ITEMS_PER_PAGE: 10,
};

// Social Media Links
export const SOCIAL_LINKS = {
  GITHUB: "https://github.com/johndoe",
  LINKEDIN: "https://linkedin.com/in/johndoe",
  TWITTER: "https://twitter.com/johndoe",
};

// File Paths
export const FILE_PATHS = {
  RESUME_PDF: "/assets/pdf/resume.pdf",
};
