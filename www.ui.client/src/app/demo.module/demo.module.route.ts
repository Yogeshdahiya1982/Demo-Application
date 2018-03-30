import {Routes, RouterModule} from "@angular/router";

import {DemoPageComponent} from './test/demo.component';


const demoRoutes: Routes = [
    { path: '', component: DemoPageComponent }
    
];

export const DemoModuleRouting = RouterModule.forRoot(demoRoutes);