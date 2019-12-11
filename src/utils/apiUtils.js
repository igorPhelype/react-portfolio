import config from '../config';

export const fetchPublications = async () => {
    const customHeaders = new Headers();
    customHeaders.append('Content-Type', 'application/json');
    const res = await fetch(config.graphqlUrl, {
        method: 'POST',
        headers: customHeaders,
        body: JSON.stringify({
            query: `query{
                GetPublications{
                    title,
                    created_at,
                    category{
                        _id,
                        created_at,
                        title,
                        description
                    },
                    _id
                }
            }`
        })
    });
    const json = await res.json();
    return (
        json.data || {GetPublications : []}
    ).GetPublications;
}