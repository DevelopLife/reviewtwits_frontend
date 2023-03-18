import Cookies from 'universal-cookie';

const cookies = new Cookies();

export function setCookie(name: string, value: string) {
  cookies.set(name, value, { path: '/' });
}

export function getCookie(name: string) {
  cookies.get(name);
}

export function removeCookie(name: string) {
  cookies.remove(name);
}
