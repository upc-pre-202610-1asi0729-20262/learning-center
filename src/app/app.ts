import { Component, inject, signal } from '@angular/core';
import { Layout } from './shared/presentation/components/layout/layout';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [Layout],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('learning-center');

  /**
   * Translation service instance.
   */
  private translate: TranslateService;

  /**
   * Creates an instance of App and sets up translation.
   */
  constructor() {
    this.translate = inject(TranslateService);
    this.translate.addLangs(['en', 'es']);
    this.translate.use('en');
  }
}
