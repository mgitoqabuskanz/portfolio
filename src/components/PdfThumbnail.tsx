import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";

interface PdfThumbnailProps {
    file: string; // URL or path to the PDF file
}

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PdfThumbnail: React.FC<PdfThumbnailProps> = ({ file }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [thumbnail, setThumbnail] = useState<string | null>(null);

    const renderThumbnail = async () => {
        const pdf = await pdfjsLib.getDocument(file).promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1 });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d")!;
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: context, viewport }).promise;

        // Convert canvas to image
        const imageUrl = canvas.toDataURL("image/jpeg"); // You can use "image/png" too
        setThumbnail(imageUrl);
    };


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
        <div className="pdf-thumbnail">
            {thumbnail && <img src={thumbnail} alt="PDF Thumbnail" />}
        </div>
    );
};

export default PdfThumbnail;
