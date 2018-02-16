import { TiendaService } from './_service/tienda.service';
import { PlatoService } from './_service/plato.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { PlatoComponent } from './plato/plato.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { ComboboxDirective } from './_directive/combobox.directive';
import { AppRoutingModule } from './app-routing.module';
import { PlatoListaComponent } from './plato/plato-lista/plato-lista.component';
import { PlatoDetalleComponent } from './plato/plato-detalle/plato-detalle.component';
import { PlatoEdicionComponent } from './plato/plato-edicion/plato-edicion.component';
import { PlatoInicioComponent } from './plato/plato-inicio/plato-inicio.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from "angular2-datatable";
import { PlatoFilterPipe } from './_pipe/plato-filter.pipe';

import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { ConfirmModalComponent } from './componentes/modal/confirm-modal/confirm-modal.component';
import { ConsumoService } from './_service/consumo.service';
import { ConsultaService } from './_service/consulta.service';
import { ClienteService } from './_service/cliente.service';
import { Ng2CompleterModule } from "ng2-completer";

import { TabsModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { DatePickerComponent } from './componentes/pickers/date-picker/date-picker.component';
import { SimpleModalComponent } from './componentes/modal/simple-modal/simple-modal.component';
import { AlertModule } from 'ngx-bootstrap';
import { LoginComponent } from './login/login.component';
import { LoginService } from './_service/login.service';
import { LoginGuard } from './_service/login-guard.service';
import { CursoService } from './_service/curso.service';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilEdicionComponent } from './perfil/perfil-edicion/perfil-edicion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConsultaComponent,
    PlatoComponent,
    ConsumoComponent,
    ComboboxDirective,
    PlatoListaComponent,
    PlatoDetalleComponent,
    PlatoEdicionComponent,
    PlatoInicioComponent,
    PlatoFilterPipe,
    ConfirmModalComponent,
    DatePickerComponent,
    SimpleModalComponent,
    LoginComponent,
    PerfilComponent,
    PerfilEdicionComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    HttpClientModule,
    ModalModule.forRoot(),
    Ng2CompleterModule,
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [PlatoService, ConsumoService, ConsultaService, ClienteService, LoginService, LoginGuard, CursoService, TiendaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
