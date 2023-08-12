import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoBlockComponent } from './components/video-block/video-block.component';
import { TabsBlockComponent } from './components/tabs-block/tabs-block.component';
import { SliderBlockComponent } from './components/slider-block/slider-block.component';
import { PartnersBlockComponent } from './components/partners-block/partners-block.component';
import { FormGruopBlockComponent } from './components/form-gruop-block/form-gruop-block.component';
import { ChessBlockComponent } from './components/chess-block/chess-block.component';
import { InformationsBlockComponent } from './components/informations-block/informations-block.component';
import { SkillsBlockComponent } from './components/skills-block/skills-block.component';
import { SignatureBlockComponent } from './components/signature-block/signature-block.component';
import { HeaderBlockComponent } from './components/header-block/header-block.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoBlockComponent,
    TabsBlockComponent,
    SliderBlockComponent,
    PartnersBlockComponent,
    FormGruopBlockComponent,
    ChessBlockComponent,
    InformationsBlockComponent,
    SkillsBlockComponent,
    SignatureBlockComponent,
    HeaderBlockComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
