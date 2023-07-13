import { ChangeDetectorRef, Directive, DoCheck, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[RFor]'
})
export class RforDirective implements DoCheck {

  private _collection: Array<any> | null = null;

  @Input('RFor') set collection(value: Array<any> | null) {
    this._collection = value;
    this.RenderCollection();
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef, private changeRef: ChangeDetectorRef) {
    
  }

  ngDoCheck(): void {
    this.RenderCollection();
  }

  RenderCollection(): void {
    if (this._collection) {
      this.vcRef.clear();
      for (var i = 0; i < this._collection.length; i++) {
        var item = JSON.parse('{}');
        item['data'] = this._collection[i];
        item['$implict'] = i;
        this.vcRef.createEmbeddedView(this.templateRef, item);
      }

      this.changeRef.markForCheck();
    }
  }

}
