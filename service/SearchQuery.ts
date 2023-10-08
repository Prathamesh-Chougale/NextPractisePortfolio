import qs from 'query-string'

interface UrlQueryParams {
    params: string;
    key?: string;
    keysToRemove?: string[];
    value?: string | null;
}

export function formUrlForm({ params, key, value, keysToRemove }: UrlQueryParams) {
    const currentUrl = qs.parseUrl(params);

    // if (typeof currentUrl.query === 'string') {
    //     throw new Error('Query string cannot be parsed');
    // }

    if (keysToRemove) {
        keysToRemove.forEach((keyToRemove) => {
            delete currentUrl.query[keyToRemove];
        })
    } else if (key && value) {
        currentUrl.query[key] = value;
    }

    return qs.stringifyUrl({ url: window.location.pathname, query: currentUrl.query },
        { skipNull: true }
    );
}