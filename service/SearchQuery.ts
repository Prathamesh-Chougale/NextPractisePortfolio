import qs, { ParsedUrl } from 'query-string'

interface UrlQueryParams {
    params: string;
    key: string;
    value: string | null;
}

export function formUrlForm({ params, key, value }: UrlQueryParams) {
    const currentUrl = qs.parseUrl(params);

    // if (typeof currentUrl.query === 'string') {
    //     throw new Error('Query string cannot be parsed');
    // }

    currentUrl.query[key] = value;

    return qs.stringifyUrl({ url: window.location.pathname, query: currentUrl.query },
        { skipNull: true }
    );
}