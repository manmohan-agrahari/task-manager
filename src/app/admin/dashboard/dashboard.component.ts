import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation:string="";
  Username:string="";
  NoOfTeamMembers:number=0;
  TotalCostOfAllProject:number=0;
  PendingTasks:number=0;
  UpComingProjects:number=0;
  ProjectCost:number=0;
  CurrentExpenditure:number=0;
  AvailableFunds:number=0;

  Clients:string[]=[];
  Projects:string[]=[];
  Years:number[]=[];
  TeamMembersSummary:any=[];
  TeamMembers:any=[];
  today:Date;
  
  constructor(private dashboardService:DashboardService){

  }


  ngOnInit(): void {
    this.Designation="Team Leader";
    this.Username="John Smith";
    this.NoOfTeamMembers=61;
    this.TotalCostOfAllProject=834567;
    this.PendingTasks=77;
    this.UpComingProjects=0.2;
    this.ProjectCost=321456;
    this.CurrentExpenditure=65437;
    this.AvailableFunds=87650;
    this.today=new Date();
    this.Clients=['TCS','Wipro','Samsung','Accenture.Pvt.Ltd']
    this.Projects=["Project A","Project B","Project C","Project D"]
    for(var i=2010;i<=2020;i++)
    this.Years.push(i)
    this.TeamMembersSummary=this.dashboardService.getTeamMembersSummary();
  
  this.TeamMembers=[
    {
      Region:"East", Members:[
        {Id:1, Name:"Ford",Status:"Available"},
        {Id:2, Name:"Miller",Status:"Available"},
        {Id:3, Name:"John",Status:"Busy"},
        {Id:4, Name:"Alexa",Status:"Busy"}]
    },
    {
      Region:"South", Members:[
        {Id:1, Name:"Ford",Status:"Available"},
        {Id:2, Name:"Miller",Status:"Available"},
        {Id:3, Name:"John",Status:"Busy"},
        {Id:4, Name:"Alexa",Status:"Busy"}]
    },
    {
      Region:"West", Members:[
        {Id:1, Name:"Ford",Status:"Available"},
        {Id:2, Name:"Miller",Status:"Available"},
        {Id:3, Name:"John",Status:"Busy"},
        {Id:4, Name:"Alexa",Status:"Busy"}]
    }
    ,
    {
      Region:"North", Members:[
        {Id:1, Name:"Ford",Status:"Available"},
        {Id:2, Name:"Miller",Status:"Available"},
        {Id:3, Name:"John",Status:"Busy"},
        {Id:4, Name:"Alexa",Status:"Busy"}]
    }
  ]
    }
    onProjectChange($event){
      const p=($event.target.innerHTML).trim()
      if(p === 'Project A'){
        this.TotalCostOfAllProject=34567;
        this.PendingTasks=7127;
        this.UpComingProjects=142;
        this.ProjectCost=4516;
        this.CurrentExpenditure=165437;
        this.AvailableFunds=7650; 
       }
       else if(p ==="Project B"){
        this.TotalCostOfAllProject=4567;
        this.PendingTasks=2127;
        this.UpComingProjects=1142;
        this.ProjectCost=43416;
        this.CurrentExpenditure=1265437;
        this.AvailableFunds=78650; 
       }
      else if(p ==="Project C"){
        this.TotalCostOfAllProject=134567;
        this.PendingTasks=17127;
        this.UpComingProjects=1142;
        this.ProjectCost=14516;
        this.CurrentExpenditure=1165437;
        this.AvailableFunds=17650; 
       }
      else if(p === "Project D"){
        this.TotalCostOfAllProject=234567;
        this.PendingTasks=7;
        this.UpComingProjects=0;
        this.ProjectCost=1662729;
        this.CurrentExpenditure=15437;
        this.AvailableFunds=501829; 
       }
    }
}
