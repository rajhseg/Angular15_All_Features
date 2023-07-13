import { Directive, DoCheck, ElementRef, Input } from "@angular/core";

@Directive({ selector: '[rhighlight]' })
export class RHighlightDirective implements DoCheck{

  private _isHighlight: boolean = false;

  @Input('rhighlight') set isHighlight(value: boolean) {
    this._isHighlight = value;
  }

  @Input('rColor') rColor: string | undefined;

  constructor(private ele: ElementRef) {
    
  }

  ngDoCheck(): void {
    this.HighLightElement();
  }

  HighLightElement(): void {
    if (this._isHighlight && this.rColor) {
      this.ele.nativeElement.style.background = this.rColor;
    }
    else {
      this.ele.nativeElement.style.background = "none";
    }
  }
}
