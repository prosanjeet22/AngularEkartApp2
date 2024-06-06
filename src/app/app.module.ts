import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchComponent } from './product-list/search/search.component';
import { FormsModule } from '@angular/forms';
import { NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';
import { ProductComponent } from './ng-for-directive/product/product.component';
import { FilterComponent } from './ng-for-directive/filter/filter.component';
import { InputOutputDirectiveComponent } from './input-output-directive/input-output-directive.component';
import { ChildComponentComponent } from './input-output-directive/child-component/child-component.component';
import { PracticeComponent } from './input-output-directive/practice/practice.component';
import { NgComponentExampleComponent } from './ng-component-example/ng-component-example.component';
import { NgchildExampleComponent } from './ng-component-example/ngchild-example/ngchild-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ProductListComponent,
    SearchComponent,
    NgForDirectiveComponent,
    ProductComponent,
    FilterComponent,
    InputOutputDirectiveComponent,
    ChildComponentComponent,
    PracticeComponent,
    NgComponentExampleComponent,
    NgchildExampleComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
