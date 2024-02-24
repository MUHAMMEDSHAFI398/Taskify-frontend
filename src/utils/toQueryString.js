import { isEmpty } from "./utils";

export const toUrlParams = (query) => {
      if(!query || !isEmpty(query)) {
        return ''
      }
    
    const queryString = Object.entries(query)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');

    return `?${queryString}`;
}
