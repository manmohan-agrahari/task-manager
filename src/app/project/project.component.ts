import { Component, OnInit } from '@angular/core'
import { p } from '../project'
import { ProjectService } from '../project.service'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  Projects: p[]
  newProject:p=new p()  
  new1Project:p=new p()
  editProject:p=new p()
  editIndex:number=null;
  deleteProject:p=new p()
  deleteIndex:number=null;
  searchBy:string="projectname";
  searchText:string="";


  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getAllProject().subscribe((res: p[]) => {
      this.Projects=res;
      console.log(this.Projects)
    })
  }
  onSaveClick(){
    //if ajax request exceute succsessfully then response comes else if anuy run time exception happens then
    //error executes
    this.projectService.insertProject(this.newProject).subscribe((response)=>{
     var p2:p=new p();
     p2.ProjectId=response.ProjectId;
     p2.ProjectName=response.ProjectName;
     p2.DateOfStart=response.DateOfStart;
     p2.TeamSize=response.TeamSize
     this.Projects.push(p2)
      //clearing the dialog box
      this.newProject.ProjectId=null;
    this.newProject.ProjectName=null;
    this.newProject.DateOfStart=null;
    this.newProject.TeamSize=null;
    },(error)=>{console.log(error)})


  }
  onEditClick(event,index:number) {
    this.editProject.ProjectId=this.Projects[index].ProjectId;
    this.editProject.ProjectName=this.Projects[index].ProjectName;
    this.editProject.TeamSize=this.Projects[index].TeamSize;
    this.editProject.DateOfStart=this.Projects[index].DateOfStart;
    this.editIndex=index;
  }
  onUpdateClick(){
    console.log(this.editProject)
    this.projectService.updateProject(this.editProject).subscribe((response:p)=>{
     var p2:p=new p();
     p2.ProjectId=response.ProjectId;
     p2.ProjectName=response.ProjectName;
     p2.DateOfStart=response.DateOfStart;
     p2.TeamSize=response.TeamSize;
     this.Projects[this.editIndex]=p2;

     //resetting
     this.editProject.ProjectId=null;
     this.editProject.ProjectName=null;
     this.editProject.DateOfStart=null;
     this.editProject.TeamSize=null;
    })

   
  }

  onDeleteClick($event,index:number){
    this.deleteIndex=index;
    this.deleteProject.ProjectId=this.Projects[index].ProjectId;
    this.deleteProject.ProjectName=this.Projects[index].ProjectName;
    this.deleteProject.TeamSize=this.Projects[index].TeamSize;
    this.deleteProject.DateOfStart=this.Projects[index].DateOfStart;
  }
  onDeleteConfirm()
  {
    this.projectService.deleteProject(this.deleteProject.ProjectId).subscribe((response)=>{
      this.Projects.splice(this.deleteIndex,1)
      //splice has two parameter first index second one is number of object to remove 
      this.deleteProject.ProjectId=null;
    this.deleteProject.ProjectName=null;
    this.deleteProject.TeamSize=null;
    this.deleteProject.DateOfStart=null;
    },(error)=>{
      console.log(error)
    })
  }

  onSearchClick() {
    this.projectService.searchProject(this.searchBy,this.searchText).subscribe((response:p[])=>{
      this.Projects=response;
    },(error)=>{
      console.log(error)
    })
  }
      

 
}
