import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  constructor() { 

  }
  getTeamMembersSummary() {
    const TeamMembersSummary=[
      {Region:"East",TeamMembers:42,Temporary_Unavailable_Members:20},
      {Region:"South",TeamMembers:82,Temporary_Unavailable_Members:80},
      {Region:"West",TeamMembers:10,Temporary_Unavailable_Members:10},
      {Region:"North",TeamMembers:32,Temporary_Unavailable_Members:12}];
      return TeamMembersSummary;
  }
}
