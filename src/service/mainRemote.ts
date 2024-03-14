import BaseRemoteService from "./baseRemote";

export default class MainRemote extends BaseRemoteService {
  testApi(){
    return this.get('http://localhost:8080/api/test');
  }
}

export const mainRemote = new MainRemote();