import { ScoresComponent } from './components/juegos/scores/scores.component';
import { SessionGuard } from './session.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StartMenuComponent } from './components/juegos/start-menu/start-menu.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { StartAdivinarComponent } from './components/juegos/adivinar-numero/start-adivinar/start-adivinar.component';
import { AdivinarNumeroComponent } from './components/juegos/adivinar-numero/adivinar-numero.component';
import { StartAnagramaComponent } from './components/juegos/anagrama/start-anagrama/start-anagrama.component';
import { AnagramaComponent } from './components/juegos/anagrama/anagrama.component';
import { StartAritmeticaComponent } from './components/juegos/aritmetica/start-aritmetica/start-aritmetica.component';
import { AritmeticaComponent } from './components/juegos/aritmetica/aritmetica.component';
import { StartTatetiComponent } from './components/juegos/tateti/start-tateti/start-tateti.component';
import { StartPPTComponent } from './components/juegos/pie-pap-tij/start-ppt/start-ppt.component';
import { StartMemotestComponent } from './components/juegos/memotest/start-memotest/start-memotest.component';
import { MemotestComponent } from './components/juegos/memotest/memotest.component';
import { CanvasTetrisComponent } from './components/juegos/tetris/canvas-tetris/canvas-tetris.component';
import { TetrisComponent } from './components/juegos/tetris/tetris.component';
import { PiePapTijComponent } from './components/juegos/pie-pap-tij/pie-pap-tij.component';
import { TatetiComponent } from './components/juegos/tateti/tateti.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'mainPage', component: MainPageComponent,canActivate:[SessionGuard],
    children: [
      { path: '', component: StartMenuComponent, pathMatch:'full'},
      { path: 'TaTeTI', component: TatetiComponent,
        children: [
        { path: 'startTTT', component: StartTatetiComponent, pathMatch:'full'},
      ] },
      { path: 'pierdraPapelTijera', component: PiePapTijComponent,
        children: [
          { path: 'startPPT', component: StartPPTComponent, pathMatch:'full'},
        ]
      },
      { path: 'tetris', component: TetrisComponent,
        children: [
          { path: 'startTetris', component:CanvasTetrisComponent , pathMatch:'full'},
        ]
      },
      { path: 'memotest', component: MemotestComponent,
        children: [
          { path: 'startMemotest', component:StartMemotestComponent , pathMatch:'full'},
        ]
      },
      { path: 'aritmetica', component: AritmeticaComponent,
        children: [
        { path: 'startAritmetica', component: StartAritmeticaComponent, pathMatch:'full'},
      ] },
      { path: 'anagramas', component: AnagramaComponent,
        children: [
        { path: 'startAnagramas', component: StartAnagramaComponent, pathMatch:'full'},
      ] },
      { path: 'adivinarNumero', component: AdivinarNumeroComponent,
        children: [
        { path: 'startAdivinar', component: StartAdivinarComponent, pathMatch:'full'},
      ] },
      { path: 'scores', component: ScoresComponent, pathMatch:'full'},
      { path: 'acerca', component: AcercaComponent, pathMatch:'full'},
      { path: '**', redirectTo:'../NotFound'},
    ]
  },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
