import { Component, Input, SimpleChanges } from '@angular/core';

interface StackData{
  technology: string,
  imageSrc:string,
}

interface CardInformationData{
  cardName: string,
  description:string,
  githubUrl:string,
  webUrl:string,
  stack:string[],
  imgLandingPage :string
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() cardInformation: CardInformationData = {
    cardName: "",
    description: "",
    githubUrl: "",
    webUrl: "",
    stack:[],
    imgLandingPage:""
  };
  stackImages = {
    NET:'assets/img/NetIcon.jpg',
    CSharp:'assets/img/CSharpIcon.jpg',
    Jquery:'assets/img/JQueryIcon.png',
    PostgreSql:'assets/img/PostgreSQLIcon.png',
    Html:'assets/img/HtmlIcon.png',
    Css:'assets/img/CssIcon.webp',
    Javascript:'assets/img/JavascriptIcon.jpg',
    React:'assets/img/ReactIcon.jpg',
    Java:'assets/img/JavaIcon.jpg',
    SpringBoot:'assets/img/SpringBootIcon.jpg',
    MySql:'assets/img/MysqlIcon.png',
    Oracle:'assets/img/oracleIcon.webp'
  }
  stackInput: StackData[] = [];


  ngOnInit() {

    this.stackInput = this.cardInformation.stack.map(tech => {
      return {
      technology: tech,
      imageSrc: (this.stackImages as any)[tech]
    }});


  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cardInformation']) {
      this.stackInput = this['cardInformation'].stack.map(tech => ({
        technology: tech,
        imageSrc: (this.stackImages as any)[tech]
      }));
    }
  }




}
