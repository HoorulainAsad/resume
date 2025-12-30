export const getAssetPath = (path) => {
    if (!path) return '';
    // Return early if it's already a full URL or a data/blob URL
    if (path.startsWith('http') || path.startsWith('data:') || path.startsWith('blob:')) {
        return path;
    }

    // Clean the path of any leading slashes or dots
    const cleanPath = path.replace(/^(\.\/|\/)/, '');

    // import.meta.env.BASE_URL is defined by Vite and usually is "/resume/"
    const base = import.meta.env.BASE_URL || '/';

    // Combine base and cleanPath, ensuring there's a single slash between them
    const baseUrl = base.endsWith('/') ? base : `${base}/`;
    return `${baseUrl}${cleanPath}`;
};
