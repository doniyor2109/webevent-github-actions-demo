const BASE_URL = import.meta.VITE_VERCEL_URL || window.location.origin;

function api() {
  const url = new URL('/api/todo', BASE_URL);

  function fetchArtifact(init?: RequestInit) {
    return fetch(url.toString(), init);
  }

  return {
    get() {
      return fetchArtifact({ method: 'GET' }).then((res) => res.json());
    },
    save(value: any) {
      return fetchArtifact({
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
  };
}

export class RemoteStorage {
  static setItem(data: any) {
    return api().save(data);
  }

  static getItem() {
    return api().get();
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
