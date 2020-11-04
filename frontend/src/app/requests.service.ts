import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Requests } from './requests';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Requests[]>('http://127.0.0.1:8000/read.php');
  }

  delete(id:number) {
    return this.http.delete<Requests[]>('http://127.0.0.1:8000/delete.php?id=' + id);
  }

  create(request:Requests){
    return this.http.post('http://127.0.0.1:8000/create.php', request);
  }

  getById(id:number){
    return this.http.get<Requests[]>('http://127.0.0.1:8000/getById.php?id=' + id);
  }

  update(request: Requests){
    return this.http.put('http://127.0.0.1:8000/update.php?id=' + request.clientId, request);
  }
  
}
