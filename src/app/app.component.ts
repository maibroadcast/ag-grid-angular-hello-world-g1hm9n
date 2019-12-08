import { Component } from '@angular/core';

import {AllCommunityModules} from "@ag-grid-community/all-modules";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

    columnDefs = [
        {field: 'make' },
        {field: 'model' },
        {field: 'price'}
    ];

    rowData = [
        { NAMA PENGELUAR NOTIS: 'PP MUHAMMAD AZIZAN', JENIS NOTIS: 'P22', JUMLAH: 00000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];

    modules = AllCommunityModules;

}
