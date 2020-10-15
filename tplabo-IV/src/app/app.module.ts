import { AnagramasLogic } from './components/juegos/anagrama/clases/anagramas-logic';
import { LoginService } from 'src/app/service/loginService/login.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import { RegisterComponent } from './components/register/register.component';
import { TatetiComponent } from './components/juegos/tateti/tateti.component';
import { PiePapTijComponent } from './components/juegos/pie-pap-tij/pie-pap-tij.component';
import { AnagramaComponent } from './components/juegos/anagrama/anagrama.component';
import { AdivinarNumeroComponent } from './components/juegos/adivinar-numero/adivinar-numero.component';
import { MemotestComponent } from './components/juegos/memotest/memotest.component';
import { AritmeticaComponent } from './components/juegos/aritmetica/aritmetica.component';
import { TetrisComponent } from './components/juegos/tetris/tetris.component';
import { CanvasTetrisComponent } from './components/juegos/tetris/canvas-tetris/canvas-tetris.component';
import { StartMemotestComponent } from './components/juegos/memotest/start-memotest/start-memotest.component';
import { CuadradoMemotestComponent } from './components/juegos/memotest/cuadrado-memotest/cuadrado-memotest.component';
import { StartPPTComponent } from './components/juegos/pie-pap-tij/start-ppt/start-ppt.component';
import { ManosComponent } from './components/juegos/pie-pap-tij/manos/manos.component';
import { StartTatetiComponent } from './components/juegos/tateti/start-tateti/start-tateti.component';
import { CuadradoTatetiComponent } from './components/juegos/tateti/cuadrado-tateti/cuadrado-tateti.component';
import { StartAritmeticaComponent } from './components/juegos/aritmetica/start-aritmetica/start-aritmetica.component';
import { StartAnagramaComponent } from './components/juegos/anagrama/start-anagrama/start-anagrama.component';
import { DiccionarioService } from './service/diccionario.service';
import { HttpClientModule } from '@angular/common/http';
import { StartAdivinarComponent } from './components/juegos/adivinar-numero/start-adivinar/start-adivinar.component';
import { StartMenuComponent } from './components/juegos/start-menu/start-menu.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    RegisterComponent,
    TatetiComponent,
    PiePapTijComponent,
    AnagramaComponent,
    AdivinarNumeroComponent,
    MemotestComponent,
    AritmeticaComponent,
    TetrisComponent,
    CanvasTetrisComponent,
    StartMemotestComponent,
    CuadradoMemotestComponent,
    StartPPTComponent,
    ManosComponent,
    StartTatetiComponent,
    CuadradoTatetiComponent,
    StartAritmeticaComponent,
    StartAnagramaComponent,
    StartAdivinarComponent,
    StartMenuComponent,
    AcercaComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    AngularFireModule.initializeApp(environment.firebase,"utn-pps-carloscastro"),
    AngularFireDatabaseModule,
  ],
  providers: [
    LoginService,
    AngularFireDatabase,
    AngularFireAuth,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    DiccionarioService,
    AnagramasLogic,
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
