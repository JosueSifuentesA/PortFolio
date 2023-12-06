import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from '../app/hero/hero.component'
import { SocialMediasComponent } from '../app/social-medias/social-medias.component'
import { ProjectsHandlerComponent } from '../app/projects-handler/projects-handler.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeroComponent,SocialMediasComponent,ProjectsHandlerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Josue Sifuentes Alvarez';
}
