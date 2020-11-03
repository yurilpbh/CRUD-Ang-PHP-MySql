import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Students[]>('http://127.0.0.1:8000/read.php');
  }

  delete(id:number) {
    return this.http.delete<Students[]>('http://127.0.0.1:8000/delete.php?id=' + id);
  }

  create(student:Students){
    return this.http.post('http://127.0.0.1:8000/create.php', student);
  }

  getById(id:number){
    return this.http.get<Students[]>('http://127.0.0.1:8000/getById.php?id=' + id);
  }

  update(student: Students){
    return this.http.put('http://127.0.0.1:8000/update.php?id=' + student.sId, student);
  }
  
}
