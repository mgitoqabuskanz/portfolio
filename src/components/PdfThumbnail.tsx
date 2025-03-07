import { useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";

interface PdfThumbnailProps {
    file: string; // URL or path to the PDF file
}

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PdfThumbnail: React.FC<PdfThumbnailProps> = ({ file }) => {
    const openPdf = () => { window.open(file, "_blank"); };
    const [thumbnail, setThumbnail] = useState<string | null>(null);

    useEffect(() => {
        const renderThumbnail = async () => {
            const pdf = await pdfjsLib.getDocument(file).promise;
            const page = await pdf.getPage(1);
            const viewport = page.getViewport({ scale: 2 });

            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d")!;
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            await page.render({ canvasContext: context, viewport }).promise;

            // Convert canvas to image
            const imageUrl = canvas.toDataURL("image/jpeg"); // You can use "image/png" too
            setThumbnail(imageUrl);
        };

        renderThumbnail();
    }, [file]);

    return (
      <button onClick={openPdf} className="relative group w-fit pdf-thumbnail cursor-pointer">

        {thumbnail && <img src={thumbnail} alt="PDF Thumbnail" className="transition-all duration-300" />}

        <div className="absolute inset-0 bg-black/75 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg font-semibold">Click To Show Details</span>
        </div>
      </button>
    );
};

export default PdfThumbnail;
