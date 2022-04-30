import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';
import { AppRoute } from '@libraries/ipc/enumerations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        {
          path: AppRoute.Startup,
          loadChildren: () => import('./modules/startup/startup.module').then((m) => m.StartupModule),
        },
        {
          path: AppRoute.Launcher,
          loadChildren: () => import('./modules/launcher/launcher.module').then((m) => m.LauncherModule),
        },
        {
          path: AppRoute.Settings,
          loadChildren: () => import('./modules/settings/settings.module').then((m) => m.SettingsModule),
        },
      ],
      { initialNavigation: 'enabledBlocking', useHash: true }
    ),
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
