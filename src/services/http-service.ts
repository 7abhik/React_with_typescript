import apiClient from "./api-client";

class HTTPService {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  public getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  public delete(id: number) {
    const controller = new AbortController();
    const request = apiClient.delete(this.endpoint + "/" + id, {
      signal: controller.signal,
    });
    return { request };
  }

  public create<T>(entity: T) {
    const controller = new AbortController();
    const request = apiClient.post(this.endpoint, entity, {
      signal: controller.signal,
    });
    return { request };
  }
}

const create = (endpoint: string) => new HTTPService(endpoint);
export default create;
