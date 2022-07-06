
// tslint:disable-next-line:no-reference
/// <reference path="../../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.d.ts" />
import { AfterViewInit, Component, ElementRef, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { BingApiLoaderService } from '../bing-api-loader.service';

@Component({
  selector: 'app-clustering-linking',
  templateUrl: './clustering-linking.component.html',
  styleUrls: ['./clustering-linking.component.scss']
})
export class ClusteringLinkingComponent implements OnChanges, AfterViewInit {
  @ViewChild('BMap')
  BMapViewChild!: ElementRef;

  // tslint:disable
  BMap: Microsoft.Maps.Map | undefined;
  mapLoaded = false;

  constructor(private bingApiLoader: BingApiLoaderService) {
    this.bingApiLoader.load().then(() => {
      this.mapLoaded = true;
    });
  }

  ngOnChanges(changes: SimpleChanges) {}

  ngAfterViewInit() {}

  createMap() {
    this.BMap = new Microsoft.Maps.Map(this.BMapViewChild.nativeElement, {credentials: ""});
  }
  // tslint:enable
}
