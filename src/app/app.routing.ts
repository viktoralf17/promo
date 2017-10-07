import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';

// impor module
import { HomeComponent } from './component/home.component';
import { MagitserComponent } from './component/magister.component';


const appRoutes: Routes = [
	{ path: '', component: HomeComponent } ,
	{ path: 'algo', component: MagitserComponent } 	
	//{ path: '**' , }	
]; 


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
