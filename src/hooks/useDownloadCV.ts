import { saveAs } from 'file-saver';

export const useDownloadCV = () => {
    const handleDownload = () => saveAs(
        '/assets/files/CV-ARQ-ELIANA-GUERRERO-JUN2024.pdf',
        'CV-ARQ-ELIANA-GUERRERO-JUN2024.pdf'
    );

    return { handleDownload };
};
