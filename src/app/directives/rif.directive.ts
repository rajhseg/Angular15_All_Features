import { ChangeDetectorRef, Directive, DoCheck, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector:'[RIf]'
})
export class RIfDirective implements DoCheck {

  @Input('RIf') set Value(value: boolean) {
    this.context.isTrue = value;
    this.RenderTemplate();
  }

  @Input() RIfThen: TemplateRef<any> | undefined;
  @Input() RIfElse: TemplateRef<any> | undefined;

  private context = new RIfContext();

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef,
    private changeRef: ChangeDetectorRef) {

  }

  ngDoCheck(): void {
    this.RenderTemplate();
  }

  RenderTemplate(): void {
    this.vcRef.clear();
    if (this.context) {
      if (this.context.isTrue && this.RIfThen) {
        this.vcRef.createEmbeddedView(this.RIfThen, this.context);
        this.vcRef.createEmbeddedView(this.templateRef, this.context);
      } else {
        if (this.RIfElse) {
          this.vcRef.createEmbeddedView(this.RIfElse, this.context);
          this.vcRef.createEmbeddedView(this.templateRef, this.context);
        }
      }
    }

    this.changeRef.markForCheck();
  }
}

export class RIfContext {
  public isTrue: boolean = false;

  constructor(private istrue: boolean = false) {
    this.isTrue = istrue;
  }
}
