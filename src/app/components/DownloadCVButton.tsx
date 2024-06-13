'use client';

import { useDownloadCV } from "@/hooks/useDownloadCV";

export const DownloadCVButton = () => {
    const { handleDownload } = useDownloadCV();
    return (
        <button className="py-2 inline-block border rounded-md bg-isabelline text-dravys-gray hover:text-white hover:bg-blue-munsel hover:border-transparent ease-in-out duration-300 px-4" onClick={handleDownload}>Descarga mi CV</button>
    );
};
