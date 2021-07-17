/**
 * 
 * Static class I created which uses fetch api macanisim
 */

export default class http {
  static get = async (url: string, rest?: any) => { // static method get => HTTP GET method
    const res = await fetch(url,{ ...rest });
    const data = await res.json();
    return { res, data };
  };
}