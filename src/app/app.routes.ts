import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { CounterComponent } from './components/counter/counter.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TemporizadorComponent } from './components/temporizador/temporizador.component';
import { ListaComentariosComponent } from './components/lista-comentarios/lista-comentarios.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';


export const routes: Routes = [

    {path: 'saludo',  component: SaludoComponent},
    {path: 'reloj', component: CounterComponent},
    {path: 'listaDeTareas', component: TaskListComponent},
    {path: 'temporizador', component: TemporizadorComponent},
    {path: 'inicio'  , component: LandingComponent},
    {path: 'comentarios', component: ListaComentariosComponent},
    {path: 'productos',component: ListaProductoComponent},
    {path: 'calculadora', component:CalculadoraComponent},
    {path: '**', redirectTo: 'inicio', pathMatch: 'full'},
    {path: '',redirectTo:'inicio', pathMatch:'full'}
    

];
