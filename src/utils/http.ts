export default class http {
  static get = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return { res, data };
  };
}

export interface Http {
  res: object;
  data: object
}