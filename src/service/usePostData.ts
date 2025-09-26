import { useState } from 'react';

export default function usePostData<TPayload extends object>() {
    const [data, setData] = useState<{ ok: boolean } | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const postData = async (payload: TPayload): Promise<boolean> => {
        setLoading(true);
        setError(null);

        const originUrl = window.location.origin;
        const url = `${import.meta.env.VITE_WEB_APP_URL}?origin=${encodeURIComponent(originUrl)}`;

        try {
            await fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify(payload),
            });

            setData({ ok: true });

            return true;

        } catch (e) {
            setError(null);
            return true;
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, postData };
}
