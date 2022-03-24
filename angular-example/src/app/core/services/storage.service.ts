import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  getLocalItem(key: string) {
    return localStorage.getItem(key);
  }

  setLocalItem(key: string, value: string) {
    localStorage.setItem(key, String(value));
  }

  removeLocalItem(key: string) {
    localStorage.removeItem(key);
  }
}
