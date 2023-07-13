import {
  AfterContentChecked, AfterViewChecked, AfterViewInit, ChangeDetectorRef,
  ContentChild, ContentChildren, Directive, DoCheck,
  ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChildren, ViewContainerRef
} from "@angular/core";


@Directive({ selector: '[rswitchdefault]' })
export class RSwitchDefault {

  constructor(private templateRef: TemplateRef<any>, private vcf: ViewContainerRef,
    private changeRef: ChangeDetectorRef) {

  }

  RenderView() {
    this.vcf.clear();
    this.vcf.createEmbeddedView(this.templateRef);
  }
}

@Directive({ selector: '[rswitchcase]' })
export class RSwitchCaseDirective {

  private _caseValue: any | undefined;
  private _isDefault: boolean = false;

  @Input('rswitchcase') set CaseValue(value: any) {
    this._caseValue = value;    
  }

  get CaseValue(): any {
    return this._caseValue;
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

  }

  RenderView() {
    this.vcRef.clear();
    this.vcRef.createEmbeddedView(this.templateRef)    
  }

  ClearContainer() {
    this.vcRef.clear();
  }
}


@Directive({ selector: '[rswitch]' })
export class RSwitchDirective implements OnInit, AfterContentChecked, DoCheck {

  private _switchValue: any;
  private _renderedView: boolean = false;

  @Input('rswitch') set SwitchValue(value: any) {
    this._switchValue = value;
  }

  @ContentChildren(RSwitchCaseDirective) views: QueryList<RSwitchCaseDirective> | undefined;
  @ContentChild(RSwitchDefault) defaultView: RSwitchDefault | undefined;

  constructor(private ele: ElementRef) {
       
  }

  ngDoCheck(): void {
    if (this.views) {
      this._renderedView = false;

      this.views.forEach((x) => {
        x.ClearContainer();
        if (x.CaseValue == this._switchValue) {
          x.RenderView();
          this._renderedView = true;
        }      
      });

      if (!this._renderedView) {
        this.defaultView?.RenderView();
      }
    }
  }

  ngAfterContentChecked(): void {
    console.log(this.views);
  }

  ngOnInit(): void {
    
  }
}
