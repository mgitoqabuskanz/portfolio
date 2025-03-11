import { useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import styles from "../../assets/style/resume.module.css";

interface ResumeConverterProps {
  file: string;
}

// Worker PDF.js Configuration
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export const ResumeConverter: React.FC<ResumeConverterProps> = ({ file }) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  // Open PDF on New Window Functions 
  const openPdf = () => window.open(file, "_blank");

  useEffect(() => {
    const renderThumbnail = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(file).promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 2 });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        if (!context) return;

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: context, viewport }).promise;

        // Convert Canvas to Image
        setThumbnail(canvas.toDataURL("image/jpeg"));
      } catch (error) {
        console.error("Error generating PDF thumbnail:", error);
      }
    };

    
    renderThumbnail();
  }, [file]);
  
  return (
    <button onClick={openPdf} className={styles["pdf-thumbnail"]}>
      {thumbnail && <img src={thumbnail} alt="Thumbnail of the PDF document" className={styles["pdf-thumbnail-img"]} />}
      
      <div className={styles["pdf-thumbnail-overlay"]}>
        <span>Click To Show Details</span>
      </div>
    </button>
  );
};