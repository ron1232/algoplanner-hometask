export default class http {
  static get = async (url: string, rest?: any) => {
    const res = await fetch(url,{ ...rest });
    const data = await res.json();
    return { res, data };
  };
}