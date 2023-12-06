import { Component,OnChanges, SimpleChanges } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { projectsData } from '../Utils/projectsData';

@Component({
  selector: 'app-projects-handler',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects-handler.component.html',
  styleUrl: './projects-handler.component.css'
})
export class ProjectsHandlerComponent {
  myProjects = projectsData
  stackList : string[] = []
  projects : any[] = this.myProjects

  addToFilter(event:Event) : void {
    const projectId = (event.target as HTMLButtonElement).id;
    if (!this.stackList.includes(projectId)) {
      this.stackList.push(projectId);
      this.updateFilteredProjects();
    }
  }

  deleteStack(event:Event):void{
    const elemento : any = (event.target as HTMLButtonElement).parentElement
    const indice = this.stackList.indexOf(elemento)
    if(elemento !== -1){
      this.stackList.splice(indice,1)
      this.updateFilteredProjects()
    }
  }

  private updateFilteredProjects(): void {
    this.projects = this.myProjects.filter((project) =>
      this.stackList.every((stack) => project.stack.includes(stack))
    );
    console.log(this.projects)
  }

}
