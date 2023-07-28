import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sample-page1',
    loadChildren: () => import('./pages/sample-page1/sample-page1.module').then( m => m.SamplePage1PageModule)
  },
  {
    path: 'sample-page2',
    loadChildren: () => import('./pages/sample-page2/sample-page2.module').then( m => m.SamplePage2PageModule)
  },
  {
    path: 'sample-page3',
    loadChildren: () => import('./pages/sample-page3/sample-page3.module').then( m => m.SamplePage3PageModule)
  },
  {
    path: 'sample-page4',
    loadChildren: () => import('./pages/sample-page4/sample-page4.module').then( m => m.SamplePage4PageModule)
  },
  
  {
    path: 'exercise1',
    loadChildren: () => import('./pages/exercise1/exercise1.module').then( m => m.Exercise1PageModule)
  },
  {
    path: 'exercise4',
    loadChildren: () => import('./pages/exercise4/exercise4.module').then( m => m.Exercise4PageModule)
  },
  {
    path: 'sample-page5',
    loadChildren: () => import('./pages/sample-page5/sample-page5.module').then( m => m.SamplePage5PageModule)
  },
  {
    path: 'sample-page6',
    loadChildren: () => import('./pages/sample-page6/sample-page6.module').then( m => m.SamplePage6PageModule)
  },
  {
    path: 'sample-page8',
    loadChildren: () => import('./pages/sample-page8/sample-page8.module').then( m => m.SamplePage8PageModule)
  },
  {
    path: 'exercise6',
    loadChildren: () => import('./pages/exercise6/exercise6.module').then( m => m.Exercise6PageModule)
  },
  {
    path: 'sample-page12',
    loadChildren: () => import('./pages/sample-page12/sample-page12.module').then( m => m.SamplePage12PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
