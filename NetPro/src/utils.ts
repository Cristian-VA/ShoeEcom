import { CustomHookResult } from './types';
import { useGetMenProductId, useGetWomenProductId, useGetKidsProductId, useGetMenrelatedProducts, useGetWomenrelatedProducts, useGetKidsrelatedProducts } from './lib/queries/queries&mutations';


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

export function extractCategoryFromProductPage(url:string) {
    const regex = /\/collections\/(men|women|kid)-([^/]+)/;
    const match = url.match(regex);
    if (match) {
        return match[1] + '-' + match[2];
    } else {
        return null; // Return null if no match found
    }
}

export const useDynamicProductFetching = (id: string | null, category: string | null): CustomHookResult => {
    let productHook, relatedProductsHook;
  
    if (category?.startsWith("women")) {
      productHook = useGetWomenProductId(id || "");
      relatedProductsHook = useGetWomenrelatedProducts(id || "", category || "");
    } else if (category?.startsWith("kids")) {
      productHook = useGetKidsProductId(id || "");
      relatedProductsHook = useGetKidsrelatedProducts(id || "", category || "");
    } else {
      productHook = useGetMenProductId(id || "");
      relatedProductsHook = useGetMenrelatedProducts(id || "", category || "");
    }
  
    const { data: product, isLoading: isLoadingProduct, isFetched: isFetchedProduct } = productHook;
    const { data: relatedProducts } = relatedProductsHook;
  
    return { product, isLoading: isLoadingProduct, isFetched: isFetchedProduct, relatedProducts };
  };

  