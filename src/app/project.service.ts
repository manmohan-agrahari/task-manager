import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { p } from './project'

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private httpClient: HttpClient) {}
  getAllProject(): Observable<p[]> {
    return this.httpClient.get<p[]>('http://localhost:3000/projects')
  }

  insertProject(newProject: p): Observable<p> {
    return this.httpClient.post<p>('http://localhost:3000/projects', newProject)
  }

  updateProject(existingProject: p): Observable<p> {
    return this.httpClient.put<p>(
      `http://localhost:3000/projects/${existingProject.ProjectId}`,
      existingProject,
    )
  }
  deleteProject(pid:number):Observable<p>{
    return this.httpClient.delete<p>(`http://localhost:3000/projects/${pid}`)
  }
  searchProject(searchBy:string,searchText:string):Observable<p[]>{
    return this.httpClient.get<p[]>(`http://localhost:3000/projects/${searchBy}/${searchText}`)
  }
}
