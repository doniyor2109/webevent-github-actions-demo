const BASE_URL = import.meta.VITE_VERCEL_URL || location.origin;

function artifact(name: string) {
  const url = new URL('/api/artifact', BASE_URL);
  url.searchParams.set('name', name);

  function fetchArtifact(init?: RequestInit) {
    return fetch(url.toString(), init).then((res) => res.json());
  }

  return {
    get() {
      return fetchArtifact({ method: 'GET' });
    },
    save(value: any) {
      return fetchArtifact({
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
          'content-type': 'application/json',
        },
      });
    },
  };
}

export class ArtifactStorage {
  static setItem(namespace: string, data: any) {
    return artifact(namespace).save(data);
  }

  static getItem(namespace: string) {
    return artifact(namespace).get();
  }
}

export class LocalStorage {
  static setItem(namespace: string, data: any) {
    return localStorage.setItem(namespace, JSON.stringify(data));
  }

  static getItem(namespace: string) {
    var store = localStorage.getItem(namespace);
    return (store && JSON.parse(store)) || [];
  }
}
