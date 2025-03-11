import { FILE_PATHS } from "../constants";

export const handleDownload = async () => {
  alert("Downloading resume...");
  const response = await fetch(FILE_PATHS.RESUME_PDF);
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "Resume - Muhammad Gito Qabus Kanz.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};