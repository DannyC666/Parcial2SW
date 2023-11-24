import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: Array<Curso> = [];
  selected: Boolean = false;
  selectedCurso!: Curso;

  constructor(private cursoService: CursosService) { }
  getCursos(): void {
    this.cursoService.getCursos().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }
  ngOnInit() {
    this.getCursos();
  }
    onSelected(curso: Curso): void {
    this.selected = true;
    this.selectedCurso = curso;
  }

}
