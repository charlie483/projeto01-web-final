import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsaveisRoutingModule } from './responsaveis-routing.module';
import { ResponsavelComponent } from './pages/responsavel/responsavel.component';
import { CadResponsavelComponent } from './pages/cad-responsavel/cad-responsavel.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    ResponsavelComponent,
    CadResponsavelComponent
  ],
  imports: [
    CommonModule,
    ResponsaveisRoutingModule,
    NzPageHeaderModule,
    NzLayoutModule,    
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzCheckboxModule,
    NzInputModule,
    NzButtonModule,
    NzGridModule,       
    NzTableModule,
    NzPaginationModule,
    NzIconModule,
    NzSpinModule,
    NzSelectModule,
    NzRadioModule,
    NgxMaskModule.forRoot()
  ]
})
export class ResponsaveisModule { }
