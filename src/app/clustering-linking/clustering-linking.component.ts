/// <reference path="../../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />
import { AfterViewInit, Component, ElementRef, OnChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clustering-linking',
  templateUrl: './clustering-linking.component.html',
  styleUrls: ['./clustering-linking.component.scss']
})
export class ClusteringLinkingComponent implements OnChanges, AfterViewInit {
  @ViewChild('BMap')
  BMapViewChild!: ElementRef;

  BMap: Microsoft.Maps.Map | undefined;

  constructor() {}

  ngOnChanges() {}

  ngAfterViewInit() {
    this.createMap();
  }

  createMap() {
    this.BMap = new Microsoft.Maps.Map(this.BMapViewChild.nativeElement, {credentials: ""});
  }
}
