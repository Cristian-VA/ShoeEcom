export function convertToTitleCase(str: string): string {
    // Remove leading "/" and split string into an array of words
    const words: string[] = str.split('/').pop()?.split('-') ?? [];

    // Capitalize the first letter of each word, handle "men" separately
    const titleCaseStr: string = words.map((word, index) => {
        if (index === 0 && word.toLowerCase() === 'men') {
            return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');

    return titleCaseStr;
}

export function extractCategoryFromUrl(url: string): string {
    // Split the URL string by '/'
    const parts: string[] = url.split('/');
    // Get the last part of the split string
    const category: string = parts[parts.length - 1];
    return category;
}

  